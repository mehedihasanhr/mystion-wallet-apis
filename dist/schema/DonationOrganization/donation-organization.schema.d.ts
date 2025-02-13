import { HydratedDocument } from "mongoose";
export type DonationOrganizationDocument = HydratedDocument<DonationOrganization>;
export declare class DonationOrganization {
    _id: string;
    name: string;
    walletAddress: string;
    isActive: boolean;
    isDeleted: boolean;
}
export declare const DonationOrganizationSchema: import("mongoose").Schema<DonationOrganization, import("mongoose").Model<DonationOrganization, any, any, any, import("mongoose").Document<unknown, any, DonationOrganization> & DonationOrganization & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DonationOrganization, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<DonationOrganization>> & import("mongoose").FlatRecord<DonationOrganization> & Required<{
    _id: string;
}>>;
