import Image from "../../components/Image";
import logo from "../../assets/imgs/logo.svg";
const Logo = () => {
    return (
        <a href="/" className="flex justify-center items-center gap-3">
            <Image src={logo} className="w-[42px] h-[42px]" />
            <h1 className="text-black font-semibold text-[30px] leading-8">
                Tuscot
            </h1>
        </a>
    );
};

export default Logo;
