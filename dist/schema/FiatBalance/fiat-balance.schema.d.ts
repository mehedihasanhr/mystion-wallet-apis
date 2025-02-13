import { HydratedDocument } from "mongoose";
export type FiatBalanceDocument = HydratedDocument<FiatBalance>;
export declare class FiatBalance {
    _id: string;
    userId: string;
    walletId: string;
    currencyId: string;
    balance: number;
    totalWithdrawnAmount: number;
    totalWithdrawnAmountLocked: number;
}
export declare const FiatBalanceSchema: import("mongoose").Schema<FiatBalance, import("mongoose").Model<FiatBalance, any, any, any, import("mongoose").Document<unknown, any, FiatBalance> & FiatBalance & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FiatBalance, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FiatBalance>> & import("mongoose").FlatRecord<FiatBalance> & Required<{
    _id: string;
}>>;
