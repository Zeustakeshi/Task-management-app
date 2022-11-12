import Image from "../../components/Image";
import userImg from "../../assets/imgs/home/users/user.png";

const datas = [];

const TopEmployees = () => {
    return (
        <div className="rounded-lg bg-white px-10 py-4 col-span-3">
            <h3 className="mb-7 text-base font-medium">Top Employees</h3>
            <div>
                {new Array(5).fill(0).map((item, index) => {
                    return (
                        <UserInfo
                            key={index}
                            name="Rudolph G"
                            totalTask={194}
                            point={1.23}
                            job="Product Designer"
                        ></UserInfo>
                    );
                })}
            </div>
        </div>
    );
};

const UserInfo = ({ avatar, name, totalTask, point, job }) => {
    return (
        <div className="flex justify-start items-center gap-3 mb-5 last:mb-0">
            <Image className="w-[40px] h-[40px]" src={userImg}></Image>
            <div className="w-full flex justify-between items-center font-medium text-sm">
                <p>{name}</p>
                <p>{job}</p>
                <p>
                    {totalTask} <span>task</span>
                </p>
                <p className="text-primary">
                    {point} <span>pts</span>
                </p>
            </div>
        </div>
    );
};

export default TopEmployees;
