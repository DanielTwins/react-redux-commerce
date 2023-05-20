import { useEffect, useState } from "react";
import axios from "axios";

//? make the fetch API call by creating this custom useFetch hook 
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  // reuse the fetch API call - function that triggers the API call fetchData
  const refetch = () => {
    fetchData(); // API call making the same steps as above
  };

  // return and export the states to use them in different components
  return { data, loading, error, refetch };
}

export default useFetch;
