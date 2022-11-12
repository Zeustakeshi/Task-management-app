import Header from "./header";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
    return (
        <div className="bg-[#F7F8F9] min-h-screen">
            <Header></Header>
            <div className="flex justify-start items-start">
                <Sidebar></Sidebar>
                <div className="p-8 w-full">{children}</div>
            </div>
        </div>
    );
};

export default MainLayout;
