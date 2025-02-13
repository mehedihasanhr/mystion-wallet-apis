import { HydratedDocument } from "mongoose";
export type StakingPlanDocument = HydratedDocument<StakingPlan>;
export declare class StakingPlan {
    _id: string;
    planId: number;
    duration: number;
    interestRate: number;
    isActive: boolean;
    stakingContractAddress: string;
    coinId: string;
    networkId: string;
}
export declare const StakingPlanSchema: import("mongoose").Schema<StakingPlan, import("mongoose").Model<StakingPlan, any, any, any, import("mongoose").Document<unknown, any, StakingPlan> & StakingPlan & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, StakingPlan, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<StakingPlan>> & import("mongoose").FlatRecord<StakingPlan> & Required<{
    _id: string;
}>>;
