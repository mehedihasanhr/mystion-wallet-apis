import { HydratedDocument } from 'mongoose';
export type TransactionDocument = HydratedDocument<Transaction>;
export declare class Transaction {
    _id: string;
    userId: string;
    walletId: string;
    fromAddress: string;
    toAddress: string;
    fromCoinId: string;
    coinId: string;
    type: string;
    amount: number;
    fee: number;
    swapFee: number;
    balance: number;
    swappedAmount: number;
    swappedPrice: number;
    trxHash: string;
    trxUrl: string;
    systemTrxHash: string;
    systemTrxUrl: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    status: string;
    currencyId: string;
    country: string;
    proofOfPayment: string;
    paymentMethod: string;
}
export declare const TransactionSchema: import("mongoose").Schema<Transaction, import("mongoose").Model<Transaction, any, any, any, import("mongoose").Document<unknown, any, Transaction> & Transaction & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Transaction, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Transaction>> & import("mongoose").FlatRecord<Transaction> & Required<{
    _id: string;
}>>;
