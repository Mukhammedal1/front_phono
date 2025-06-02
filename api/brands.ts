import { toast } from "react-toastify";
import instance from "./instance";

export const getBrands = async () => {
  try {
    const res = await instance.get("/brand");
    return res.data;
  } catch (e) {
    console.error("Failed to fetch brands!");
  }
};
