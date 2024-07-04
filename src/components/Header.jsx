import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    return (
        <nav className="navbar fixed top-0 z-50 bg-opacity-80 backdrop-blur-md flex justify-between items-center px-4 py-2 md:px-6 md:py-4 text-gray-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <ScrollLink
                                to="home"
                                smooth={true}
                                duration={500}
                                className="text-gray-800 text-xl font-bold cursor-pointer"
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="about-me"
                                smooth={true}
                                duration={500}
                                className="text-gray-800 text-xl font-bold cursor-pointer"
                            >
                                About Me
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="skills"
                                smooth={true}
                                duration={500}
                                className="text-gray-800 text-xl font-bold cursor-pointer"
                            >
                                Skills
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="text-gray-800 text-xl font-bold cursor-pointer"
                            >
                                Projects
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="text-gray-800 text-xl font-bold cursor-pointer"
                            >
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
                <div className="text-lg md:text-xl font-bold">Portfolio</div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2 md:space-x-4">
                    <li>
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500}
                            className="hover:text-white font-bold cursor-pointer"
                        >
                            Home
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="about-me"
                            smooth={true}
                            duration={500}
                            className="hover:text-white font-bold cursor-pointer"
                        >
                            About Me
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="skills"
                            smooth={true}
                            duration={500}
                            className="hover:text-white font-bold cursor-pointer"
                        >
                            Skills
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="hover:text-white font-bold cursor-pointer"
                        >
                            Projects
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="hover:text-white font-bold cursor-pointer"
                        >
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
