<div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn font-bold "
                      onClick={() =>
                        document.getElementById("modal").showModal()
                      }
                    >
                      {/* <Link to="/dashboard/updateItem">
                      </Link> */}
                      <Link to="/dashboard/updateItem">
                      <FaRegEdit />
                      </Link>
                      {/* <FaRegEdit /> */}
                    </button>
                    <dialog
                      id="modal"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        {/* <img src={item.image} alt="" /> */}
                        {/* <input
                          defaultValue={item.name}
                          type="text"
                          placeholder="Recipe Name"
                          className="input input-bordered hover:input-bordered w-full m-2 "
                        />

                        <input
                          defaultValue={item.category}
                          type="text"
                          placeholder="Category"
                          className="input input-bordered hover:input-bordered w-full m-2"
                        />
                        <textarea
                          defaultValue={item.recipe}
                          className="textarea textarea-bordered h-24 w-full"
                          placeholder="Recipe Details"
                        ></textarea>

                        <input
                          defaultValue={item.price}
                          type="text"
                          placeholder="Category"
                          className="input input-bordered hover:input-bordered w-full m-2"
                        /> */}

                        {/* <form onSubmit={handleSubmit(onSubmit)}>
                          <label className="form-control w-full ">
                            <div className="label">
                              <span className="label-text font-semibold">
                                Recipe Name*
                              </span>
                            </div>
                            <input
                              defaultValue={item.name}
                              type="text"
                              placeholder="Recipe Name"
                              className="input w-full "
                            />
                          </label>
                          <div className="flex">
                            <label className="form-control w-full ">
                              <div className="label">
                                <span className="label-text font-semibold ">
                                  Category*
                                </span>
                              </div>
                              <select
                                defaultValue={item.category}
                                className="select"
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
                                <span className="label-text font-semibold">
                                  Price{" "}
                                </span>
                              </div>
                              <input
                                defaultValue={item.price}
                                type="number"
                                placeholder="Type here"
                                className="input w-full "
                              />
                            </label>
                          </div>
                          <label className="form-control">
                            <div className="label">
                              <span className="label-text">Recipe Details</span>
                            </div>
                            <textarea
                              defaultValue={item.recipe}
                              className="textarea  h-24"
                              placeholder="Recipe Details"
                            ></textarea>
                          </label>

                          <label className="form-control w-full ">
                            <div className="label">
                              <span className="label-text">Upload Image</span>
                            </div>
                            <input
                              // defaultValue={item.image}
                              type="file"
                              className="file-input file-input-bordered w-full max-w-xs "
                            />
                          </label>
                          <input
                            className="btn btn-sm mt-6 "
                            type="submit"
                            value="UPDATE ITEM"
                          />
                        </form> */}

                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>



*/