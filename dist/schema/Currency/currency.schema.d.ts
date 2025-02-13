import { HydratedDocument } from 'mongoose';
export type CurrencyDocument = HydratedDocument<Currency>;
export declare class Currency {
    _id: string;
    name: string;
    symbol: string;
    coinGeckoId: string;
    country: string;
    logoUrl: string;
    isDeleted: boolean;
    isActive: boolean;
}
export declare const CurrencySchema: import("mongoose").Schema<Currency, import("mongoose").Model<Currency, any, any, any, import("mongoose").Document<unknown, any, Currency> & Currency & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Currency, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Currency>> & import("mongoose").FlatRecord<Currency> & Required<{
    _id: string;
}>>;
