import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { OtpDTO } from './dto/otp.dto';
import { SignupDTO } from './dto/signup.dto';
import { EmailDTO } from './dto/email.dto';
import { ChangeEmailDTO, ChangePasswordDTO, PasswordDTO } from './dto/password.dto';
import { UpdateProfileDTO } from './dto/profile.dto';
import { GetUsersDTO, UpdateUserActiveDTO, UpdateUserRoleDTO } from './dto/users.dto';
import { AddBannerDTO, GetBannerDTO, UpdateBannerDTO } from './dto/banner.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(signupDto: SignupDTO): Promise<{
        user: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/User/user.schema").User> & import("../../schema/User/user.schema").User & Required<{
            _id: string;
        }>> & import("mongoose").Document<unknown, {}, import("../../schema/User/user.schema").User> & import("../../schema/User/user.schema").User & Required<{
            _id: string;
        }>;
    }>;
    signupAdmin(signupDto: SignupDTO): Promise<{
        user: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/User/user.schema").User> & import("../../schema/User/user.schema").User & Required<{
            _id: string;
        }>> & import("mongoose").Document<unknown, {}, import("../../schema/User/user.schema").User> & import("../../schema/User/user.schema").User & Required<{
            _id: string;
        }>;
    }>;
    verifyEmail(otpDto: OtpDTO): Promise<{
        status: string;
        token: {
            access_token: string;
        };
    }>;
    resendOtp(emailDto: EmailDTO): Promise<{
        status: string;
    } | {
        status: string;
        message: string;
    }>;
    login(loginDto: LoginDTO): Promise<{
        user: any;
        token: {
            access_token: string;
        };
    }>;
    forgotPassword(emailDto: EmailDTO): Promise<{
        status: string;
    }>;
    verifyOtpForForgotPassword(otpDto: OtpDTO): Promise<{
        status: string;
        token: {
            access_token: string;
        };
    }>;
    resetPassword(passwordDto: PasswordDTO, user: any): Promise<{
        status: string;
    }>;
    changePassword(changePasswordDTO: ChangePasswordDTO, user: any): Promise<{
        status: string;
    }>;
    changeEmail(changeEmailDTO: ChangeEmailDTO, user: any): Promise<{
        user: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/User/user.schema").User> & import("../../schema/User/user.schema").User & Required<{
            _id: string;
        }>> & import("mongoose").Document<unknown, {}, import("../../schema/User/user.schema").User> & import("../../schema/User/user.schema").User & Required<{
            _id: string;
        }>;
    }>;
    updateProfile(updateProfile: UpdateProfileDTO, user: any): Promise<import("mongoose").UpdateWriteOpResult>;
    getLoggedInUsers(user: any): Promise<any>;
    deleteUser(user: any): Promise<{
        status: string;
        message: string;
    }>;
    getAllUsers(User: any, getUsersDTO: GetUsersDTO): Promise<any[]>;
    updateUserActive(updateUserActiveDTO: UpdateUserActiveDTO): Promise<{
        message: string;
    }>;
    updateUserRole(updateUserRoleDTO: UpdateUserRoleDTO): Promise<{
        message: string;
    }>;
    addBanner(addBannerDTO: AddBannerDTO): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/banner/banner.schema").Banner> & import("../../schema/banner/banner.schema").Banner & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, import("../../schema/banner/banner.schema").Banner> & import("../../schema/banner/banner.schema").Banner & Required<{
        _id: string;
    }>>;
    updateBanner(updateBannerDTO: UpdateBannerDTO): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../schema/banner/banner.schema").Banner> & import("../../schema/banner/banner.schema").Banner & Required<{
        _id: string;
    }>> & import("mongoose").Document<unknown, {}, import("../../schema/banner/banner.schema").Banner> & import("../../schema/banner/banner.schema").Banner & Required<{
        _id: string;
    }>>;
    getBanners(getBannerDTO: GetBannerDTO): Promise<any[]>;
}
