import IconSearch from "../../components/icons/IconSearch";

const Search = () => {
    return (
        <div className="bg-[#F7F8F9] flex justify-center items-center rounded-xl mr-[105px] ">
            <input
                className="bg-transparent flex-1 h-full pl-5 py-3 border-none outline-none"
                type="text"
                placeholder="Search"
            />
            <div className="flex justify-center items-center p-4 cursor-pointer">
                <IconSearch></IconSearch>
            </div>
        </div>
    );
};

export default Search;
