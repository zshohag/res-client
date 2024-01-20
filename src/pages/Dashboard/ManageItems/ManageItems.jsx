import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  // DELETE SINGLE ITEM
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // DELETE API
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Menu Item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  //UPDATE TRY
  // const handleUpdate = (item) => {
  //   console.log(item.name);
  //   // fetch(`https://res-server-plum.vercel.app/menu/${item._id}`)
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     console.log("data", data);
  //   //   });
  // };

  return (
    <div className="w-full">
      <SectionTitle subHeading={"Manage All Items"} heading={"Hurry up"} />
      <div className="overflow-x-auto m-4 ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>IMAGE</th>
              <th>ITEM NAME</th>
              <th>CATEGORY</th>
              <th>PRICE</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="avatar">
                      <div className="mask mask-circle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"></div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">{item.name}</td>
                <td className="font-bold">{item.category}</td>
                <td className="font-bold">${item.price}</td>
                <td>
                  {/* <Link to={`update/${item._id}`}> */}
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <FaRegEdit />
                  </Link>

                  {/* <Link to={`updateItem/${item._id}`}>
                    <div className="flex items-center ">
                      <FaRegEdit />
                      <small>{item.name}</small>
                    </div>
                  </Link> */}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost "
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
