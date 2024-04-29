import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const NaveBar = () => {

    const { user, userLogOut } = useContext(AuthContext);


    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                alert(' Sign-out successful.')
            }).catch(() => {
                // An error happened.
            });
    }

    const links = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border border-green-700" : ""
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/allItems"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border border-green-700" : ""
            }
        >
            All Items
        </NavLink></li>
        <li><NavLink
            to="/additem"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border border-green-700" : ""
            }
        >
            Add Items
        </NavLink></li>
        <li><NavLink
            to={`/myartandcraft/${user?.email}`}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border border-green-700" : ""
            }
        >
            My Art&Craft
        </NavLink></li>
    </>

    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to='/'>
                        <a className="btn btn-ghost text-xl">WoodWonders</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?
                            <>
                                <div className="tooltip tooltip-left mr-4" data-tip={user.displayName}>
                                    <div className="avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Link onClick={handleLogOut}>
                                        <a className="btn">Log Out</a>
                                    </Link>
                                </div>
                            </>
                            :
                            <Link to='/registration'>
                                <a className="btn">LogIn/Registration</a>
                            </Link>
                    }


                </div>
            </div>
        </nav>
    );
};

export default NaveBar;