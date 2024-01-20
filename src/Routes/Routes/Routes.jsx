import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Menu from "../../pages/Menu/Menu/Menu";
import Order from "../../pages/Order/Order/Order";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import MyCart from "../../pages/Dashboard/MyCart/MyCart";
import Reservation from "../../pages/Dashboard/Reservation/Reservation";
import Payment from "../../pages/Dashboard/Payment/Payment";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import Error from "../../pages/Error/Error";
import AddItem from "../../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "../AdminRoute/AdminRoute";
import ManageItems from "../../pages/Dashboard/ManageItems/ManageItems";
import AdminHome from "../../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../../pages/Dashboard/UserHome/UserHome";
import UpdateItem from "../../pages/Dashboard/UpdateItem/UpdateItem";
import PaymentHistory from "../../pages/Dashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "userhome",
        element: <UserHome />,
      },
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "reservations",
        element: <Reservation />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },

      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },

      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      // {
      //   path: "manageItems/updateitem/:id",
      //   element: (
      //     <AdminRoute>
      //       <UpdateItem />
      //     </AdminRoute>
      //   ),
      // },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://res-server-plum.vercel.app/menu/${params.id}`),
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
