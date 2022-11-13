import React from "react";
import IconDashboard2 from "./icons/IconDashboard2";
import IconList from "./icons/IconList";

const SwitchListAndGrid = ({ isList, setIsList }) => {
    return (
        <div className="bg-white flex justify-center items-center rounded-xl max-w-[80px] h-[37px]">
            <ButtonAction isActive={isList} onClick={() => setIsList(true)}>
                <IconList></IconList>
            </ButtonAction>
            <ButtonAction isActive={!isList} onClick={() => setIsList(false)}>
                <IconDashboard2></IconDashboard2>
            </ButtonAction>
        </div>
    );
};

const ButtonAction = ({ isActive, children, ...props }) => {
    let activeClass;
    if (isActive) {
        activeClass = " bg-[#E0F5FD] !border-[#64CBF4] !text-[#64CBF4]";
    } else {
        activeClass = "";
    }

    return (
        <span
            className={`flex justify-center items-center w-[40px] h-[40px] text-[#6F767E] cursor-pointer border-2 border-transparent  rounded-lg ${activeClass}`}
            {...props}
        >
            {children}
        </span>
    );
};

export default SwitchListAndGrid;
