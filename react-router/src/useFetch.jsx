import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return {data,loading,error}

;
};

export default useFetch;
