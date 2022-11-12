const TaskInfo = ({ title, bgColor, desc, data, icon, className }) => {
    return (
        <div className={`flex justify-start items-center gap-2 ${className}`}>
            <span
                className="flex justify-center items-center bg-[#BFF1DF] p-3 rounded-md"
                style={{ background: bgColor }}
            >
                {icon}
            </span>
            <div className="w-full">
                <div className="w-full flex justify-between items-center font-medium text-[13px]">
                    <p>{title}</p>
                    <span>{data}</span>
                </div>
                <span className="text-text_color_2 font-normal text-[12px]">
                    {desc}
                </span>
            </div>
        </div>
    );
};

export default TaskInfo;
