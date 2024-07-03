const Header = () => {
    return (
        <nav className="navbar sticky top-0 z-50 bg-red-700 bg-opacity-80 backdrop-blur-md flex justify-between items-center px-4 py-2 md:px-6 md:py-4 text-white">
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
        <li><a className="text-gray-800" href="#home">Home</a></li>
        <li><a className="text-gray-800" href="#skills">Skills</a></li>
        <li><a className="text-gray-800" href="#education">Education</a></li>
        <li><a className="text-gray-800" href="#projects">Projects</a></li>
        <li><a className="text-gray-800" href="#contact">Contact</a></li>
      </ul>
    </div>
    <div className="text-lg md:text-xl font-bold">Portfolio</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-2 md:space-x-4">
      <li><a href="#home" className="hover:text-blue-400">Home</a></li>
      <li><a href="#skills" className="hover:text-gray-500">Skills</a></li>
      <li><a href="#education" className="hover:text-gray-500">Education</a></li>
      <li><a href="#projects" className="hover:text-gray-500">Projects</a></li>
      <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</nav>

    );
};

export default Header;
