import { Wallet } from 'src/schema/Wallet/wallet.schema';
import { Model } from 'mongoose';
import { UserDocument } from 'src/schema/User/user.schema';
import { Network, NetworkDocument } from 'src/schema/Network/network.schema';
import { CoinDocument } from 'src/schema/Coin/coin.schema';
import { Balance, BalanceDocument } from 'src/schema/Balance/balance.schema';
import { Transaction, TransactionDocument } from 'src/schema/Transaction/transaction.schema';
import { TRANSACTIONSTATUSENUM } from 'src/enum/transaction.enum';
import { TransactionDTO, UpdateTransactionDTO } from './dto/transaction.dto';
import { SwapDTO, WithdrawDTO, WithdrawFiatDTO } from './dto/withdraw.dto';
import { UtilsService } from '../utils/utils.service';
import { CoinPriceDocument } from 'src/schema/CoinPrice/coin-price.schema';
import { SetFeeDTO } from './dto/setFee.dto';
import { FeeInfo, FeeInfoDocument } from 'src/schema/FeeInfo/fee-info.schema';
import { CurrencyDocument } from 'src/schema/Currency/currency.schema';
import { SendNftDTO } from './dto/send-nft.dto';
import { NFTDocument } from 'src/schema/Nft/nft.schema';
import { CoinsService } from '../coins/coins.service';
import { StakeDTO } from './dto/stake.dto';
import { UserStakeInfoDocument } from 'src/schema/UserStakeInfo/user-stake-info.schema';
import { StakingPlan, StakingPlanDocument } from 'src/schema/StakingPlan/staking-plan.schema';
import { StakingInfoDocument } from 'src/schema/StakingInfo/staking-info.schema';
import { WithdrawRewardDTO } from './dto/withdrawReward.dto';
import { FiatBalanceDocument } from 'src/schema/FiatBalance/fiat-balance.schema';
import { DonationOrganization, DonationOrganizationDocument } from 'src/schema/DonationOrganization/donation-organization.schema';
import { AddDonationOrganizationDTO } from './dto/add-donation-organization.dto';
import { UpdateDonationOrganizationDTO } from './dto/update-donation-organization.dto';
import { DepositBankDetail, DepositBankDetailDocument } from 'src/schema/DepositBankDetail/deposit-bank-detail.schema';
import { DepositBankDTO } from './dto/deposit-bank.dto';
import { BuyCryptoDTO } from './dto/buy-crypto.dto';
export declare class WalletService {
    private _walletModel;
    private _userModel;
    private _networkModel;
    private _coinModel;
    private _balanceModel;
    private _transactionModel;
    private _coinPriceModel;
    private _feeInfoModel;
    private _currencyModel;
    private _nftModel;
    private _stakingPlanModel;
    private _userStakeInfoModel;
    private _stakingInfoModel;
    private _fiatBalanceModel;
    private _donationOrganizationModel;
    private _depositBankDetailModel;
    private coinService;
    private utilsService;
    constructor(_walletModel: Model<Wallet>, _userModel: Model<UserDocument>, _networkModel: Model<NetworkDocument>, _coinModel: Model<CoinDocument>, _balanceModel: Model<BalanceDocument>, _transactionModel: Model<TransactionDocument>, _coinPriceModel: Model<CoinPriceDocument>, _feeInfoModel: Model<FeeInfoDocument>, _currencyModel: Model<CurrencyDocument>, _nftModel: Model<NFTDocument>, _stakingPlanModel: Model<StakingPlanDocument>, _userStakeInfoModel: Model<UserStakeInfoDocument>, _stakingInfoModel: Model<StakingInfoDocument>, _fiatBalanceModel: Model<FiatBalanceDocument>, _donationOrganizationModel: Model<DonationOrganizationDocument>, _depositBankDetailModel: Model<DepositBankDetailDocument>, coinService: CoinsService, utilsService: UtilsService);
    encryptData(data: string, encryptionKey: string): any;
    decryptData(data: string, encryptionKey: string): any;
    putBankDetails(): Promise<void>;
    addFiatBalanceForAllUsers(): Promise<void>;
    addFiatBalance(userId: string): Promise<void>;
    resetBalance(userId: string): Promise<void>;
    createWallet(userId: any): Promise<import("mongoose").Document<unknown, {}, Wallet> & Wallet & Required<{
        _id: string;
    }>>;
    createEvmWallet(mnemonic: string): {
        address: string;
        privateKey: string;
    };
    createTronWallet(mnemonic: string): {
        address: any;
        privateKey: any;
    };
    createBitcoinWallet(): {
        btcPublicKey: string;
        address: string;
        privateKey: string;
    };
    getDepositAddress(userId: any, networkId: any): Promise<{
        address: string;
        publicKey: string;
    }>;
    getFiatBalance(user: any): Promise<void>;
    getWalletWithBalance(userId: any): Promise<{
        wallet: any;
        balance: any[];
    }>;
    getBtcBalance(walletAddress: string, networkDocument: Network): Promise<{
        balance: number;
        finalBalance: number;
        balanceInUsd: number;
        error: boolean;
        transactions: any[];
    } | {
        balance: number;
        finalBalance?: undefined;
        balanceInUsd?: undefined;
        error?: undefined;
        transactions?: undefined;
    }>;
    getNativeTokenBalance(address: string, rpcUrl: string): Promise<number>;
    getAllEvmBalance(address: string): Promise<{
        address: string;
        type: string;
        name: string;
        symbol: string;
        logoUrl: string;
        balance: number;
    }[]>;
    getTronBalance(address: string): Promise<{
        address: string;
        type: string;
        name: string;
        symbol: string;
        logoUrl: string;
        balance: number;
    }>;
    withdraw(userId: any, withdrawDTO: WithdrawDTO): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Transaction> & Transaction & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, Transaction> & Transaction & Required<{
        _id: string;
    }>>;
    getQuote(swapDto: SwapDTO): Promise<{
        swappedAmount: number;
        swapFee: number;
        coinPrice: number;
    }>;
    swap(userId: any, swapDTO: SwapDTO): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Transaction> & Transaction & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, Transaction> & Transaction & Required<{
        _id: string;
    }>>;
    withdrawFiat(userId: any, withdrawFiatDTO: WithdrawFiatDTO): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Transaction> & Transaction & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, Transaction> & Transaction & Required<{
        _id: string;
    }>>;
    sendAmount(userId: any, withdrawDTO: WithdrawDTO, isGasFeeTransfer?: boolean): Promise<any>;
    sendAmountFromMaster(withdrawDTO: WithdrawDTO): Promise<any>;
    getTransactions(transactionDTO: TransactionDTO): Promise<any[]>;
    getTransactionsByAdmin(transactionDTO: TransactionDTO): Promise<any[]>;
    updateTransaction(updateTransactionDTO: UpdateTransactionDTO): Promise<{
        message: string;
    }>;
    getStats(): Promise<{
        totalUsers: number;
        activeUsers: number;
        newUsers: number;
        withdrawsFiat: number;
    }>;
    createStream(): Promise<string>;
    addAddressToStream(address: any): Promise<{
        message: string;
    }>;
    moralisTransactionWebHook(transactionDto: any): Promise<{
        message: string;
    }>;
    getBalance(walletAddress: string, coin: any, network: Network, walletId: any, userId: any, i: any): Promise<{
        balance: number;
        balanceInUsd: number;
        error: boolean;
        transactions: any;
    }>;
    updateBalance(userId: string, skipBitcoin?: boolean): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Balance> & Balance & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, Balance> & Balance & Required<{
        _id: string;
    }>)[]>;
    updateBalanceForAllUsers(): Promise<void>;
    getNonce(address: any): Promise<{
        nonce: number;
        pending: number;
    }>;
    getFee(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, FeeInfo> & FeeInfo & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, FeeInfo> & FeeInfo & Required<{
        _id: string;
    }>)[]>;
    setFee(setFeeDto: SetFeeDTO): Promise<{
        message: string;
    }>;
    getDepositBank(currency: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, DepositBankDetail> & DepositBankDetail & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, DepositBankDetail> & DepositBankDetail & Required<{
        _id: string;
    }>>;
    updateDepositBank(id: string, updateDepositBankDto: DepositBankDTO): Promise<{
        message: string;
    }>;
    getMytsionQuote(buyCryptoDto: BuyCryptoDTO): Promise<{
        fromCoinAmount: number;
        fromCoinAmountUsd: number;
        toCoinPrice: number;
        toCoinAmount: number;
        fee: number;
        feeInCoin: number;
    }>;
    buyCrypto(buyCryptoDto: BuyCryptoDTO, user: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Transaction> & Transaction & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, Transaction> & Transaction & Required<{
        _id: string;
    }>>;
    updateStatusOfBuyCryptoTransaction(id: string, status: TRANSACTIONSTATUSENUM): Promise<{
        message: string;
    }>;
    sendNft(sendNftDto: SendNftDTO, user: any): Promise<{
        message: string;
    }>;
    updateStakeData(coinId: string, userIds: string[], investmentId?: number): Promise<{
        message: string;
    }>;
    stakeAmount(stakeDto: StakeDTO, user: any): Promise<{
        message: string;
        data: {
            hash: import("web3").Bytes;
        };
        transaction: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Transaction> & Transaction & Required<{
            _id: string;
        }>> & import("mongoose").Document<unknown, {}, Transaction> & Transaction & Required<{
            _id: string;
        }>;
    }>;
    withdrawReward(withdrawRewardDto: WithdrawRewardDTO, user: any): Promise<{
        message: string;
        data: {
            hash: import("web3").Bytes;
        };
        transaction: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Transaction> & Transaction & Required<{
            _id: string;
        }>> & import("mongoose").Document<unknown, {}, Transaction> & Transaction & Required<{
            _id: string;
        }>;
    }>;
    unstakeInvestment(withdrawRewardDto: WithdrawRewardDTO, user: any): Promise<{
        message: string;
        data: {
            hash: import("web3").Bytes;
        };
        transaction: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Transaction> & Transaction & Required<{
            _id: string;
        }>> & import("mongoose").Document<unknown, {}, Transaction> & Transaction & Required<{
            _id: string;
        }>;
    }>;
    getUserStakeData(coinId: string, limit: number, offset: number, userId: string): Promise<any>;
    getStakingPlans(): Promise<{
        durationInDays: number;
        _id: string;
        __v?: any;
        $assertPopulated: <Paths = {}>(path: string | string[], values?: Partial<Paths>) => Omit<import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
            _id: string;
        }>, keyof Paths> & Paths;
        $clone: () => import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
            _id: string;
        }>;
        $getAllSubdocs: () => import("mongoose").Document[];
        $ignore: (path: string) => void;
        $isDefault: (path: string) => boolean;
        $isDeleted: (val?: boolean) => boolean;
        $getPopulatedDocs: () => import("mongoose").Document[];
        $inc: (path: string | string[], val?: number) => import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
            _id: string;
        }>;
        $isEmpty: (path: string) => boolean;
        $isValid: (path: string) => boolean;
        $locals: import("mongoose").FlattenMaps<Record<string, unknown>>;
        $markValid: (path: string) => void;
        $model: {
            <ModelType = Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }>, any>>(name: string): ModelType;
            <ModelType = Model<StakingPlan, {}, {}, {}, import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
                _id: string;
            }>, any>>(): ModelType;
        };
        $op: "save" | "validate" | "remove" | null;
        $session: (session?: import("mongoose").ClientSession | null) => import("mongoose").ClientSession | null;
        $set: {
            (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
                _id: string;
            }>;
            (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
                _id: string;
            }>;
            (value: string | Record<string, any>): import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
                _id: string;
            }>;
        };
        $where: import("mongoose").FlattenMaps<Record<string, unknown>>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").FlattenMaps<import("mongoose").Connection>;
        deleteOne: (options?: import("mongoose").QueryOptions) => Promise<import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
            _id: string;
        }>>;
        depopulate: (path?: string | string[]) => import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
            _id: string;
        }>;
        directModifiedPaths: () => Array<string>;
        equals: (doc: import("mongoose").Document<unknown, any, any>) => boolean;
        errors?: import("mongoose").Error.ValidationError;
        get: {
            <T extends keyof StakingPlan>(path: T, type?: any, options?: any): StakingPlan[T];
            (path: string, type?: any, options?: any): any;
        };
        getChanges: () => import("mongoose").UpdateQuery<import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
            _id: string;
        }>>;
        id?: any;
        increment: () => import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
            _id: string;
        }>;
        init: (obj: import("mongoose").AnyObject, opts?: import("mongoose").AnyObject) => import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
            _id: string;
        }>;
        invalidate: {
            <T extends keyof StakingPlan>(path: T, errorMsg: string | NativeError, value?: any, kind?: string): NativeError | null;
            (path: string, errorMsg: string | NativeError, value?: any, kind?: string): NativeError | null;
        };
        isDirectModified: {
            <T extends keyof StakingPlan>(path: T | T[]): boolean;
            (path: string | Array<string>): boolean;
        };
        isDirectSelected: {
            <T extends keyof StakingPlan>(path: T): boolean;
            (path: string): boolean;
        };
        isInit: {
            <T extends keyof StakingPlan>(path: T): boolean;
            (path: string): boolean;
        };
        isModified: {
            <T extends keyof StakingPlan>(path?: T | T[], options?: {
                ignoreAtomics?: boolean;
            } | null): boolean;
            (path?: string | Array<string>, options?: {
                ignoreAtomics?: boolean;
            } | null): boolean;
        };
        isNew: boolean;
        isSelected: {
            <T extends keyof StakingPlan>(path: T): boolean;
            (path: string): boolean;
        };
        markModified: {
            <T extends keyof StakingPlan>(path: T, scope?: any): void;
            (path: string, scope?: any): void;
        };
        model: {
            <ModelType = Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }>, any>>(name: string): ModelType;
            <ModelType = Model<StakingPlan, {}, {}, {}, import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
                _id: string;
            }>, any>>(): ModelType;
        };
        modifiedPaths: (options?: {
            includeChildren?: boolean;
        }) => Array<string>;
        overwrite: (obj: import("mongoose").AnyObject) => import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
            _id: string;
        }>;
        $parent: () => import("mongoose").Document | undefined;
        populate: {
            <Paths = {}>(path: string | import("mongoose").PopulateOptions | (string | import("mongoose").PopulateOptions)[]): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
                _id: string;
            }>, Paths>>;
            <Paths = {}>(path: string, select?: string | import("mongoose").AnyObject, model?: Model<any>, match?: import("mongoose").AnyObject, options?: import("mongoose").PopulateOptions): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
                _id: string;
            }>, Paths>>;
        };
        populated: (path: string) => any;
        replaceOne: (replacement?: import("mongoose").AnyObject, options?: import("mongoose").QueryOptions | null) => import("mongoose").Query<any, import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
            _id: string;
        }>, {}, import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
            _id: string;
        }>, "find">;
        save: (options?: import("mongoose").SaveOptions) => Promise<import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
            _id: string;
        }>>;
        schema: import("mongoose").FlattenMaps<import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
            [x: string]: any;
        }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
            [x: string]: any;
        }>> & import("mongoose").FlatRecord<{
            [x: string]: any;
        }> & Required<{
            _id: unknown;
        }>>>;
        set: {
            <T extends keyof StakingPlan>(path: T, val: StakingPlan[T], type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
                _id: string;
            }>;
            (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
                _id: string;
            }>;
            (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
                _id: string;
            }>;
            (value: string | Record<string, any>): import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
                _id: string;
            }>;
        };
        toJSON: {
            <T = StakingPlan & Required<{
                _id: string;
            }>>(options?: import("mongoose").ToObjectOptions & {
                flattenMaps?: true;
            }): import("mongoose").FlattenMaps<T>;
            <T = StakingPlan & Required<{
                _id: string;
            }>>(options: import("mongoose").ToObjectOptions & {
                flattenMaps: false;
            }): T;
        };
        toObject: <T = StakingPlan & Required<{
            _id: string;
        }>>(options?: import("mongoose").ToObjectOptions) => import("mongoose").Require_id<T>;
        unmarkModified: {
            <T extends keyof StakingPlan>(path: T): void;
            (path: string): void;
        };
        updateOne: (update?: import("mongoose").UpdateWithAggregationPipeline | import("mongoose").UpdateQuery<import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
            _id: string;
        }>>, options?: import("mongoose").QueryOptions | null) => import("mongoose").Query<any, import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
            _id: string;
        }>, {}, import("mongoose").Document<unknown, {}, StakingPlan> & StakingPlan & Required<{
            _id: string;
        }>, "find">;
        validate: {
            <T extends keyof StakingPlan>(pathsToValidate?: T | T[], options?: import("mongoose").AnyObject): Promise<void>;
            (pathsToValidate?: import("mongoose").pathsToValidate, options?: import("mongoose").AnyObject): Promise<void>;
            (options: {
                pathsToSkip?: import("mongoose").pathsToSkip;
            }): Promise<void>;
        };
        validateSync: {
            (options: {
                pathsToSkip?: import("mongoose").pathsToSkip;
                [k: string]: any;
            }): import("mongoose").Error.ValidationError | null;
            <T extends keyof StakingPlan>(pathsToValidate?: T | T[], options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError | null;
            (pathsToValidate?: import("mongoose").pathsToValidate, options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError | null;
        };
        planId: number;
        duration: number;
        interestRate: number;
        isActive: boolean;
        stakingContractAddress: string;
        coinId: string;
        networkId: string;
    }[]>;
    validateAddress(address: string): boolean;
    addDonationOrganization(addDonationOrganizationDto: AddDonationOrganizationDTO): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, DonationOrganization> & DonationOrganization & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, DonationOrganization> & DonationOrganization & Required<{
        _id: string;
    }>>;
    updateDonationOrganization(id: string, updateDonationOrganizationDto: UpdateDonationOrganizationDTO): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, DonationOrganization> & DonationOrganization & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, DonationOrganization> & DonationOrganization & Required<{
        _id: string;
    }>>;
    deleteDonationOrganization(id: string): Promise<import("mongoose").UpdateWriteOpResult>;
    getDonationOrganizationsForAdmin(limit: number, offset: number, name?: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, DonationOrganization> & DonationOrganization & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, DonationOrganization> & DonationOrganization & Required<{
        _id: string;
    }>)[]>;
    getDonationOrganizations(limit: number, offset: number, name?: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, DonationOrganization> & DonationOrganization & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, DonationOrganization> & DonationOrganization & Required<{
        _id: string;
    }>)[]>;
    getDonationOrganization(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, DonationOrganization> & DonationOrganization & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, DonationOrganization> & DonationOrganization & Required<{
        _id: string;
    }>>;
}
