import Image from "../../components/Image";
import imgAuth from "../../assets/imgs/auth/auth.svg";
import logo from "../../assets/imgs/logo.svg";
import iconFb from "../../assets/imgs/auth/icon_fb.svg";
import iconGG from "../../assets/imgs/auth/icon_google.svg";
import { auth, ggProvider } from "../../firebase/firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const AuthPage = ({ children }) => {
    const handleLoginWithGoogle = async () => {
        try {
            const data = await signInWithPopup(auth, ggProvider);
            const isNewUser = data._tokenResponse.isNewUser;
            const user = data.user;
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="bg-[#E5E5E5] p-10 min-h-screen flex justify-center items-center gap-[238px] ">
            <Image src={imgAuth} className="max-w-[640px] max-h-[640px]" />
            <div className="bg-white px-[56px] py-[44px] shadow-[0px_0px_4px_rgba(0,0,0,0.08)] rounded-lg  min-w-[788px]">
                <div className="flex justify-start items-center gap-4 mb-[37px]">
                    <Image src={logo} className="w-[60px] h-[60px]"></Image>
                    <h1 className="text-[36px] leading-[67px] font-semibold">
                        Tuscot
                    </h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-[30px]">
                    <button
                        onClick={handleLoginWithGoogle}
                        className="flex justify-center items-center gap-5 max-h-[78px] py-5 bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.11)] rounded-lg w-full text-md font-normal text-[#2F2F2F]"
                    >
                        <Image
                            src={iconGG}
                            className="w-[32px] h-[32px]"
                        ></Image>
                        <p>Login with Google</p>
                    </button>
                    <button className="flex justify-center items-center gap-5 max-h-[78px] py-5 bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.11)] rounded-lg w-full text-md font-normal text-[#2F2F2F]">
                        <Image src={iconFb} className="w-[32px]"></Image>
                        <p>Login with Facebook</p>
                    </button>
                </div>
                <div className="flex justify-center items-center gap-9 font-normal text-base text-[#2F2F2F] uppercase my-[44px]">
                    <span className="flex-1 bg-[#BFBFBF] h-[1px]"></span>
                    <span>or</span>
                    <span className="flex-1 bg-[#BFBFBF] h-[1px]"></span>
                </div>
                {children}
            </div>
        </div>
    );
};

export default AuthPage;
