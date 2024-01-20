import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center mt-10 ">
      <h1 className="text-8xl">
        <span className="text-rose-500">4</span>0
        <span className="text-rose-500">4</span>
        <br /> 
      </h1>
      <h4 className="text-5xl" >Page Not Found</h4>
      <div className=" text-xl mt-6">
        <Link to="/"> Go Home Page </Link>
      </div>
    </div>
  );
};

export default Error;
