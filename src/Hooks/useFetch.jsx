import { useState, useEffect } from "react";

const useFetch = (url, category = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const req = await fetch(url);

      if (!req.ok) {
        throw new Error("Hatolik yuz berdi !");
      }
      const data = await req.json();
      if (category) {
        filterData(category, data.menu);
      } else {
        setData(data.menu);
      }
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  const filterData = (cat, items) => {
    const filteredData = items.filter((item) => {
      return item.category === cat;
    });
    setData(filteredData);
  };

  useEffect(() => {
    getData();
  }, [url, category]);

  return { data, loading, error };
};

export default useFetch;
