import { toast } from "react-toastify";
import instance from "./instance";

export const getCurrency = async () => {
  try {
    const res = await instance.get("/currency");
    return res.data;
  } catch (e) {
    console.error("Failed to fetch currency!");
  }
};
