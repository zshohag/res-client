import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white " >
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      />
      <div className="md:flex justify-center items-center py-24 px-24">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-4" >
          <p>
            March 20, 2023 <br />
            WHERE CAN I GET SOME? <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-2  mt-4 ">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
