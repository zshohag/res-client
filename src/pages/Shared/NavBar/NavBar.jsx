import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  //  GET CART LENGTH
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "User Logged Out  ",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      {/* <li>
        <Link to={user && isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"}>
          Dashboard
        </Link>
      </li> */}

      {user ? (
        <li>
          <Link to={isAdmin ? "/dashboard/adminhome" : "/dashboard/userhome"}>
            Dashboard
          </Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Dashboard</Link>
        </li>
      )}

      {/* <li>
        {user ? (
          <Link to="/dashboard">Dashboard</Link>
        ) : (
          <Link to="/login">Dashboard</Link>
        )}
      </li> */}

      {user ? (
        <li>
          <Link to="/dashboard/mycart">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </Link>
        </li>
      ) : (
        <li>
          <Link to="/login">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </Link>
        </li>
      )}

      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-sm btn-ghost  ">
            <small>Sign Out</small>
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-xl lg:text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case  sm:text-white ">
            <p>
              <span className="text-lg">BISTRO BOSS</span> <br />{" "}
              <span className=" uppercase">R e s t a u r a n t </span>{" "}
            </p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end  ">
          <p className="text-black font-semibold ">{user?.displayName}</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
