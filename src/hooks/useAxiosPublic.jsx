import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://res-server-plum.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
