import type {
  PairData as BasePairData,
  PairDataResponse as BasePairDataResponse,
} from './SolidlyPool';
import { SolidlyPool } from './SolidlyPool';
import type { SwapFeeParams } from '../types';
import { BigNumber } from 'bignumber.js';
import type { ShapeWithLabel } from 'eth-multicall';
import { createContract } from '../../../../../helpers/web3';
import type { AbiItem } from 'web3-utils';

type PairDataResponse = BasePairDataResponse & {
  swapFee: string;
};

type PairData = BasePairData & {
  swapFee: BigNumber;
};

const ConePairAbi: AbiItem[] = [
  {
    inputs: [],
    name: 'swapFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class ConeSolidlyPool extends SolidlyPool {
  protected pairData: PairData | undefined = undefined;

  protected getPairDataRequest(): ShapeWithLabel[] {
    const contract = createContract(ConePairAbi, this.address);
    return [
      {
        ...super.getPairDataRequest()[0],
        swapFee: contract.methods.swapFee(),
      },
    ];
  }

  protected consumePairDataResponse(untypedResult: unknown[]) {
    const result = (untypedResult as PairDataResponse[])[0];

    super.consumePairDataResponse(untypedResult);

    if (!this.pairData) {
      throw new Error('Pair data is not loaded');
    }

    this.pairData.swapFee = new BigNumber(result.swapFee);
  }

  protected getSwapFeeParams(): SwapFeeParams {
    if (!this.pairData) {
      throw new Error('Pair data is not loaded');
    }

    return {
      numerator: new BigNumber(this.amm.swapFeeNumerator),
      denominator: this.pairData.swapFee,
    };
  }
}
