import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");

      return res.data;
    },
  });

  return (
    <div className=" w-full m-2">
      {/* <h2>Admin Home</h2> */}
      <h4 className="text-2xl pl-4">
        Welcome back , Admin ,{" "}
        <span className="text-red-400 font-semibold text-2xl ">
          {user?.displayName}
        </span>
      </h4>
      <div className="stats shadow m-3 ">
        <div className="stat">
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats.revenue}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Orders</div>
          <div className="stat-value">{stats.orders}</div>
        </div>

        <div className="stat">
          <div className="stat-title">All Users</div>
          <div className="stat-value">{stats.users}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats.products}</div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default AdminHome;
