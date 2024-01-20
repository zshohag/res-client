import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaHome,
  FaWallet,
  FaCalendar,
  FaPlus,
  FaGripLines,
  FaBookOpen,
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  //TODO : LOAD DATA FROM THE SERVER
  //const isAdmin = true;
  const [isAdmin] = useAdmin();
  console.log('isAdmin ->', isAdmin)

  return (
    <div className="drawer lg:drawer-open  ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}

        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn  drawer-button lg:hidden mt-6 "
        >
          Open Dashboard
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay   "
        ></label>
        <ul className="menu p-4 w-80  md:bg-[#D1A054] min-h-full ">
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart />
                  My Cart
                  <div className="badge badge-secondary">
                    +{cart?.length || 0}
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaPlus />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaGripLines />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaBookOpen />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaPeopleGroup />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
            <li>
                <NavLink to="/dashboard/userhome">
                <FaHome />
                  User Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="//dashboard/mycart">
                <FaShoppingCart />
                  User Cart
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart />
                  My Cart
                  <div className="badge badge-secondary">
                    +{cart?.length || 0}
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaWallet />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaCalendar />
                  Reservations
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
