import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" bg-slate-800 text-white flex w-full justify-between p-1">
      <h2><Link to={"/"}><img src="/public/pictures/Logo.png" alt="logo" className="h-[25px]" /></Link></h2>
      <ul className="flex w-[400px] justify-between">
        <li>
            <button><Link to={"/"}>Home</Link></button>
        </li>
        <li>
        <button><Link to={"/about"}>About</Link></button>
        </li>
        <li>
        <button><Link to={"/projects"}>Projects</Link></button>
        </li>
        <li>
        <button><Link to={"/dadada"}>Error</Link></button>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
