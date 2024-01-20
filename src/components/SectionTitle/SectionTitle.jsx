const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className=" mx-auto text-center w-3/12 my-4 ">
      <p className=" text-yellow-500">{subHeading}</p>
      <h2 className="border-y-2  text-3xl  p-1 m-1 ">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
