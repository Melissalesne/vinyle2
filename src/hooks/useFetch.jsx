import { useState, useEffect } from "react";
import { getCookie } from "../Helpers/cookieHelper";

const useFetch = (endpoint, options = {}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://vr-api/" + endpoint;

      options.credentials = "include";
      options.headers = {
        Authorization: getCookie("vinyle_remenber"),
      };
      try {
        const resp = await fetch(url, options);
        console.log(resp);
        const textValue = await resp.text();
        setText(textValue);
        setLoading(false);
        try {
          const json = JSON.parse(textValue);
          setData(json);
        } catch (e) {
          setError(e);
        }
      } catch (e) {
        setError(e);
      }
    };
    fetchData();
  }, []);
  return { data, loading, error, text };
};
export default useFetch;
