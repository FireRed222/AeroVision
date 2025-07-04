import axios from "axios";

export const useGetData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/swiperInfo");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
