import { CoinsService } from './coins.service';
export declare class CoinsController {
    private _coinsService;
    constructor(_coinsService: CoinsService);
    getCurrencies(limit?: number, offset?: number, name?: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/Currency/currency.schema").Currency> & import("../../schema/Currency/currency.schema").Currency & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, import("../../schema/Currency/currency.schema").Currency> & import("../../schema/Currency/currency.schema").Currency & Required<{
        _id: string;
    }>)[]>;
    getCoins(limit?: number, offset?: number, coinId?: string, networkId?: string, amount?: number): Promise<any[]>;
    getCoinsPrice(limit?: number, offset?: number, coinNameSearch?: string, networkId?: string, currencyId?: string): Promise<any[]>;
    getNetworks(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/Network/network.schema").Network> & import("../../schema/Network/network.schema").Network & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, import("../../schema/Network/network.schema").Network> & import("../../schema/Network/network.schema").Network & Required<{
        _id: string;
    }>)[]>;
}
