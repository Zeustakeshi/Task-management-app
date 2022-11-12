import Image from "../../components/Image";
import AuthPage from "./AuthPage";
import iconEmail from "../../assets/imgs/auth/icon_email.svg";
import iconKey from "../../assets/imgs/auth/icon_key.svg";
import iconEye from "../../assets/imgs/auth/icon_eye.svg";

const SignInPage = () => {
    return (
        <AuthPage>
            <form className="flex flex-col gap-6 w-full mb-10">
                <label
                    htmlFor="email"
                    className="flex justify-start items-center gap-7 px-6 bg-[#ECECEC] rounded-lg"
                >
                    <Image src={iconEmail} className="w-[36px]"></Image>
                    <input
                        className="w-full h-full py-6 bg-transparent border-none outline-none font-medium text-lg placeholder:font-normal"
                        id="email"
                        type="email"
                        placeholder="Email"
                        autoComplete="off"
                    />
                </label>
                <label
                    htmlFor="password"
                    className="flex justify-start items-center gap-7 px-6 bg-[#ECECEC] rounded-lg"
                >
                    <Image src={iconKey} className="w-[36px]"></Image>
                    <input
                        className="w-full h-full py-6 bg-transparent border-none outline-none font-medium text-lg placeholder:font-normal"
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                    <Image
                        src={iconEye}
                        className="w-[30px] cursor-pointer"
                    ></Image>
                </label>
                <div className="flex justify-between items-center">
                    <label htmlFor="remenber">
                        <input id="remenber" type="checkbox" />
                        <span className="ml-2 cursor-pointer text-[#2F2F2F] text-base font-normal">
                            Remember me
                        </span>
                    </label>
                    <a href="" className="font-normal text-base text-[#6358DC]">
                        Forgot Password?
                    </a>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#6358DC] rounded-lg min-h-[78px] text-white"
                >
                    Login
                </button>
            </form>
            <div className="mx-auto text-center text-black text-base">
                Don’t have an account?{" "}
                <a href="" className="text-[#6358DC]">
                    Register
                </a>
            </div>
        </AuthPage>
    );
};

export default SignInPage;
