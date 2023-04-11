import axios from "axios";

const config = {
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    "app-id": "6367f834404ac3a49b0da62f",
  },
};

const newAxios = axios.create(config);

export const getProfiles = async () => {
  try {
    const { data } = await newAxios.get(`/user?page=1&limit=2`);
    return data;
  } catch (error) {
    return error;
  }
};
export const getPosts = async () => {
  try {
    const { data } = await newAxios.get(`/post`);
    return data;
  } catch (error) {
    return error;
  }
};
export const getComments = async () => {
  try {
    const { data } = await newAxios.get(`/comment`);
    return data;
  } catch (error) {
    return error;
  }
};
