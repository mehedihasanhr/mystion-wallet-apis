import { HydratedDocument } from 'mongoose';
export type BalanceDocument = HydratedDocument<Balance>;
export declare class Balance {
    _id: string;
    address: string;
    userId: string;
    walletId: string;
    coinId: string;
    networkId: string;
    balance: number;
}
export declare const BalanceSchema: import("mongoose").Schema<Balance, import("mongoose").Model<Balance, any, any, any, import("mongoose").Document<unknown, any, Balance> & Balance & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Balance, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Balance>> & import("mongoose").FlatRecord<Balance> & Required<{
    _id: string;
}>>;
