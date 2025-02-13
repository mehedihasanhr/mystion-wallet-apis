import { HydratedDocument } from 'mongoose';
export type UserDocument = HydratedDocument<User>;
export declare class User {
    _id: string;
    fullname: string;
    image: string;
    email: string;
    password: string;
    username: string;
    phone: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    authSecret: string;
    authUrl: string;
    isAuthEnabled: boolean;
    isBiometricEnabled: boolean;
    isAdmin: boolean;
    isSuperAdmin: boolean;
    isVerified: boolean;
    isActive: boolean;
    isDeleted: boolean;
    currencyId: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: string;
}>>;
