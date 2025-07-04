import axios from "axios";

export const useGetData = async () => {
  try {
    const response = await axios.get(
      "https://aerovisionbackend.onrender.com/swiperInfo"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
