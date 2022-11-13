import Image from "../../components/Image";
import { useAuth } from "../../context/AuthProvider";
import IconArrowDown from "../../components/icons/IconArrowDown";
import Dropdown from "../../components/Dropdown/Dropdown";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
    const { userInfo } = useAuth();

    return (
        <Dropdown content={<MenuProfile />}>
            <div className="flex justify-center items-center gap-2 cursor-pointer">
                <Image
                    className="w-[48px] h-[48px] rounded-full"
                    src={userInfo.photoURL}
                ></Image>
                <div>
                    <h3 className="text-base font-medium">
                        {userInfo.displayName}
                    </h3>
                    <h5 className="text-base font-normal text-[#B6B6B6]">
                        user
                    </h5>
                </div>
                <span className="ml-2">
                    <IconArrowDown></IconArrowDown>
                </span>
            </div>
        </Dropdown>
    );
};

const MenuItem = ({ children }) => {
    return (
        <li>
            <a
                className="px-5 py-3 hover:text-primary font-medium text-base"
                href="#"
            >
                {children}
            </a>
        </li>
    );
};

const MenuProfile = () => {
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <div className="bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_12px] rounded-lg min-w-[272px]">
            <ul className="pt-4 flex flex-col gap-3 justify-center items-center border-b border-b-gray-200 pb-4 cursor-pointer">
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>InterFace</MenuItem>
            </ul>
            <div
                onClick={handleSignOut}
                className="flex justify-center items-center gap-3 px-5 py-4 cursor-pointer text-text_color_2 font-medium"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                </svg>
                <span>Log out</span>
            </div>
        </div>
    );
};

export default Profile;
