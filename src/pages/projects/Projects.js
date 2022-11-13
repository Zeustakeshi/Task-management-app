import { useState } from "react";
import IconPlus from "../../components/icons/IconPlus";
import SwitchListAndGrid from "../../components/SwitchListAndGrid";
import MainLayout from "../../layouts/MainLayout";
import ProjectItemGrid from "./grid/ProjectItemGrid";

const Projects = () => {
    return (
        <MainLayout>
            <Container />
        </MainLayout>
    );
};

const Container = () => {
    const [list, setList] = useState(false);
    return (
        <>
            <div className="flex justify-between items-center mb-5">
                <SwitchListAndGrid
                    isList={list}
                    setIsList={setList}
                ></SwitchListAndGrid>
                <button className="bg-primary rounded-lg p-[10px] h-[37px]">
                    <IconPlus></IconPlus>
                </button>
            </div>
            <ProjectItemGrid isList={list}></ProjectItemGrid>
        </>
    );
};

export default Projects;
