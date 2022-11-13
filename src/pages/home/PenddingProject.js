const PenddingProject = () => {
    return (
        <div className="grid grid-cols-4 mt-6 gap-5">
            {new Array(4).fill(0).map((item, index) => {
                return (
                    <Item
                        key={index}
                        title="Tachnology & Design Team"
                        employees={940}
                        deathLine={100}
                        currTime={30}
                    ></Item>
                );
            })}
        </div>
    );
};

const Item = ({ title, employees, deathLine, currTime }) => {
    const pers = deathLine - (currTime / deathLine) * 100;
    return (
        <div className="bg-white rounded-lg p-4">
            <h4 className="text-[13px] font-medium mb-3">{title}</h4>
            <div className="text-[20px] font-medium">{employees}</div>
            <div className=" mt-1 mb-4  text-[13px] text-text_color_2 font-normal">
                Employees
            </div>
            <div className="relative bg-[#EFF1F4] w-full h-2 rounded-full">
                <span
                    style={{
                        width: `${pers > 100 ? 100 : pers}%`,
                        background: pers < 25 ? "#F14A5B" : "#6C5DD3",
                    }}
                    className="absolute top-0 left-0 h-full rounded-[inherit]"
                ></span>
            </div>
        </div>
    );
};

export default PenddingProject;
