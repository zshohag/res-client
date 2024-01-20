import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-4 my-10 ">
        {items.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
      <Link to={`/order/${title}`} >
        <div className=" text-center ">
          <button className="btn btn-outline border-0 border-b-2  mt-4 mb-6  ">
            Order Now{" "}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
