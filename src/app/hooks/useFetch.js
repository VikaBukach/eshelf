import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (path, opt = {}) => {
  const PORT = process.env.REACT_APP_PORT || 3001;
  const REACT_APP_BACK_URL = process.env.REACT_APP_BACK_URL || "http://localhost";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async (path, { body = null, headers = {}, method = "GET", params = {} }) => {
    if (!path) {
      setLoading(false);
      return;
    }

    setLoading(true);

    const urlParams = new URLSearchParams({ ...params });

    const options =
      method.toLowerCase() == "GET".toLowerCase()
        ? {
            headers: {
              "Content-Type": "application/json",
              ...headers,
            },
            method,
          }
        : {
            headers: {
              "Content-Type": "application/json",
              ...headers,
            },
            body: JSON.stringify(body),
            method,
          };

    const url = `${REACT_APP_BACK_URL}:${PORT}/${path}${urlParams.size ? "?" + urlParams : ""}`;

    await fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!data && loading) {
      getData(path, opt);
    }
  }, [data]);

  const refetch = (path, opt) => {
    return getData(path, opt);
  };

  return { data, loading, refetch };
};
