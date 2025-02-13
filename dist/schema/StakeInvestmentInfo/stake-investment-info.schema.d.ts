import { HydratedDocument } from "mongoose";
export type StakeInvestmentInfoDocument = HydratedDocument<StakeInvestmentInfo>;
export declare class StakeInvestmentInfo {
    _id: string;
    userId: string;
    coinId: string;
    walletId: string;
    userAddress: string;
    stakingContractAddress: string;
    investmentId: number;
    planId: number;
    amount: number;
    startDate: Date;
    endDate: Date;
    isClaimed: boolean;
    isWithdrawn: boolean;
    dailyReward: number;
    totalReward: number;
}
export declare const StakeInvestmentInfoSchema: import("mongoose").Schema<StakeInvestmentInfo, import("mongoose").Model<StakeInvestmentInfo, any, any, any, import("mongoose").Document<unknown, any, StakeInvestmentInfo> & StakeInvestmentInfo & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, StakeInvestmentInfo, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<StakeInvestmentInfo>> & import("mongoose").FlatRecord<StakeInvestmentInfo> & Required<{
    _id: string;
}>>;
