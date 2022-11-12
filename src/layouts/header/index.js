import Logo from "./Logo";
import NewProject from "./NewProject";
import Notify from "./Notify";
import Profile from "./Profile";
import Search from "./Search";

const Header = () => {
    return (
        <header className="flex justify-between items-center bg-white px-9 py-4 min-h-[72px] max-h-[78px]">
            <Logo></Logo>
            <div className="flex justify-between items-center">
                <Search></Search>
                <NewProject></NewProject>
                <Notify></Notify>
                <Profile></Profile>
            </div>
        </header>
    );
};

export default Header;
