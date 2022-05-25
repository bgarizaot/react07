import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    setState((sta) => ({ ...sta, loading: true }));
    getGifs(category).then((res) => {
    //   setTimeout(() => {
    // }, 2000);
        setState({ data: res, loading: false });
    });
  }, [category]);

  return state;
};
