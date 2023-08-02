import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [datas, Setdata] = useState();
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => Setdata(data));
  }, [url]);
  return [datas];
};

export default useFetch;
