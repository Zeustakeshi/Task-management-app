const TaskCmp = ({ data = 1.3016, data2 = 2.222 }) => {
    const pers = (data / data2) * 100;

    return (
        <div className="bg-white rounded-xl p-5 flex-1 ">
            <h3 className="text-base font-medium mb-10">
                Task Target Actual vs Prediction
            </h3>
            <div className="relative bg-[#EFF2F4] rounded-xl w-full h-[16px] mb-3">
                <span
                    style={{ width: `${pers >= 100 ? 100 : pers}%` }}
                    className="absolute top-0 left-0 h-full  bg-primary rounded-[inherit]"
                ></span>
            </div>
            <div>
                <p className="font-medium text-[32px]">
                    {data} / {data2}
                </p>
                <span className="text-sm font-normal text-text_color_2">
                    Tasks
                </span>
            </div>
        </div>
    );
};

export default TaskCmp;
