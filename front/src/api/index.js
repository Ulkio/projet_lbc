import axios from "axios";
import { baseURL } from "./config";
export const getAnnonces = async () => {
  const results = await axios.get(baseURL + "/api/annonces");
  return results.data;
};
export const getAnnonceById = async (id) => {
  const results = await axios.get(baseURL + "/api/annonces/" + id);
  console.log(results.data);
  return results.data;
};
export const getAnnoncesByCategory = async (name) => {
  const results = await axios.get(baseURL + "/api/annonces/category/" + name);
  return results.data;
};
export const getCategories = async () => {
  const results = await axios.get(baseURL + "/api/categories");
  return results.data;
};
export const postAnnonce = async (data) => {
  await axios.post(baseURL + "/api/annonces/create", {
    ...data,
  });
};
export const editAnnonce = async (data, id) => {
  await axios.patch(baseURL + "/api/annonces/update/" + id, { ...data });
};

export const deleteAnnonce = async (id) => {
  await axios.delete(baseURL + "/api/annonces/delete/" + id);
};

export const postImage = async (data) => {
  await axios.post(baseURL + "/api/upload", data);
};
