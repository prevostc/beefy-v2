import { createAsyncThunk } from '@reduxjs/toolkit';
import type { BeefyState } from '../../../../redux-types';
import { getStellaSwapRewardsApi } from '../../apis/instances';
import type { StellaSwapVaultReward } from '../../reducers/wallet/user-rewards-types';
import {
  selectAllCowcentratedVaults,
  selectGovCowcentratedVaultById,
} from '../../selectors/vaults';
import { fromWeiString } from '../../../../helpers/big-number';
import type {
  FetchUserStellaSwapRewardsActionParams,
  FetchUserStellaSwapRewardsFulfilledPayload,
} from './stellaswap-user-rewards-types';
import { pushOrSet } from '../../../../helpers/object';
import { selectStellaSwapRewardsForUserShouldLoad } from '../../selectors/data-loader';
import { isDefined } from '../../utils/array-utils';
import { getCowcentratedPool } from '../../entities/vault';

export const fetchUserStellaSwapRewardsAction = createAsyncThunk<
  FetchUserStellaSwapRewardsFulfilledPayload,
  FetchUserStellaSwapRewardsActionParams,
  { state: BeefyState }
>(
  'rewards/fetchUserStellaSwapRewardsAction',
  async ({ walletAddress }, { getState }) => {
    const state = getState();
    const api = await getStellaSwapRewardsApi();

    const response = await api.fetchRewards({
      user: walletAddress,
    });

    if (!response || response.status !== 'success' || !response.data) {
      throw new Error('Failed to fetch StellaSwap rewards');
    }

    const byVaultId: Record<string, StellaSwapVaultReward[]> = {};
    const poolAddressToClmPoolId: Record<string, string> = Object.fromEntries(
      selectAllCowcentratedVaults(state)
        .map(vault => {
          const poolId = getCowcentratedPool(vault);
          return poolId ? [vault.poolAddress.toLowerCase(), poolId] : undefined;
        })
        .filter(isDefined)
    );

    for (const poolData of response.data.pools) {
      const vaultId = poolAddressToClmPoolId[poolData.pool.toLowerCase()];
      if (!vaultId) {
        console.error(`StellaSwap: Failed to find CLM Pool for ${poolData.pool}`);
        continue;
      }
      const vault = selectGovCowcentratedVaultById(state, vaultId);

      for (const rewardToken of poolData.rewardTokens) {
        if (rewardToken.amount === '0') {
          continue;
        }

        const rewardInfo = poolData.rewardInfo.find(info => info.token === rewardToken.address);
        if (!rewardInfo) {
          console.error(`StellaSwap: Failed to find reward info for ${rewardToken.address}`);
          continue;
        }
        const rewardDecimals = parseInt(rewardInfo.decimals);
        const reward = {
          position: rewardToken.position,
          proofs: rewardToken.proofs,
          accumulated: fromWeiString(rewardToken.amount, rewardDecimals),
          unclaimed: fromWeiString(rewardToken.pending, rewardDecimals),
          isNative: rewardToken.isNative,
          claimContractAddress: poolData.rewarder,
          token: {
            address: rewardToken.address,
            chainId: vault.chainId,
            decimals: rewardDecimals,
            symbol: rewardInfo.symbol,
          },
        };

        // Add reward to the vault
        pushOrSet(byVaultId, vaultId, reward);
      }
    }

    return {
      walletAddress,
      byVaultId,
    };
  },
  {
    condition({ walletAddress, force }, { getState }) {
      if (force) {
        return true;
      }
      return selectStellaSwapRewardsForUserShouldLoad(getState(), walletAddress);
    },
  }
);
