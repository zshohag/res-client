import { useQuery } from "@tanstack/react-query";
//import { useEffect, useState } from "react";

const useMenu = () => {
  // OLD WAY
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://res-server-plum.vercel.app/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);
  // return [menu,loading]

  // NEW WAY
  const {
    data: menu = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"], // NOT DEPENDED WITH ANY THING
    queryFn: async () => {
      const res = await fetch(`https://res-server-plum.vercel.app/menu`);
      console.log(res);
      return res.json();
    },
  });

  return [menu, loading, refetch];
};

export default useMenu;
