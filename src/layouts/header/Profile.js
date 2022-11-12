import Image from "../../components/Image";
import { useAuth } from "../../context/AuthProvider";
import IconArrowDown from "../../components/icons/IconArrowDown";
const Profile = () => {
    const { userInfo } = useAuth();

    return (
        <div className="flex justify-center items-center gap-2 cursor-pointer">
            <Image
                className="w-[48px] h-[48px] rounded-full"
                src={userInfo.photoURL}
            ></Image>
            <div>
                <h3 className="text-base font-medium">
                    {userInfo.displayName}
                </h3>
                <h5 className="text-base font-normal text-[#B6B6B6]">user</h5>
            </div>
            <span className="ml-2">
                <IconArrowDown></IconArrowDown>
            </span>
        </div>
    );
};

export default Profile;
