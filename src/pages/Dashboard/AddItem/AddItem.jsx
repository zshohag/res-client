import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItems = () => {
  const axiosSecure = useAxiosSecure();
  //
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    // UPLOADING IMAGE TO IMAGEBB
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        const imgURL = imgResponse.data.display_url;
        const { name, price, category, recipe } = data;
        const newItem = {
          name,
          price: parseFloat(price),
          category,
          recipe,
          image: imgURL,
        };
        console.log(newItem);
        axiosSecure.post("/menu", newItem).then((data) => {
          console.log("AFTER POSTING NEW MENU ITEM ", data.data);
          if (data.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food item created successfully   ",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          }
        });
      });
  };

  return (
    <div className="w-full px-10 ">
      <SectionTitle subHeading={"What's new"} heading={"Add an item"} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">Recipe Name*</span>
            </div>
            <input
              type="text"
              placeholder="Recipe Name"
              className="input w-full "
              {...register("name", { required: true, maxLength: 80 })}
            />
          </label>
          <div className="flex">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold ">Category*</span>
              </div>
              <select
                defaultValue="Pick One"
                className="select"
                {...register("category", { required: true })}
              >
                <option disabled>Pick One</option>
                <option>popular</option>
                <option>salad </option>
                <option>drinks</option>
                <option>dessert</option>
                <option>soup</option>
                <option>pizza</option>
              </select>
            </label>

            <label className="form-control w-full ml-5 ">
              <div className="label">
                <span className="label-text font-semibold">Price </span>
              </div>
              <input
                type="number"
                placeholder="Type here"
                className="input w-full "
                {...register("price", { required: true })}
              />
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              className="textarea  h-24"
              placeholder="Recipe Details"
              {...register("recipe", { required: true })}
            ></textarea>
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Upload Image</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs "
              {...register("image", { required: true })}
            />
          </label>
          <input className="btn btn-sm mt-6 " type="submit" value="ADD ITEM" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
