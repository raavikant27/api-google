import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyAT_XF49XlkDaBXt8GkvYck4aL442qw_co",
  cx: "028f2647b9d944115",
};
export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
