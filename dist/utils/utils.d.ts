import * as bitcoin from 'bitcoinjs-lib';
import { Web3 } from 'web3';
export declare const ECPair: import("ecpair").ECPairAPI;
export declare const BITCOIN_NETWORK: bitcoin.networks.Network;
export declare const BITCOIN_NETWORK_MAINNET: bitcoin.networks.Network;
import { DepositBankDetail } from 'src/schema/DepositBankDetail/deposit-bank-detail.schema';
export declare const bitCoinRootUrl = "https://api.blockcypher.com/v1/btc/test3";
export declare const generateStringId: () => string;
export declare const TRON_RPC = "https://api.shasta.trongrid.io";
export declare const TRON_SCAN_URL = "https://shastapi.tronscan.org";
export declare const TRONSCAN_API_KEY = "98e2417a-a573-4491-a4db-9c4e441258b5";
export declare const TRONGRID_API_KEY = "9c4f68b0-2579-4a1b-b08f-220bad91880d";
export declare const BITCOIN_TOKEN = "f38f051514e5447dbe6b02d12b11450f";
export declare const tronWeb: any;
export declare const STABLE_MINIMUM = 50;
export declare const TRX_GAS_FEE = 15;
export declare const fromSatoshi: (number: any) => number;
export declare const toSatoshi: (number: any) => number;
export declare const fromDecimals: (number: string | number | bigint, decimals: number) => string;
export declare const toDecimals: (number: string | number | bigint, decimals: number) => string;
export declare const fromWei: (value: any, decimal: any) => string;
export declare const toWei: (value: any, decimal: any) => string;
export declare const sleep: (ms: any) => Promise<unknown>;
export declare const abi: any;
export declare const chainMapping: {
    '137': {
        chain: string;
        rpc: string;
        reserveHandler_address: string;
        oneSplit_address: string;
        NATIVE: {
            address: string;
            wrapped_address: string;
        };
    };
    '1': {
        chain: string;
        rpc: string;
        reserveHandler_address: string;
        oneSplit_address: string;
        NATIVE: {
            address: string;
            wrapped_address: string;
        };
    };
    '250': {
        chain: string;
        rpc: string;
        reserveHandler_address: string;
        oneSplit_address: string;
        NATIVE: {
            address: string;
            wrapped_address: string;
        };
    };
    '42161': {
        chain: string;
        rpc: string;
        reserveHandler_address: string;
        oneSplit_address: string;
        NATIVE: {
            address: string;
            wrapped_address: string;
        };
    };
    '56': {
        chain: string;
        rpc: string;
        reserveHandler_address: string;
        oneSplit_address: string;
        NATIVE: {
            address: string;
            wrapped_address: string;
        };
    };
    '43114': {
        chain: string;
        rpc: string;
        reserveHandler_address: string;
        oneSplit_address: string;
        NATIVE: {
            address: string;
            wrapped_address: string;
        };
    };
    '10': {
        chain: string;
        rpc: string;
        reserveHandler_address: string;
        oneSplit_address: string;
        NATIVE: {
            address: string;
            wrapped_address: string;
        };
    };
    '25': {
        chain: string;
        rpc: string;
        reserveHandler_address: string;
        oneSplit_address: string;
        NATIVE: {
            address: string;
            wrapped_address: string;
        };
    };
    '1666600000': {
        chain: string;
        rpc: string;
        reserveHandler_address: string;
        oneSplit_address: string;
        NATIVE: {
            address: string;
            wrapped_address: string;
        };
    };
    '1313161554': {
        chain: string;
        rpc: string;
        reserveHandler_address: string;
        oneSplit_address: string;
        NATIVE: {
            address: string;
            wrapped_address: string;
        };
    };
    '2222': {
        chain: string;
        rpc: string;
        reserveHandler_address: string;
        oneSplit_address: string;
        NATIVE: {
            address: string;
            wrapped_address: string;
        };
    };
};
export declare const web3: Web3<import("web3-eth").RegisteredSubscription>;
export declare const masterWalletLocks: {
    isEVMLocked: number;
    isTRONLocked: number;
    isBTCLocked: number;
};
export declare const dbCoins: ({
    swapFee: number;
    name: string;
    symbol: string;
    icon: string;
    coinNameId: string;
    isToken: boolean;
    contractAddress: string;
    decimal: number;
    price: number;
    priceFormer: number;
    priceMarket: number;
    networkId: {
        chainId: number;
        nativeCoinAddress: string;
        name: string;
        symbol: string;
        logoUrl: string;
        rpcUrl: string;
        isMainnet: boolean;
        networkName: string;
        networkType: string;
        isDeleted: boolean;
        isActive: boolean;
        scanUrl: string;
        id: string;
        rpcUrlAlt?: undefined;
    };
    isDeleted: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    priceChange: number;
    sort: number;
    id: string;
    swapAmount: number;
    sortOrder: number;
    onRampId: string;
    onRampNetworkId: string;
    priceFrom: string;
    unit?: undefined;
    isStakingAvailable?: undefined;
    stakingContractAddress?: undefined;
} | {
    swapFee: number;
    name: string;
    symbol: string;
    icon: string;
    coinNameId: string;
    isToken: boolean;
    contractAddress: string;
    decimal: number;
    price: number;
    priceFormer: number;
    priceMarket: number;
    networkId: {
        name: string;
        symbol: string;
        chainId: number;
        nativeCoinAddress: string;
        logoUrl: string;
        rpcUrl: string;
        isMainnet: boolean;
        networkName: string;
        networkType: string;
        isDeleted: boolean;
        isActive: boolean;
        rpcUrlAlt: string;
        scanUrl: string;
        id: string;
    };
    isDeleted: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    priceChange: number;
    sort: number;
    id: string;
    swapAmount: number;
    sortOrder: number;
    onRampId: string;
    onRampNetworkId: string;
    priceFrom: string;
    unit?: undefined;
    isStakingAvailable?: undefined;
    stakingContractAddress?: undefined;
} | {
    swapFee: number;
    name: string;
    symbol: string;
    icon: string;
    coinNameId: string;
    isToken: boolean;
    contractAddress: string;
    decimal: number;
    price: number;
    priceFormer: number;
    priceMarket: number;
    networkId: {
        name: string;
        symbol: string;
        chainId: number;
        nativeCoinAddress: string;
        logoUrl: string;
        rpcUrl: string;
        isMainnet: boolean;
        networkName: string;
        networkType: string;
        isDeleted: boolean;
        isActive: boolean;
        scanUrl: string;
        id: string;
        rpcUrlAlt?: undefined;
    };
    isDeleted: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    priceChange: number;
    unit: string;
    sort: number;
    id: string;
    swapAmount: number;
    sortOrder: number;
    onRampId: string;
    onRampNetworkId: string;
    priceFrom: string;
    isStakingAvailable?: undefined;
    stakingContractAddress?: undefined;
} | {
    swapFee: number;
    name: string;
    symbol: string;
    icon: string;
    coinNameId: string;
    isToken: boolean;
    contractAddress: string;
    decimal: number;
    price: number;
    priceFormer: number;
    priceMarket: number;
    isStakingAvailable: boolean;
    stakingContractAddress: string;
    networkId: {
        name: string;
        symbol: string;
        chainId: number;
        nativeCoinAddress: string;
        logoUrl: string;
        rpcUrl: string;
        isMainnet: boolean;
        networkName: string;
        networkType: string;
        isDeleted: boolean;
        isActive: boolean;
        scanUrl: string;
        id: string;
        rpcUrlAlt?: undefined;
    };
    isDeleted: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    priceChange: number;
    unit: string;
    sort: number;
    id: string;
    swapAmount: number;
    sortOrder: number;
    onRampId: string;
    onRampNetworkId: string;
    priceFrom: string;
} | {
    priceMarket: number;
    swapFee: number;
    name: string;
    symbol: string;
    icon: string;
    coinNameId: string;
    isToken: boolean;
    contractAddress: string;
    decimal: number;
    price: number;
    priceFormer: number;
    networkId: {
        chainId: number;
        nativeCoinAddress: string;
        name: string;
        symbol: string;
        logoUrl: string;
        rpcUrl: string;
        isMainnet: boolean;
        networkName: string;
        networkType: string;
        isDeleted: boolean;
        isActive: boolean;
        scanUrl: string;
        id: string;
        rpcUrlAlt?: undefined;
    };
    isDeleted: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    priceChange: number;
    sort: number;
    id: string;
    swapAmount: number;
    onRampId: string;
    onRampNetworkId: string;
    priceFrom: string;
    sortOrder?: undefined;
    unit?: undefined;
    isStakingAvailable?: undefined;
    stakingContractAddress?: undefined;
} | {
    name: string;
    symbol: string;
    icon: string;
    coinNameId: string;
    isToken: boolean;
    contractAddress: string;
    decimal: number;
    price: number;
    priceFormer: number;
    priceMarket: number;
    swapFee: number;
    networkId: {
        name: string;
        symbol: string;
        chainId: number;
        nativeCoinAddress: string;
        logoUrl: string;
        rpcUrl: string;
        isMainnet: boolean;
        networkName: string;
        networkType: string;
        isDeleted: boolean;
        isActive: boolean;
        scanUrl: string;
        rpcUrlAlt: string;
        id: string;
    };
    isDeleted: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    priceChange: number;
    sort: number;
    id: string;
    swapAmount: number;
    onRampId: string;
    onRampNetworkId: string;
    priceFrom: string;
    sortOrder?: undefined;
    unit?: undefined;
    isStakingAvailable?: undefined;
    stakingContractAddress?: undefined;
} | {
    swapFee: number;
    name: string;
    symbol: string;
    icon: string;
    coinNameId: string;
    isToken: boolean;
    contractAddress: string;
    decimal: number;
    price: number;
    priceFormer: number;
    priceMarket: number;
    networkId: {
        name: string;
        symbol: string;
        chainId: number;
        nativeCoinAddress: string;
        logoUrl: string;
        rpcUrl: string;
        isMainnet: boolean;
        networkName: string;
        networkType: string;
        isDeleted: boolean;
        isActive: boolean;
        scanUrl: string;
        id: string;
        rpcUrlAlt?: undefined;
    };
    isDeleted: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    priceChange: number;
    unit: string;
    sort: number;
    id: string;
    swapAmount: number;
    onRampId: string;
    onRampNetworkId: string;
    priceFrom: string;
    sortOrder?: undefined;
    isStakingAvailable?: undefined;
    stakingContractAddress?: undefined;
})[];
export declare const depositBank: DepositBankDetail;
export declare const depositBankNgn: DepositBankDetail;
export declare const getBitcoinFeeData: (rpc: string) => Promise<any>;
export declare const BTC_MAX_GAS_FEE = 15000;
