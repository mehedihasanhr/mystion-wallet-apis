import { HydratedDocument } from 'mongoose';
export type CoinDocument = HydratedDocument<Coin>;
export declare class Coin {
    _id: string;
    name: string;
    symbol: string;
    icon: string;
    coinNameId: string;
    isToken: boolean;
    isStakingAvailable: boolean;
    contractAddress: string;
    stakingContractAddress: string;
    decimal: number;
    priceMarket: number;
    priceFormer: number;
    price: number;
    priceChange: number;
    swapFee: number;
    networkId: string;
    isDeleted: boolean;
    isActive: boolean;
    sort: number;
    unit: string;
    onRampId: string;
    onRampNetworkId: string;
    priceFrom: string;
}
export declare const CoinSchema: import("mongoose").Schema<Coin, import("mongoose").Model<Coin, any, any, any, import("mongoose").Document<unknown, any, Coin> & Coin & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Coin, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Coin>> & import("mongoose").FlatRecord<Coin> & Required<{
    _id: string;
}>>;
