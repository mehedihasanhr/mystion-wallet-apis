import { HydratedDocument } from "mongoose";
export type BannerDocument = HydratedDocument<Banner>;
export declare class Banner {
    _id: string;
    mediaUrl: string;
    isActive: boolean;
    isDeleted: boolean;
}
export declare const BannerSchema: import("mongoose").Schema<Banner, import("mongoose").Model<Banner, any, any, any, import("mongoose").Document<unknown, any, Banner> & Banner & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Banner, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Banner>> & import("mongoose").FlatRecord<Banner> & Required<{
    _id: string;
}>>;
