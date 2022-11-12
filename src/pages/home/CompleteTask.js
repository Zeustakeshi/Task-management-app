import IconPlay from "../../components/icons/IconPlay";
import TaskInfo from "./TaskInfo";

const CompleteTask = ({ data = 62 }) => {
    return (
        <div className="rounded-lg bg-white max-w-[270px] py-4 px-5 min-w-[270px]">
            <h3 className="mb-10 text-base font-medium">
                Complete Task Target
            </h3>
            <div className="relative flex justify-center items-center mb-14">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                    className="relative z-10"
                >
                    <circle
                        className="process-circle "
                        style={{ "--w": data > 100 ? 100 : data }}
                        cx="80"
                        cy="80"
                        r="70"
                        stroke-linecap="round"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                    className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0"
                >
                    <circle
                        className=" fill-none  stroke-[#BFF1DF] stroke-[16px]"
                        cx="80"
                        cy="80"
                        r="70"
                        stroke-linecap="round"
                    />
                </svg>
                <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-bold text-[30px]">
                    {data > 100 ? 100 : data + "%"}
                </span>
            </div>
            <TaskInfo
                bgColor="#BFF1DF"
                data={455}
                title="Completed Task"
                desc="Global"
                icon={<IconPlay />}
            />
        </div>
    );
};

export default CompleteTask;
