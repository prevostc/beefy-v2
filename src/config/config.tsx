import type { ChainConfig } from '../features/data/apis/config-types';
import type { ChainEntity } from '../features/data/entities/chain';

export const config = {
  ethereum: {
    name: 'Ethereum',
    chainId: 1,
    rpc: ['https://rpc.ankr.com/eth'],
    explorerUrl: 'https://etherscan.io',
    multicallAddress: '0x9dA9f3C6c45F1160b53D395b0A982aEEE1D212fE',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x47bec05dC291e61cd4360322eA44882cA468dD54',
    providerName: 'Ethereum',
    native: { symbol: 'ETH', oracleId: 'WETH', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.6,
      priorityMinimum: '1000000000',
      baseSafetyMargin: 0.1,
    },
    stableCoins: [
      'USDC',
      'DAI',
      'USDT',
      'FRAX',
      'DOLA',
      'USDD',
      'alUSD',
      'TUSD',
      'GUSD',
      'BUSD',
      'LUSD',
      'sUSD',
      'MIM',
      'ApeUSD',
      'bbaUSDC',
      'bbaUSDT',
      'bbaDAI',
      'bbaUSD',
      'MAI',
      'sethUSDC',
      'sethUSDT',
      'eUSD',
      'lvUSD',
      'crvUSD',
      'mkUSD',
      'sDAI',
      'sFRAX',
      'R',
      'USDS',
      'sUSDS',
      'syrupUSDC',
      'GHO',
      'fxUSD',
      'bbsDAI',
      'hyUSD',
      'rgUSD',
      'USD3',
      'bpt3POOL',
      'USDC+',
      'PYUSD',
      'USDM',
      'ULTRA',
      'ShezUSD',
      'thUSD',
      'USD0',
      'USD0++',
      'USDe',
      'sUSDe',
      'GYD',
      'sDOLA',
    ],
  },
  polygon: {
    name: 'Polygon PoS',
    chainId: 137,
    rpc: ['https://polygon-bor-rpc.publicnode.com'],
    explorerUrl: 'https://polygonscan.com',
    multicallAddress: '0xC3821F0b56FA4F4794d5d760f94B812DE261361B',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x9C983dd514087674CA1d22A22B7432b614b4C835',
    providerName: 'polygon',
    native: { symbol: 'POL', oracleId: 'WMATIC', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.6,
      priorityMinimum: '1000000000',
      baseSafetyMargin: 0.1,
    },
    stableCoins: [
      'USDC',
      'USDT',
      'maUSDC',
      'DAI',
      'IRON',
      'MAI',
      'FRAX',
      'rUSD',
      'UST',
      'WUSD',
      'jEUR',
      'jGBP',
      'jCHF',
      'EURt',
      'TUSD',
      'PAR',
      'EURS',
      '4EUR',
      'EURA',
      'jJPY',
      'JPYC',
      'jCAD',
      'CADC',
      'jSGD',
      'XSGD',
      'EURe',
      'USD+',
      'bbamUSDC',
      'bbamDAI',
      'bbamUSDT',
      'BRZ',
      'jBRL',
      '2BRZ',
      'bbamUSD',
      'axlUSDC',
      'CASH',
      'BOB',
      'crvUSD',
      'pUSDCe',
    ],
  },
  bsc: {
    name: 'BNB Chain',
    chainId: 56,
    rpc: [
      'https://rpc.ankr.com/bsc',
      'https://bsc-dataseed.binance.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
    ],
    explorerUrl: 'https://bscscan.com',
    multicallAddress: '0xB94858b0bB5437498F5453A16039337e5Fdc269C',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x073d1752efe671AAE0E609a8f61663e3660673d3',
    providerName: 'binance',
    native: { symbol: 'BNB', oracleId: 'WBNB', decimals: 18 },
    gas: {
      type: 'standard',
      minimum: '3000000000',
    },
    stableCoins: [
      'BUSD',
      'USDT',
      'USDC',
      'DAI',
      'VAI',
      'QUSD',
      'UST',
      'VENUS BLP',
      '3EPS',
      'fUSDT',
      '4BELT',
      'IRON',
      'DOLLY',
      'TUSD',
      'USDN',
      'WUSD',
      'USDO',
      'sbBUSD',
      'sbUSDT',
      'FRAX',
      'USDD',
      'MAI',
      'jBRL',
      'BRZ',
      'BRZw',
      'USD+',
      'jCHF',
      'TOR',
      'ETSAlpha',
      'DOLA',
      'USDT+',
      'vUSDT',
      'USDV',
      'lisUSD',
      'axlUSDC',
    ],
  },
  optimism: {
    name: 'Optimism',
    chainId: 10,
    rpc: ['https://mainnet.optimism.io'],
    explorerUrl: 'https://optimistic.etherscan.io',
    multicallAddress: '0x820ae7bf39792d7ce7befc70b0172f4d267f1938',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x5e0388EFf1e18c13E5a2650879DdF1677893bDBc',
    providerName: 'Optimism',
    native: { symbol: 'ETH', oracleId: 'WETH', decimals: 18 },
    gas: {
      type: 'standard',
      minimum: '1000000',
    },
    stableCoins: [
      'USDC',
      'sUSD',
      'DAI',
      'USDT',
      'MAI',
      'FRAX',
      'LUSD',
      'USDM',
      'alUSD',
      'DOLA',
      'soUSDC',
      'USD+',
      'MIM',
      'bbrfaUSD',
      'EURA',
      'jEUR',
      'TUSD',
      'USX',
      'sEUR',
      'bbUSD+',
      'bbDAI+',
      'DAI+',
      'BOB',
      'wTBT',
      'opUSDCe',
      'wUSD+',
      'USDR',
      'wUSDR',
      'omultiwUSDR',
      'sFRAX',
      'crvUSD',
      'USDV',
      'sDAI',
      'aOptUSDC',
      'aOptUSDCn',
      'USDA',
      'HAI',
      'msUSD',
      'wUSDM',
    ],
  },
  fantom: {
    name: 'Fantom',
    chainId: 250,
    rpc: ['https://fantom-mainnet.public.blastapi.io'],
    explorerUrl: 'https://ftmscan.com',
    multicallAddress: '0xC9F6b1B53E056fd04bE5a197ce4B2423d456B982',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0xdd54c53d169aCFC53cAf08F1778A492Ff5Aea258',
    providerName: 'fantom',
    native: { symbol: 'FTM', oracleId: 'WFTM', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.6,
      priorityMinimum: '1000000000',
      baseSafetyMargin: 0.1,
    },
    stableCoins: [
      'USDC',
      'USDT',
      'DAI',
      'fUSDT',
      'MIM',
      'FRAX',
      'MAI',
      'DOLA',
      'TUSD',
      'UST',
      'asUSDC',
      'LAMBDA',
      'sfUSDC',
      'USTw',
      'USTaxl',
      'USDL',
      'TOR',
      'BUSD',
      'alUSD',
      'axlUSDC',
      'lzUSDC',
      'lzUSDT',
      'fUSDCe',
    ],
  },
  arbitrum: {
    name: 'Arbitrum',
    chainId: 42161,
    rpc: ['https://arb1.arbitrum.io/rpc'],
    explorerUrl: 'https://arbiscan.io',
    multicallAddress: '0x13aD51a6664973EbD0749a7c84939d973F247921',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x050b4081e41aB8474a24Dc8C5c50144c65F1b108',
    providerName: 'Arbitrum',
    native: { symbol: 'ETH', oracleId: 'WETH', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.6,
    },
    stableCoins: [
      'USDC',
      'USDT',
      'MIM',
      'VST',
      'DAI',
      'sarUSDC',
      'sarUSDT',
      'FRAX',
      'USX',
      'MAI',
      'USDD',
      'TUSD',
      'EURA',
      'LUSD',
      'DOLA',
      'USD+',
      'DAI+',
      'gDAI',
      'jEUR',
      'arbUSDCe',
      'bbaaUSDC',
      'bbaaUSDT',
      'bbaaDAI',
      'bbaaUSD',
      'bbaaUSDTV2',
      'bbaaUSDCV2',
      'bbaaDAIV2',
      'aArbUSDCn',
      'cArbUSDCv3',
      'crvUSD',
      'arbwUSD+',
      'sFRAX',
      'bpt4POOL',
      'USDT+',
      'aaUSDC',
      'sDAI',
      'USDM',
      'eUSD',
      'KNOX',
      'rgUSD',
      'stataArbUSDCn',
      'stataArbUSDTn',
      'USDV',
      'USDe',
      'wUSDM',
      'USDx',
      'gUSDC',
      'sUSDe',
      'GYD',
      'GHO',
      'stataArbGHOn',
    ],
  },
  avax: {
    name: 'Avalanche',
    chainId: 43114,
    rpc: ['https://rpc.ankr.com/avalanche'],
    explorerUrl: 'https://cchain.explorer.avax.network',
    multicallAddress: '0x6FfF95AC47b586bDDEea244b3c2fe9c4B07b9F76',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0xe60D2cf5140b7D7703D26aD5f581F865a7b51BeF',
    providerName: 'avalanche',
    native: { symbol: 'AVAX', oracleId: 'WAVAX', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.6,
      priorityMinimum: '1000000000',
      baseSafetyMargin: 0.1,
    },
    stableCoins: [
      'USDT',
      'DAI',
      'BUSD',
      'zDAI',
      'zUSDT',
      'USDTe',
      'BUSDe',
      'USDC',
      'USDCe',
      'DAIe',
      'MAI',
      'FRAX',
      'nUSD',
      'MIM',
      'UST',
      'saUSDT',
      'saUSDC',
      'USTw',
      'USD+',
      'DOLA',
      'aavUSDT',
      'aavUSDC',
      'EURC',
    ],
  },
  cronos: {
    name: 'Cronos',
    chainId: 25,
    rpc: ['https://rpc.vvs.finance'],
    explorerUrl: 'https://cronoscan.com',
    multicallAddress: '0x13aD51a6664973EbD0749a7c84939d973F247921',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0xc8872773ADcC8264eEBe5E40D97943434264e973',
    providerName: 'Cronos',
    native: { symbol: 'CRO', oracleId: 'WCRO', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.6,
      baseSafetyMargin: 0.1,
    },
    stableCoins: ['USDC', 'USDT', 'DAI', 'BUSD'],
  },
  moonbeam: {
    name: 'Moonbeam',
    chainId: 1284,
    rpc: ['https://rpc.api.moonbeam.network'],
    explorerUrl: 'https://moonscan.io',
    multicallAddress: '0xC9F6b1B53E056fd04bE5a197ce4B2423d456B982',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0xED3772a9F1207CBa409D26DA7CF512F9b95Ad0FE',
    providerName: 'Moonbeam',
    native: { symbol: 'GLMR', oracleId: 'WGLMR', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.6,
      baseSafetyMargin: 0.1,
    },
    stableCoins: [
      'USDC',
      'USDT',
      'DAI',
      'BUSD',
      'MAI',
      'FRAX',
      'USDTs',
      'USDCs',
      'DAIs',
      'stella4pool',
      'USDCwh',
      'USDTxc',
      'BUSDwh',
      'xcUSDC',
      'xcUSDT',
      'axlUSDC',
    ],
  },
  moonriver: {
    name: 'Moonriver',
    chainId: 1285,
    eol: 1715594061,
    rpc: ['https://rpc.api.moonriver.moonbeam.network/'],
    explorerUrl: 'https://moonriver.moonscan.io',
    multicallAddress: '0x7f6fE34C51d5352A0CF375C0Fbe03bD19eCD8460',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x7b2b35206BaA4Bfc83D521BDa24A356f2E39cEcC',
    providerName: 'Moonriver',
    native: { symbol: 'MOVR', oracleId: 'WMOVR', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.6,
      baseSafetyMargin: 0.1,
    },
    stableCoins: ['USDC', 'USDT', 'DAI', 'BUSD', 'MAI', 'MIM', 'FRAX', 'USDCm'],
  },
  metis: {
    name: 'Metis',
    chainId: 1088,
    rpc: ['https://andromeda.metis.io/?owner=1088'],
    explorerUrl: 'https://andromeda-explorer.metis.io',
    multicallAddress: '0x4fd2e1c2395dc088F36cab06DCe47F88A912fC85',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0xDc34b7e0f1F1512f088D1854a54EAFfD4dCaC7Bd',
    providerName: 'Metis',
    native: { symbol: 'METIS', oracleId: 'WMETIS', decimals: 18 },
    gas: {
      type: 'standard',
    },
    stableCoins: ['mUSDT', 'mUSDC', 'mDAI', 'USDT', 'USDC'],
  },
  kava: {
    name: 'Kava',
    chainId: 2222,
    rpc: ['https://evm.kava.io'],
    explorerUrl: 'https://explorer.kava.io',
    multicallAddress: '0x13C6bCC2411861A31dcDC2f990ddbe2325482222',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x41D44B276904561Ac51855159516FD4cB2c90968',
    providerName: 'Kava',
    native: { symbol: 'KAVA', oracleId: 'WKAVA', decimals: 18 },
    gas: {
      type: 'standard',
    },
    stableCoins: ['USDC', 'DAI', 'USDT', 'axlDAI', 'axlUSDC', 'axlUSDT', 'MAI', 'USDt', 'MIM'],
  },
  canto: {
    name: 'Canto',
    chainId: 7700,
    rpc: ['https://canto-rpc.ansybl.io'],
    explorerUrl: 'https://tuber.build',
    multicallAddress: '0xc34b9c9DBB39Be0Ef850170127A7b4283484f804',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x7c7B7FbccA5699175003ecbe1B41E79F40385469',
    providerName: 'Canto',
    native: { symbol: 'CANTO', oracleId: 'WCANTO', decimals: 18 },
    gas: {
      type: 'standard',
    },
    stableCoins: ['USDC', 'NOTE', 'USDT', 'BUSD'],
  },
  zksync: {
    name: 'zkSync',
    chainId: 324,
    rpc: ['https://mainnet.era.zksync.io'],
    explorerUrl: 'https://explorer.zksync.io',
    explorerTokenUrlTemplate: 'https://explorer.zksync.io/address/{address}',
    multicallAddress: '0x1E9231Cc9782D9F8e213736F6dAC00020D8271cB',
    multicall3Address: '0x9A04a9e1d67151AB1E742E6D8965e0602410f91d',
    appMulticallContractAddress: '0x6bD7b74BD4707b1effeFC199920Bc3bC1Cb7b11f',
    providerName: 'zkSync',
    native: { symbol: 'ETH', oracleId: 'WETH', decimals: 18 },
    gas: {
      type: 'standard',
    },
    stableCoins: ['USDC', 'BUSD', 'wTBT', 'USDCe', 'USDT'],
  },
  base: {
    name: 'Base',
    chainId: 8453,
    rpc: ['https://base-mainnet.public.blastapi.io'],
    explorerUrl: 'https://basescan.org',
    multicallAddress: '0xbA790ec6F95D68123E772A43b314464585B311b4',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x57B01298DfDdeA1c6CaB01793396af5fbFc213CE',
    providerName: 'Base',
    native: { symbol: 'ETH', oracleId: 'WETH', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.7,
      baseSafetyMargin: 0.2,
      priorityMinimum: '10000000', // 0.01 gwei
    },
    stableCoins: [
      'USDbC',
      'DAI',
      'bsUSD',
      'axlUSDC',
      'axlUSDT',
      'MIM',
      'USD+',
      'DAI+',
      'MAI',
      'DOLA',
      'USDC',
      'crvUSD',
      'eUSD',
      'hyUSD',
      'USDR',
      'wUSDR',
      'USDC+',
      'sFRAX',
      'LUSD',
      'USDA',
      'EURA',
      'rgUSD',
      'USDz',
      'jEUR',
      'sUSDz',
      'USDT',
      'EURC',
      'msUSD',
    ],
  },
  gnosis: {
    name: 'Gnosis',
    chainId: 100,
    rpc: ['https://rpc.gnosischain.com'],
    explorerUrl: 'https://gnosisscan.io',
    multicallAddress: '0x2840463Ea288c26B66E24f92E8C704e1aB6b095c',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x70Ed6174d8425332F7D9AD2d26C86902977307c0',
    providerName: 'Gnosis',
    native: { symbol: 'XDAI', oracleId: 'WXDAI', decimals: 18 },
    gas: {
      type: 'standard',
    },
    stableCoins: ['xDAI', 'EURe', 'USDC', 'USDT', 'sDAI', 'crvUSD', 'stEUR', 'USDCe'],
  },
  linea: {
    name: 'Linea',
    chainId: 59144,
    rpc: ['https://linea.blockpi.network/v1/rpc/public'],
    explorerUrl: 'https://lineascan.build',
    multicallAddress: '0x91BB303E972995EbE5f593BCddBb6F5Ef49Dbcbd',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x74037AEe034D2bD5cD2eEc043FE5ad9cE2e90275',
    providerName: 'Linea',
    native: { symbol: 'ETH', oracleId: 'WETH', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 5,
      percentile: 0.2,
      baseMinimum: '7',
      baseSafetyMargin: 0.2,
    },
    stableCoins: ['USDT', 'USDC', 'DAI', 'MAI', 'USDT+', 'USD+', 'LUSD', 'DUSD'],
  },
  mantle: {
    name: 'Mantle',
    chainId: 5000,
    rpc: ['https://rpc.mantle.xyz'],
    explorerUrl: 'https://mantlescan.xyz',
    multicallAddress: '0xAb35d11199216c7F7368080Cf41beD8f3AbBc4E4',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0xEa13A590eFd8545a10134d08081d6fC2FA0417a7',
    providerName: 'Mantle',
    native: { symbol: 'MNT', oracleId: 'WMNT', decimals: 18 },
    gas: {
      type: 'standard',
    },
    stableCoins: ['USDT', 'USDC', 'DAI', 'USDe'],
  },
  fraxtal: {
    name: 'Fraxtal',
    chainId: 252,
    rpc: ['https://rpc.frax.com'],
    explorerUrl: 'https://fraxscan.com',
    multicallAddress: '0x2840463Ea288c26B66E24f92E8C704e1aB6b095c',
    multicall3Address: '0x0955479C61B37074d689319fCaA84ffE1E9e8CF5',
    appMulticallContractAddress: '0xB1bFc21bEE2b2DDA4728481dbF52eDC3b9F5Fb79',
    providerName: 'Frax',
    native: { symbol: 'frxETH', oracleId: 'wfrxETH', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.7,
      baseSafetyMargin: 0.2,
      priorityMinimum: '10000000', // 0.01 gwei
    },
    stableCoins: [
      'crvUSD',
      'FRAX',
      'frxUSDC',
      'USDC',
      'PYUSD',
      'DAI',
      'USDT',
      'sDAI',
      'USDe',
      'sUSDe',
      'FXB20251231',
      'FXB20291231',
      'FXB20551231',
      'FXB_20261231',
    ],
  },
  mode: {
    name: 'Mode',
    chainId: 34443,
    rpc: ['https://mainnet.mode.network'],
    explorerUrl: 'https://explorer.mode.network/',
    multicallAddress: '0xAb35d11199216c7F7368080Cf41beD8f3AbBc4E4',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x70Ed6174d8425332F7D9AD2d26C86902977307c0',
    providerName: 'Mode',
    native: { symbol: 'ETH', oracleId: 'WETH', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.7,
      baseSafetyMargin: 0.2,
      priorityMinimum: '10000000', // 0.01 gwei
    },
    stableCoins: ['USDC', 'USDT', 'DOLA'],
  },
  manta: {
    name: 'Manta',
    chainId: 169,
    rpc: ['https://pacific-rpc.manta.network/http'],
    explorerUrl: 'https://pacific-explorer.manta.network/',
    multicallAddress: '0x663504a9453eD242335C3dCc9E4B52620F566b30',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0xED3772a9F1207CBa409D26DA7CF512F9b95Ad0FE',
    providerName: 'Manta',
    native: { symbol: 'ETH', oracleId: 'WETH', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.7,
      baseSafetyMargin: 0.2,
      priorityMinimum: '10000000', // 0.01 gwei
    },
    stableCoins: ['USDC', 'USDT', 'DOLA'],
  },
  real: {
    name: 'Re.al',
    chainId: 111188,
    eol: 1731964599,
    rpc: ['https://rpc.realforreal.gelato.digital'],
    explorerUrl: 'https://explorer.re.al/',
    multicallAddress: '0x3B60F7f25b09E71356cdFFC6475c222A466a2AC9',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0xA43d8f6Db69610C8260B953658553cabF01D77c6',
    providerName: 'Re.al',
    native: { symbol: 'reETH', oracleId: 'reETH', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.7,
      baseSafetyMargin: 0.2,
      priorityMinimum: '10000000', // 0.01 gwei
    },
    stableCoins: ['MORE', 'USTB', 'arcUSD', 'USDC', 'DAI', 'USDT', 'USDR'],
  },
  sei: {
    name: 'Sei',
    chainId: 1329,
    rpc: ['https://evm-rpc.sei-apis.com'],
    explorerUrl: 'https://seitrace.com/',
    multicallAddress: '0x2840463Ea288c26B66E24f92E8C704e1aB6b095c',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0xeC1253CC6AB22680B3A3C35EA696dD0A6FC4B0D9',
    providerName: 'Sei',
    native: { symbol: 'SEI', oracleId: 'WSEI', decimals: 18 },
    gas: {
      type: 'standard',
      minimum: '10000000', // 0.01 gwei
    },
    stableCoins: ['USDC', 'USDT'],
  },
  rootstock: {
    name: 'Rootstock',
    chainId: 30,
    rpc: ['https://public-node.rsk.co'],
    explorerUrl: 'https://rootstock.blockscout.com/',
    multicallAddress: '0x5Eb5CcF31F73ECBa126846fd264538576e01F89b',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x8EfD3599488542Ec1719567c698a97Fb4e3751a1',
    providerName: 'Rootstock',
    native: { symbol: 'RBTC', oracleId: 'WBTC', decimals: 18 },
    new: false,
    gas: {
      type: 'standard',
    },
    stableCoins: ['rUSDT', 'DOC'],
  },
  scroll: {
    name: 'Scroll',
    chainId: 534352,
    rpc: ['https://scroll-mainnet.public.blastapi.io'],
    explorerUrl: 'https://scrollscan.com/',
    multicallAddress: '0xEEfe8171dC249960D730b19F3406E40c8C22C567',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0xB58AD63989237E962F3E618eEeb43c30574c6F72',
    providerName: 'Scroll',
    native: { symbol: 'ETH', oracleId: 'ETH', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.7,
      baseSafetyMargin: 0.2,
      priorityMinimum: '10000000', // 0.01 gwei
    },
    stableCoins: ['USDT', 'USDC', 'loreUSD'],
  },
  lisk: {
    name: 'Lisk',
    chainId: 1135,
    rpc: ['https://rpc.api.lisk.com'],
    explorerUrl: 'https://blockscout.lisk.com/',
    multicallAddress: '0x761b0D97f012e86aABe7053680436690Aa730CED',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x00fe0b8a136549b2bb99BBa9a7ee1eAB55234571',
    providerName: 'Lisk',
    native: { symbol: 'ETH', oracleId: 'WETH', decimals: 18 },
    new: true,
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.7,
      baseSafetyMargin: 0.2,
      priorityMinimum: '10000000', // 0.01 gwei
    },
    stableCoins: ['USDT'],
  },
  aurora: {
    name: 'Aurora',
    chainId: 1313161554,
    eol: 1691085875,
    rpc: ['https://mainnet.aurora.dev'],
    explorerUrl: 'https://aurorascan.dev',
    multicallAddress: '0x55f46144bC62e9Af4bAdB71842B62162e2194E90',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x88D537a86e09B753361D70448d60D3dC2D75883d',
    providerName: 'Aurora',
    native: { symbol: 'ETH', oracleId: 'WETH', decimals: 18 },
    gas: {
      type: 'standard',
    },
    stableCoins: ['USDC', 'USDT', 'MAI', 'DAI', 'UST', 'aUSDO', 'USN'],
  },
  emerald: {
    name: 'Emerald',
    chainId: 42262,
    eol: 1691085875,
    rpc: ['https://emerald.oasis.dev'],
    explorerUrl: 'https://explorer.emerald.oasis.dev',
    multicallAddress: '0xFE40f6eAD11099D91D51a945c145CFaD1DD15Bb8',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0xd3C0A4AB6F68e3c12DEc753255b9f769E0bA615b',
    providerName: 'Oasis Emerald',
    native: { symbol: 'ROSE', oracleId: 'WROSE', decimals: 18 },
    gas: {
      type: 'standard',
    },
    stableCoins: ['ceUSDC', 'USDT'],
  },
  celo: {
    name: 'Celo',
    chainId: 42220,
    eol: 1691085875,
    rpc: ['https://forno.celo.org'],
    explorerUrl: 'https://celoscan.io',
    multicallAddress: '0xa9E6E271b27b20F65394914f8784B3B860dBd259',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x0bF5F48d8F761efAe0f187eCce60784e5d3E87E6',
    providerName: 'Celo',
    native: { symbol: 'CELO', oracleId: 'WCELO', decimals: 18 },
    gas: {
      type: 'celo',
    },
    stableCoins: ['cUSD', 'cEUR', 'DAI', 'USDC', 'USDT'],
  },
  heco: {
    name: 'HECO',
    eol: 1681913494,
    chainId: 128,
    rpc: ['https://http-mainnet.hecochain.com'],
    explorerUrl: 'https://hecoinfo.com',
    multicallAddress: '0x2776CF9B6E2Fa7B33A37139C3CB1ee362Ff0356e',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0xeCD68D935Fd331EbA27381929845737346577943',
    providerName: 'heco',
    native: { symbol: 'HT', oracleId: 'WHT', decimals: 18 },
    gas: {
      type: 'eip1559',
      blocks: 100,
      percentile: 0.6,
      baseSafetyMargin: 0.1,
    },
    stableCoins: ['USDT', 'HUSD'],
  },
  harmony: {
    name: 'Harmony',
    eol: 1681913494,
    chainId: 1666600000,
    rpc: ['https://api.s0.t.hmny.io'],
    explorerUrl: 'https://explorer.harmony.one',
    multicallAddress: '0xBa5041B1c06e8c9cFb5dDB4b82BdC52E41EA5FC5',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0xe8EeDE3a063AdF991096E317e916d9AF56cb11B2',
    providerName: 'harmony',
    native: { symbol: 'ONE', oracleId: 'WONE', decimals: 18 },
    gas: {
      type: 'standard',
    },
    stableCoins: ['BUSD', 'bscBUSD', 'USDC', 'USDT', 'UST', 'DAI', 'FRAX'],
  },
  fuse: {
    name: 'Fuse',
    eol: 1722901359,
    chainId: 122,
    rpc: ['https://rpc.fuse.io'],
    explorerUrl: 'https://explorer.fuse.io',
    multicallAddress: '0x4f22BD7CE44b0e0B2681A28e300A7285319de3a0',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x504A5F167BE8014b1d5CBDd993f3Bb34F95E70B2',
    providerName: 'Fuse',
    native: { symbol: 'FUSE', oracleId: 'WFUSE', decimals: 18 },
    gas: {
      type: 'standard',
    },
    stableCoins: ['fUSD', 'BUSD', 'USDC', 'USDT'],
  },
  zkevm: {
    name: 'Polygon zkEVM',
    eol: 1729771090,
    chainId: 1101,
    rpc: ['https://rpc.ankr.com/polygon_zkevm'],
    explorerUrl: 'https://zkevm.polygonscan.com/',
    multicallAddress: '0xD19ab62F83380908D65E344567378cF104cE46c2',
    multicall3Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    appMulticallContractAddress: '0x2ec5d5e9aaf3c3f56eBeF2fC46A5af9e42810b41',
    providerName: 'zkEVM',
    native: { symbol: 'ETH', oracleId: 'WETH', decimals: 18 },
    gas: {
      type: 'standard',
    },
    stableCoins: ['USDC', 'USDT', 'DAI', 'FRAX'],
  },
} satisfies Record<ChainConfig['id'], Omit<ChainConfig, 'id'>>;

export const chains: ChainEntity['id'][] = Object.keys(config) as ChainEntity['id'][];
