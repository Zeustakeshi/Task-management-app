import IconShopping from "../../components/icons/IconShopping";
import IconWallet from "../../components/icons/IconWallet";
import TaskInfo from "./TaskInfo";
const TaskCount = () => {
    return (
        <div className="bg-white rounded-lg py-4 px-5 min-w-[270px]">
            <h3 className="mb-5 text-base font-medium">Task Count</h3>
            <div className="flex justify-center items-end gap-5 mb-8">
                <Col height={104} data={80} month="Jan"></Col>
                <Col height={94} data={72} month="Feb"></Col>
                <Col height={118} data={90} month="Mar"></Col>
                <Col height={108} data={83} month="Apr"></Col>
                <Col height={136} data={104} month="May"></Col>
            </div>
            <TaskInfo
                icon={<IconShopping />}
                title="Expanslon Europo"
                desc="Global"
                data={245}
                bgColor="#E0F5FD"
                className="mb-3"
            />
            <TaskInfo
                icon={<IconWallet />}
                title="Payment Promo"
                desc="Commercial"
                data={122}
                bgColor="#FAE6D2"
            />
        </div>
    );
};

const Col = ({ height, data, month }) => {
    const pers = (data / height) * 100;
    return (
        <div className="flex flex-col gap-1">
            <div
                className="relative bg-[#E8EBED] rounded-[9px_9px_0px_0px] w-[30px]"
                style={{ height: height }}
            >
                <span
                    className={`absolute bottom-0 left-0 rounded-[inherit] bg-primary w-full`}
                    style={{ height: `${pers > 100 ? 100 : pers}%` }}
                ></span>
            </div>
            <span className="text-text_color_2 text-[13px] font-normal">
                {month}
            </span>
        </div>
    );
};

export default TaskCount;
