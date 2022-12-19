import { getCookie } from "../Helpers/cookieHelper";

const doFetch = async (endpoint, options = {}) => {
  options.credentials = "include";

  options.headers = {
    Authorization: getCookie("vinyle_remenber"),
  };
  const url = "http://vr-api/" + endpoint;
  // console.log(url);
  let data = null,
    loading = true,
    error = null,
    text = null;
  try {
    const resp = await fetch(url, options);
    text = await resp.text();
    loading = false;
    try {
      data = JSON.parse(text);
      console.log(text);
    } catch (e) {
      error = e;
    }
  } catch (e) {
    error = e;
  }
  return { data, loading, error, text };
};
export default doFetch;
