import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
const useCart = () => {
  //const { user } = useContext(AuthContext);
  const { user, loading } = useAuth();

  //const token = localStorage.getItem("access-token");
  const axiosSecure = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    // queryFn: async () => {
    //   const response = await fetch(
    //     `https://res-server-plum.vercel.app/carts?email=${user?.email}`,{
    //       headers : {
    //         authorization : `bearer ${token}`
    //       }
    //     }
    //   );
    //   return response.json();
    // },
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      console.log("res FROM AXIOS", res);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
