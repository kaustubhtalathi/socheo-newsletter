import PropTypes from "prop-types";
import { HiOutlineUserGroup } from "react-icons/hi";

function Navbar({ title }) {
    return (
        <nav className="navbar mb-12 shadow-lg bg-secondary text-white">
            <div className="container mx-auto">
                <div className="flex px-2 mx-2 items-end">
                    <HiOutlineUserGroup className="inline pr-2 text-4xl" />
                    <h1 className="text-lg font-bold align-middle">
                        {title}
                    </h1>
                </div>
            </div>
        </nav>
    );
}

Navbar.defaultProps = {
    title: "SOCHEO",
};

Navbar.propTypes = {
    title: PropTypes.string,
};

export default Navbar;