import { Helmet } from "react-helmet-async";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  //
  const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
  const { category } = useParams();
  //console.log(category);
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Cover title="ORDER FOOD" img={orderCoverImg} />
      <Helmet>
        <title>Bistro | Order Food</title>
      </Helmet>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="m-6 mb-10 md:w-1/3 mx-auto ">
          <TabList  >
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
        </div>
        <TabPanel>
          {" "}
          <OrderTab items={salad} />{" "}
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab items={pizza} />{" "}
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab items={soup} />{" "}
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab items={desserts} />{" "}
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab items={drinks} />{" "}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
