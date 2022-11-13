import IconPlus from "../../components/icons/IconPlus";

const NewProject = () => {
    return (
        <button className="flex justify-center items-center gap-2 py-2 px-4 bg-[#6C5DD3] rounded-2xl text-white text-base font-medium mr-[38px]">
            <span>
                <IconPlus></IconPlus>
            </span>
            <span>New Project</span>
        </button>
    );
};

export default NewProject;
