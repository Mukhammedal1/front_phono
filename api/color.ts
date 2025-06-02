import { toast } from "react-toastify";
import instance from "./instance";

interface Color {
  name: string;
  code: string;
}



export const getColors = async () => {
  try {
    const res = await instance.get("/color");
    return res.data;
  } catch (e) {
    console.error("Failed to fetch color!");
  }
};