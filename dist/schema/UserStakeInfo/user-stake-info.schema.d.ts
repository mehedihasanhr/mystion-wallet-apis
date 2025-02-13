import { HydratedDocument } from "mongoose";
export type UserStakeInfoDocument = HydratedDocument<UserStakeInfo>;
export declare class UserStakeInfo {
    _id: string;
    userId: string;
    coinId: string;
    totalInvestments: number;
    totalStaked: number;
    totalRewards: number;
    investmentIds: number[];
    stakingContractAddress: string;
}
export declare const UserStakeInfoSchema: import("mongoose").Schema<UserStakeInfo, import("mongoose").Model<UserStakeInfo, any, any, any, import("mongoose").Document<unknown, any, UserStakeInfo> & UserStakeInfo & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserStakeInfo, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserStakeInfo>> & import("mongoose").FlatRecord<UserStakeInfo> & Required<{
    _id: string;
}>>;
