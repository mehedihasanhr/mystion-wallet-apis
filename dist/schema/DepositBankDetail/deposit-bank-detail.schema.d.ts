import { HydratedDocument } from "mongoose";
export type DepositBankDetailDocument = HydratedDocument<DepositBankDetail>;
export declare class DepositBankDetail {
    _id: string;
    currency: string;
    accountHolderName: string;
    accountNumber: string;
    bank: string;
    quote: string;
}
export declare const DepositBankDetailSchema: import("mongoose").Schema<DepositBankDetail, import("mongoose").Model<DepositBankDetail, any, any, any, import("mongoose").Document<unknown, any, DepositBankDetail> & DepositBankDetail & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DepositBankDetail, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<DepositBankDetail>> & import("mongoose").FlatRecord<DepositBankDetail> & Required<{
    _id: string;
}>>;
