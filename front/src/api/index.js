import axios from "axios";

export const getAnnonces = async () => {
  const results = await axios.get("http://localhost:9000/api/annonces");
  return results.data;
};
export const getAnnonceById = async (id) => {
  const results = await axios.get("http://localhost:9000/api/annonces/" + id);
  return results.data;
};
export const getAnnoncesByCategory = async (name) => {
  const results = await axios.get("http://localhost:9000/api/annonces/category/" + name);
  return results.data;
};
export const getCategories = async () => {
  const results = await axios.get("http://localhost:9000/api/categories");
  return results.data;
};
export const postAnnonce = async (data) => {
  await axios.post("http://localhost:9000/api/annonces/create", {
    ...data,
  });
};
export const editAnnonce = async (data, id) => {
  await axios.patch("http://localhost:9000/api/annonces/update/" + id, { ...data });
};

export const deleteAnnonce = async (id) => {
  await axios.delete("http://localhost:9000/api/annonces/delete/" + id);
};

export const postImage = async (data) => {
  await axios.post("http://localhost:9000/api/upload", data);
};
