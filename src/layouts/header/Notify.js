import Dropdown from "../../components/Dropdown/Dropdown";
import IconNotify from "../../components/icons/IconNotify";
import Image from "../../components/Image";

const Notify = () => {
    return (
        <Dropdown placement="bottom-end" content={<NotifyContainer />}>
            <div className="p-4 mr-2 cursor-pointer select-none">
                <IconNotify></IconNotify>
            </div>
        </Dropdown>
    );
};

const notifications = {
    new: {
        noti: [],
        mess: [],
    },
    viewed: {
        noti: [
            {
                title: "Hello !!",
                desc: "Well come to the task management web app.",
                time: "asd",
            },
        ],
        mess: [
            {
                GroupID: "asds",
                userID: "#asdasds",
                mess: "Hey you!",
                time: "asd",
            },
        ],
    },
};

const NotifyContainer = () => {
    return (
        <div className="bg-white px-2 py-5 shadow-[rgba(0,0,0,0.1)_0px_4px_12px] rounded-lg max-w-[650px]">
            <ul>
                <InviteNotify></InviteNotify>
                {new Array(2).fill(0).map((item, index) => (
                    <SytemNotify />
                ))}
                {new Array(2).fill(0).map((item, index) => (
                    <GroupNotify />
                ))}
            </ul>
        </div>
    );
};

const GroupNotify = () => {
    const avatarURL =
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80";

    return (
        <li className="relative py-5 px-4 cursor-pointer text-base first:border-t-transparent border-t border-t-gray-200">
            <div className="mb-3 flex justify-start items-center gap-3">
                <div className="w-[40px] h-[40px] rounded-full">
                    <Image src={avatarURL} />
                </div>
                <h3 className="font-medium">Hey you !!</h3>
                <span className="text-sm font-normal text-text_color_2">
                    <a href="#">{`- Group front-end  -`}</a>
                </span>
                <span className="text-sm font-normal text-text_color_2">
                    {`-  1 minutes ago  -`}
                </span>
            </div>
            <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore, dicta!
            </p>
            <span className="absolute top-2 right-4 text-gray-200 hover:text-gray-400 p-2 text-sm">
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
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </span>
        </li>
    );
};

const SytemNotify = () => {
    return (
        <li className="relative py-5 px-4 cursor-pointer text-base first:border-t-transparent border-t border-t-gray-200">
            <div className="mb-3 flex justify-start items-center gap-3">
                <h3 className="font-medium">Hey you !!</h3>
                <span className="text-sm font-normal text-text_color_2">
                    {`-  1 minutes ago  -`}
                </span>
            </div>
            <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore, dicta!
            </p>
            <span className="absolute top-2 right-4 text-gray-200 hover:text-gray-400 p-2 text-sm">
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
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </span>
        </li>
    );
};

const InviteNotify = () => {
    const avatarURL =
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80";

    return (
        <li className="relative py-5 px-4 cursor-pointer text-base first:border-t-transparent border-t border-t-gray-200">
            <div className="mb-3 flex justify-start items-center gap-3">
                <div className="w-[40px] h-[40px] rounded-full">
                    <Image src={avatarURL} />
                </div>
                <h3 className="font-medium">Invited</h3>
                <span className="text-sm font-normal text-text_color_2">
                    <a href="#">{`- Group front-end  -`}</a>
                </span>
                <span className="text-sm font-normal text-text_color_2">
                    {`-  1 minutes ago  -`}
                </span>
            </div>
            <p className="text-sm ">
                Jonh has invited you to join{" "}
                <a href="#" className="text-primary">
                    Group front-end
                </a>
            </p>
            <span className="absolute top-2 right-4 text-gray-200 hover:text-gray-400 p-2 text-sm">
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
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </span>
        </li>
    );
};

export default Notify;
