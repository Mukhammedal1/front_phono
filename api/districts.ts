import { toast } from "react-toastify";
import instance from "./instance";

export const getDistrict = async () => {
  try {
    const res = await instance.get("/district");
    return res.data;
  } catch (e) {
    console.error("Failed to fetch district!");
  }
};
