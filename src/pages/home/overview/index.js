import Item from "./Item";
import IconPerson from "../../../components/icons/IconPerson";
import IconBriefcase from "../../../components/icons/IconBriefcase";
import IconMutiSelect from "../../../components/icons/IconMutiSelect";
import IconClose from "../../../components/icons/IconClose";
import TaskCmp from "./TaskCmp";

const items = [
    {
        title: "Total Employees",
        icon: <IconPerson></IconPerson>,
        color: "#64CBF4",
        data: "2.3016",
        task: 35,
    },
    {
        title: "Total Tasks",
        icon: <IconBriefcase></IconBriefcase>,
        color: "#FF9F38",
        data: "2.3016",
        task: 35,
    },
    {
        title: "Total Employees",
        icon: <IconMutiSelect></IconMutiSelect>,
        color: "#E391EA",
        data: "2.3016",
        task: 35,
    },
    {
        title: "Total Employees",
        icon: <IconClose></IconClose>,
        color: "#6C5DD3",
        data: "2.3016",
        task: 35,
    },
];

const Overview = () => {
    return (
        <div className="flex justify-start item-center gap-5 w-full">
            {items.map((item) => (
                <Item
                    icon={item.icon}
                    iconBgColor={item.color}
                    title={item.title}
                    task={item.task}
                >
                    {item.data}
                </Item>
            ))}
            <TaskCmp></TaskCmp>
        </div>
    );
};

export default Overview;
