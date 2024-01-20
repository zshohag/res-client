import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuCoverImg from "../../../assets/menu/banner3.jpg";
import dessertCoverImg from "../../../assets/menu/dessert-bg.jpeg";
import soupCoverImg from "../../../assets/menu/soup-bg.jpg";
import saladCoverImg from "../../../assets/menu/salad-bg.jpg";
import pizzaCoverImg from "../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuCoverImg} title="Our Menu " />
      {/* MAIN COVER */}
      <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"} />
      {/* OFFERED MENU ITEMS */}
      <MenuCategory items={offered} />
      {/* DESSERT MENU ITEMS */}
      <MenuCategory items={desserts} title="desserts" img={dessertCoverImg} />
      {/* SOUP MENU ITEMS */}
      <MenuCategory items={soup} title="soup" img={soupCoverImg} />
      {/* SALAD MENU ITEMS */}
      <MenuCategory items={salad} title="salad" img={saladCoverImg} />
      {/* PIZZA MENU ITEMS */}
      <MenuCategory items={pizza} title="pizza" img={pizzaCoverImg} />
    </div>
  );
};

export default Menu;
