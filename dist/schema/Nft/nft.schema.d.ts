import { HydratedDocument } from 'mongoose';
export type NFTDocument = HydratedDocument<NFT>;
export declare class NFT {
    _id: string;
    name: string;
    symbol: string;
    tokenId: string;
    walletId: string;
    userId: string;
    owner: string;
    type: string;
    networkId: string;
    tokenUri: string;
    contractAddress: string;
    amount: number;
    imageUrl: string;
}
export declare const NFTSchema: import("mongoose").Schema<NFT, import("mongoose").Model<NFT, any, any, any, import("mongoose").Document<unknown, any, NFT> & NFT & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, NFT, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<NFT>> & import("mongoose").FlatRecord<NFT> & Required<{
    _id: string;
}>>;
