const MenuItem = ({ item }) => {
  const { name, price, recipe, image } = item;
  return (
    <div className="flex space-x-2 ">
      <img
        style={{ borderRadius: " 0 200px 200px 200px" }}
        className="w-[100px]  "
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-lg ">{name} ------------------</h3>
        <p className="text-gray-500" >{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
