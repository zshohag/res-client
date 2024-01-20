import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <section className="mb-10">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      />
      <div className="grid md:grid-cols-2 gap-4 ">
        {popularItems.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
      <div className=" text-center ">
        <button className="btn btn-outline border-0 border-b-2  mt-4  ">
          View Full Menu{" "}
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
