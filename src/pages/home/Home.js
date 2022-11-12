import MainLayout from "../../layouts/MainLayout";
import CompleteTask from "./CompleteTask";
import Overview from "./overview";
import PenddingProject from "./PenddingProject";
import TaskCount from "./TaskCount";
import TopEmployees from "./TopEmployees";

const Home = () => {
    return (
        <MainLayout>
            <Overview></Overview>
            <div className="grid grid-cols-5 gap-5 ">
                <CompleteTask></CompleteTask>
                <TaskCount></TaskCount>
                <TopEmployees></TopEmployees>
            </div>
            <PenddingProject></PenddingProject>
        </MainLayout>
    );
};

export default Home;
