import API from "./API";

export const afficherConcoursID = async () => {
  return await API.get("admin/afficherConcours");
};
