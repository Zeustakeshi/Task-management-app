const Item = ({ icon, title, children, task, iconBgColor }) => {
    return (
        <div className="flex flex-col justify-between bg-white rounded-xl py-[24px] px-[15px] min-w-[250px]">
            <span
                className={`bg-[#64CBF4] rounded-lg flex justify-center item-center max-w-[43px] py-[10px] mb-[27px]`}
                style={{ background: iconBgColor }}
            >
                {icon}
            </span>
            <p className="text-sm font-medium text-text_color_2 mb-5">
                {title}
            </p>
            <h3 className="text-[24px] font-medium text-black mb-1">
                {children}
            </h3>
            <p className="text-text_color_2 text-sm font-normal mb-5">Task</p>
            <p className="text-[12px] text-text_color_2 font-normal">
                <span className="text-primary">+{task}%</span> This Month
            </p>
        </div>
    );
};

export default Item;
