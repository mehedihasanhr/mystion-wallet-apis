import { HydratedDocument } from "mongoose";
export type StakingInfoDocument = HydratedDocument<StakingInfo>;
export declare class StakingInfo {
    _id: string;
    totalInvestments: number;
    totalStaked: number;
    totalReward: number;
    stakingContractAddress: string;
    coinId: string;
    networkId: string;
}
export declare const StakingInfoSchema: import("mongoose").Schema<StakingInfo, import("mongoose").Model<StakingInfo, any, any, any, import("mongoose").Document<unknown, any, StakingInfo> & StakingInfo & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, StakingInfo, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<StakingInfo>> & import("mongoose").FlatRecord<StakingInfo> & Required<{
    _id: string;
}>>;
