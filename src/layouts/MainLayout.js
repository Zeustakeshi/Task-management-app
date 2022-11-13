import Header from "./header";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
    return (
        <div className="bg-[#F7F8F9] min-h-screen">
            <Header></Header>
            <div className="pt-[70px] flex justify-start items-start h-full">
                <Sidebar></Sidebar>
                <div className=" p-8 pl-[282px] w-full">{children}</div>
            </div>
        </div>
    );
};

export default MainLayout;
