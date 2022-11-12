import Image from "../../components/Image";
import { useAuth } from "../../context/AuthProvider";

const Home = () => {
    const { userInfo } = useAuth();
    return (
        <div className="w-full h-full flex justify-center items-center">
            <h1>Welcome {userInfo.displayName}</h1>
            <Image
                src={userInfo.photoURL}
                className="w-[50px] h-[50px]"
            ></Image>
        </div>
    );
};

export default Home;
