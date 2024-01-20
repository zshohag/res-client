import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -25, max: 25 }}
      bgImage={img}
      bgImageAlt="the menu"
      //strength={-200}
    >
      <div className="hero h-[650px] ">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="  bg-slate-950 bg-opacity-25 p-10  ">
            <h1 className="mb-5 text-5xl font-bold uppercase ">{title}</h1>
            <p className="mb-5  ">
              Would you like to try a dish?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              consequatur ipsam alias nulla eum hic voluptatum veniam dolorem
              praesentium minus?
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;

/* 

style={{
          backgroundImage: `url("${img}")`,
        }}


*/
