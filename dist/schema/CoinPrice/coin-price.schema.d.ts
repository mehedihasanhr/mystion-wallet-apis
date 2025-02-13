import { HydratedDocument } from 'mongoose';
export type CoinPriceDocument = HydratedDocument<CoinPrice>;
export declare class CoinPrice {
    _id: string;
    coinId: string;
    networkId: string;
    currencyId: string;
    name: string;
    priceMarket: number;
    priceFormer: number;
    price: number;
    priceChange: number;
}
export declare const CoinPriceSchema: import("mongoose").Schema<CoinPrice, import("mongoose").Model<CoinPrice, any, any, any, import("mongoose").Document<unknown, any, CoinPrice> & CoinPrice & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CoinPrice, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<CoinPrice>> & import("mongoose").FlatRecord<CoinPrice> & Required<{
    _id: string;
}>>;
