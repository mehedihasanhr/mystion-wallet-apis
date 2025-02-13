import { HydratedDocument } from 'mongoose';
export type FeeInfoDocument = HydratedDocument<FeeInfo>;
export declare class FeeInfo {
    _id: string;
    feeName: string;
    feePercentage: number;
}
export declare const FeeInfoSchema: import("mongoose").Schema<FeeInfo, import("mongoose").Model<FeeInfo, any, any, any, import("mongoose").Document<unknown, any, FeeInfo> & FeeInfo & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FeeInfo, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FeeInfo>> & import("mongoose").FlatRecord<FeeInfo> & Required<{
    _id: string;
}>>;
