import IconAnalytics from "../../components/icons/IconAnalytics";
import IconDashboard from "../../components/icons/IconDashboard";
import IconMess from "../../components/icons/IconMess";
import IconProject from "../../components/icons/IconProject";
import IconTask from "../../components/icons/IconTask";
import { NavLink } from "react-router-dom";

const items = [
    {
        label: "Dashboard",
        link: "/",
        icon: <IconDashboard></IconDashboard>,
    },
    {
        label: "Projects",
        link: "/projects",
        icon: <IconProject></IconProject>,
    },
    {
        label: "My Task",
        link: "/task",
        icon: <IconTask></IconTask>,
    },
    {
        label: "Message",
        link: "/message",
        icon: <IconMess></IconMess>,
    },
    {
        label: "Analytics",
        link: "/analytics",
        icon: <IconAnalytics></IconAnalytics>,
    },
];

const Sidebar = () => {
    return (
        <ul className="fixed top-[78px] left-0 py-10 bg-white flex flex-col justify-start items-start min-w-[250px] max-w-[250px] -mb-[5000px] pb-[5000px]">
            {items.map((item) => {
                return (
                    <li key={item.title} className="w-full">
                        <NavLink
                            className={({ isActive }) =>
                                `flex justify-start items-center gap-3 py-3 px-8 text-[#B6B6B6] font-normal font-base transition-all hover:text-primary hover:border-r-4 hover:border-r-primary ${
                                    isActive
                                        ? "text-primary font-medium border-r-4 border-r-primary"
                                        : "text-[#B6B6B6]"
                                }`
                            }
                            to={item.link}
                        >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};

export default Sidebar;
