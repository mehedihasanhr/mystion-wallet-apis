import { HydratedDocument } from 'mongoose';
export type NetworkDocument = HydratedDocument<Network>;
export declare class Network {
    _id: string;
    name: string;
    symbol: string;
    logoUrl: string;
    rpcUrl: string;
    chainId: number;
    nativeCoinAddress: string;
    networkName: string;
    networkType: string;
    scanUrl: string;
    isMainnet: boolean;
    isDeleted: boolean;
    isActive: boolean;
}
export declare const NetworkSchema: import("mongoose").Schema<Network, import("mongoose").Model<Network, any, any, any, import("mongoose").Document<unknown, any, Network> & Network & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Network, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Network>> & import("mongoose").FlatRecord<Network> & Required<{
    _id: string;
}>>;
