import { WalletService } from './wallet.service';
import { TransactionDTO, UpdateTransactionDTO } from './dto/transaction.dto';
import { NetworkDTO } from './dto/coinNetwork.dto';
import { SwapDTO, WithdrawDTO, WithdrawFiatDTO } from './dto/withdraw.dto';
import { Request } from 'express';
import { SetFeeDTO } from './dto/setFee.dto';
import { SendNftDTO } from './dto/send-nft.dto';
import { StakeDTO } from './dto/stake.dto';
import { WithdrawRewardDTO } from './dto/withdrawReward.dto';
import { AddDonationOrganizationDTO } from './dto/add-donation-organization.dto';
import { UpdateDonationOrganizationDTO } from './dto/update-donation-organization.dto';
import { DepositBankDTO } from './dto/deposit-bank.dto';
import { BuyCryptoDTO } from './dto/buy-crypto.dto';
import { TRANSACTIONSTATUSENUM } from 'src/enum/transaction.enum';
export declare class WalletController {
    private _walletService;
    constructor(_walletService: WalletService);
    getWalletWithBalance(user: any): Promise<{
        wallet: any;
        balance: any[];
    }>;
    getUserWalletWithBalance(userId: string): Promise<{
        wallet: any;
        balance: any[];
    }>;
    getDepositAddress(user: any, networkDTO: NetworkDTO): Promise<{
        address: string;
        publicKey: string;
    }>;
    withdraw(user: any, withdrawDTO: WithdrawDTO, req: Request): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/Transaction/transaction.schema").Transaction> & import("../../schema/Transaction/transaction.schema").Transaction & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, import("../../schema/Transaction/transaction.schema").Transaction> & import("../../schema/Transaction/transaction.schema").Transaction & Required<{
        _id: string;
    }>>;
    withdrawFiat(user: any, withdrawFiatDTO: WithdrawFiatDTO): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/Transaction/transaction.schema").Transaction> & import("../../schema/Transaction/transaction.schema").Transaction & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, import("../../schema/Transaction/transaction.schema").Transaction> & import("../../schema/Transaction/transaction.schema").Transaction & Required<{
        _id: string;
    }>>;
    getSwapQuote(swapDTO: SwapDTO, req: Request): Promise<{
        swappedAmount: number;
        swapFee: number;
        coinPrice: number;
    }>;
    swap(user: any, swapDTO: SwapDTO, req: Request): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/Transaction/transaction.schema").Transaction> & import("../../schema/Transaction/transaction.schema").Transaction & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, import("../../schema/Transaction/transaction.schema").Transaction> & import("../../schema/Transaction/transaction.schema").Transaction & Required<{
        _id: string;
    }>>;
    getTransactions(transactionDTO: TransactionDTO, user: any): Promise<any[]>;
    getTransactionsByAdmin(transactionDTO: TransactionDTO, user: any): Promise<any[]>;
    updateTransaction(updateTransactionDTO: UpdateTransactionDTO, user: any): Promise<{
        message: string;
    }>;
    getStats(): Promise<{
        totalUsers: number;
        activeUsers: number;
        newUsers: number;
        withdrawsFiat: number;
    }>;
    moralisTransactionWebHook(transactionDto: any): Promise<{
        message: string;
    }>;
    getNonce(address: string): Promise<{
        nonce: number;
        pending: number;
    }>;
    getFee(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/FeeInfo/fee-info.schema").FeeInfo> & import("../../schema/FeeInfo/fee-info.schema").FeeInfo & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, import("../../schema/FeeInfo/fee-info.schema").FeeInfo> & import("../../schema/FeeInfo/fee-info.schema").FeeInfo & Required<{
        _id: string;
    }>)[]>;
    setFee(setFeeDto: SetFeeDTO): Promise<{
        message: string;
    }>;
    getDepositBank(currency?: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/DepositBankDetail/deposit-bank-detail.schema").DepositBankDetail> & import("../../schema/DepositBankDetail/deposit-bank-detail.schema").DepositBankDetail & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, import("../../schema/DepositBankDetail/deposit-bank-detail.schema").DepositBankDetail> & import("../../schema/DepositBankDetail/deposit-bank-detail.schema").DepositBankDetail & Required<{
        _id: string;
    }>>;
    updateDepositBank(id: string, depositBankDto: DepositBankDTO): Promise<{
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
    buyCrypto(user: any, buyCryptoDto: BuyCryptoDTO): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/Transaction/transaction.schema").Transaction> & import("../../schema/Transaction/transaction.schema").Transaction & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, import("../../schema/Transaction/transaction.schema").Transaction> & import("../../schema/Transaction/transaction.schema").Transaction & Required<{
        _id: string;
    }>>;
    updateStatusOfBuyCryptoTransaction(id: string, status?: TRANSACTIONSTATUSENUM): Promise<{
        message: string;
    }>;
    sendNft(sendNftDto: SendNftDTO, user: any): Promise<{
        message: string;
    }>;
    stakeAmount(stakeDto: StakeDTO, user: any): Promise<{
        message: string;
        data: {
            hash: import("web3-types").Bytes;
        };
        transaction: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/Transaction/transaction.schema").Transaction> & import("../../schema/Transaction/transaction.schema").Transaction & Required<{
            _id: string;
        }>> & import("mongoose").Document<unknown, {}, import("../../schema/Transaction/transaction.schema").Transaction> & import("../../schema/Transaction/transaction.schema").Transaction & Required<{
            _id: string;
        }>;
    }>;
    getUserStakeData(coinId: string, limit: number, offset: number, user: any): Promise<any>;
    withdrawReward(withdrawRewardDto: WithdrawRewardDTO, user: any): Promise<{
        message: string;
        data: {
            hash: import("web3-types").Bytes;
        };
        transaction: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/Transaction/transaction.schema").Transaction> & import("../../schema/Transaction/transaction.schema").Transaction & Required<{
            _id: string;
        }>> & import("mongoose").Document<unknown, {}, import("../../schema/Transaction/transaction.schema").Transaction> & import("../../schema/Transaction/transaction.schema").Transaction & Required<{
            _id: string;
        }>;
    }>;
    unstakeInvestment(withdrawRewardDto: WithdrawRewardDTO, user: any): Promise<{
        message: string;
        data: {
            hash: import("web3-types").Bytes;
        };
        transaction: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/Transaction/transaction.schema").Transaction> & import("../../schema/Transaction/transaction.schema").Transaction & Required<{
            _id: string;
        }>> & import("mongoose").Document<unknown, {}, import("../../schema/Transaction/transaction.schema").Transaction> & import("../../schema/Transaction/transaction.schema").Transaction & Required<{
            _id: string;
        }>;
    }>;
    getStakingPlans(): Promise<{
        durationInDays: number;
        _id: string;
        __v?: any;
        $assertPopulated: <Paths = {}>(path: string | string[], values?: Partial<Paths>) => Omit<import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>, keyof Paths> & Paths;
        $clone: () => import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>;
        $getAllSubdocs: () => import("mongoose").Document[];
        $ignore: (path: string) => void;
        $isDefault: (path: string) => boolean;
        $isDeleted: (val?: boolean) => boolean;
        $getPopulatedDocs: () => import("mongoose").Document[];
        $inc: (path: string | string[], val?: number) => import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>;
        $isEmpty: (path: string) => boolean;
        $isValid: (path: string) => boolean;
        $locals: import("mongoose").FlattenMaps<Record<string, unknown>>;
        $markValid: (path: string) => void;
        $model: {
            <ModelType = import("mongoose").Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }>, any>>(name: string): ModelType;
            <ModelType = import("mongoose").Model<import("../../schema/StakingPlan/staking-plan.schema").StakingPlan, {}, {}, {}, import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
                _id: string;
            }>, any>>(): ModelType;
        };
        $op: "save" | "validate" | "remove" | null;
        $session: (session?: import("mongoose").ClientSession | null) => import("mongoose").ClientSession | null;
        $set: {
            (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
                _id: string;
            }>;
            (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
                _id: string;
            }>;
            (value: string | Record<string, any>): import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
                _id: string;
            }>;
        };
        $where: import("mongoose").FlattenMaps<Record<string, unknown>>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").FlattenMaps<import("mongoose").Connection>;
        deleteOne: (options?: import("mongoose").QueryOptions) => Promise<import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>>;
        depopulate: (path?: string | string[]) => import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>;
        directModifiedPaths: () => Array<string>;
        equals: (doc: import("mongoose").Document<unknown, any, any>) => boolean;
        errors?: import("mongoose").Error.ValidationError;
        get: {
            <T extends keyof import("../../schema/StakingPlan/staking-plan.schema").StakingPlan>(path: T, type?: any, options?: any): import("../../schema/StakingPlan/staking-plan.schema").StakingPlan[T];
            (path: string, type?: any, options?: any): any;
        };
        getChanges: () => import("mongoose").UpdateQuery<import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>>;
        id?: any;
        increment: () => import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>;
        init: (obj: import("mongoose").AnyObject, opts?: import("mongoose").AnyObject) => import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>;
        invalidate: {
            <T extends keyof import("../../schema/StakingPlan/staking-plan.schema").StakingPlan>(path: T, errorMsg: string | NativeError, value?: any, kind?: string): NativeError | null;
            (path: string, errorMsg: string | NativeError, value?: any, kind?: string): NativeError | null;
        };
        isDirectModified: {
            <T extends keyof import("../../schema/StakingPlan/staking-plan.schema").StakingPlan>(path: T | T[]): boolean;
            (path: string | Array<string>): boolean;
        };
        isDirectSelected: {
            <T extends keyof import("../../schema/StakingPlan/staking-plan.schema").StakingPlan>(path: T): boolean;
            (path: string): boolean;
        };
        isInit: {
            <T extends keyof import("../../schema/StakingPlan/staking-plan.schema").StakingPlan>(path: T): boolean;
            (path: string): boolean;
        };
        isModified: {
            <T extends keyof import("../../schema/StakingPlan/staking-plan.schema").StakingPlan>(path?: T | T[], options?: {
                ignoreAtomics?: boolean;
            } | null): boolean;
            (path?: string | Array<string>, options?: {
                ignoreAtomics?: boolean;
            } | null): boolean;
        };
        isNew: boolean;
        isSelected: {
            <T extends keyof import("../../schema/StakingPlan/staking-plan.schema").StakingPlan>(path: T): boolean;
            (path: string): boolean;
        };
        markModified: {
            <T extends keyof import("../../schema/StakingPlan/staking-plan.schema").StakingPlan>(path: T, scope?: any): void;
            (path: string, scope?: any): void;
        };
        model: {
            <ModelType = import("mongoose").Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }>, any>>(name: string): ModelType;
            <ModelType = import("mongoose").Model<import("../../schema/StakingPlan/staking-plan.schema").StakingPlan, {}, {}, {}, import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
                _id: string;
            }>, any>>(): ModelType;
        };
        modifiedPaths: (options?: {
            includeChildren?: boolean;
        }) => Array<string>;
        overwrite: (obj: import("mongoose").AnyObject) => import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>;
        $parent: () => import("mongoose").Document | undefined;
        populate: {
            <Paths = {}>(path: string | import("mongoose").PopulateOptions | (string | import("mongoose").PopulateOptions)[]): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
                _id: string;
            }>, Paths>>;
            <Paths = {}>(path: string, select?: string | import("mongoose").AnyObject, model?: import("mongoose").Model<any>, match?: import("mongoose").AnyObject, options?: import("mongoose").PopulateOptions): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
                _id: string;
            }>, Paths>>;
        };
        populated: (path: string) => any;
        replaceOne: (replacement?: import("mongoose").AnyObject, options?: import("mongoose").QueryOptions | null) => import("mongoose").Query<any, import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>, {}, import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>, "find">;
        save: (options?: import("mongoose").SaveOptions) => Promise<import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>>;
        schema: import("mongoose").FlattenMaps<import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
            [x: string]: any;
        }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
            [x: string]: any;
        }>> & import("mongoose").FlatRecord<{
            [x: string]: any;
        }> & Required<{
            _id: unknown;
        }>>>;
        set: {
            <T extends keyof import("../../schema/StakingPlan/staking-plan.schema").StakingPlan>(path: T, val: import("../../schema/StakingPlan/staking-plan.schema").StakingPlan[T], type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
                _id: string;
            }>;
            (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
                _id: string;
            }>;
            (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
                _id: string;
            }>;
            (value: string | Record<string, any>): import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
                _id: string;
            }>;
        };
        toJSON: {
            <T = import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
                _id: string;
            }>>(options?: import("mongoose").ToObjectOptions & {
                flattenMaps?: true;
            }): import("mongoose").FlattenMaps<T>;
            <T = import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
                _id: string;
            }>>(options: import("mongoose").ToObjectOptions & {
                flattenMaps: false;
            }): T;
        };
        toObject: <T = import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>>(options?: import("mongoose").ToObjectOptions) => import("mongoose").Require_id<T>;
        unmarkModified: {
            <T extends keyof import("../../schema/StakingPlan/staking-plan.schema").StakingPlan>(path: T): void;
            (path: string): void;
        };
        updateOne: (update?: import("mongoose").UpdateWithAggregationPipeline | import("mongoose").UpdateQuery<import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>>, options?: import("mongoose").QueryOptions | null) => import("mongoose").Query<any, import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>, {}, import("mongoose").Document<unknown, {}, import("../../schema/StakingPlan/staking-plan.schema").StakingPlan> & import("../../schema/StakingPlan/staking-plan.schema").StakingPlan & Required<{
            _id: string;
        }>, "find">;
        validate: {
            <T extends keyof import("../../schema/StakingPlan/staking-plan.schema").StakingPlan>(pathsToValidate?: T | T[], options?: import("mongoose").AnyObject): Promise<void>;
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
            <T extends keyof import("../../schema/StakingPlan/staking-plan.schema").StakingPlan>(pathsToValidate?: T | T[], options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError | null;
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
    addDonationOrganization(addDonationOrganizationDTO: AddDonationOrganizationDTO): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization> & import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization> & import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization & Required<{
        _id: string;
    }>>;
    updateDonationOrganization(id: string, updateDonationOrganizationDto: UpdateDonationOrganizationDTO): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization> & import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization> & import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization & Required<{
        _id: string;
    }>>;
    deleteDonationOrganization(id: string): Promise<import("mongoose").UpdateWriteOpResult>;
    getDonationOrganizations(limit?: number, offset?: number, name?: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization> & import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization> & import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization & Required<{
        _id: string;
    }>)[]>;
    getDonationOrganizationsForAdmin(limit?: number, offset?: number, name?: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization> & import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization> & import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization & Required<{
        _id: string;
    }>)[]>;
    getDonationOrganization(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization> & import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization> & import("../../schema/DonationOrganization/donation-organization.schema").DonationOrganization & Required<{
        _id: string;
    }>>;
}
