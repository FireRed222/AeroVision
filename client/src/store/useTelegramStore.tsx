import { create } from "zustand";
import axios from "axios";

// Define the types for the store's state
interface TelegramStore {
  name: string;
  email: string;
  message: string;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  setName: (name: string) => void;
  setSurname: (email: string) => void;
  setMessage: (message: string) => void;
  sendTelegram: (data: {
    name: string;
    email: string;
    text: string;
  }) => Promise<void>;
}

// Create the Zustand store with proper typing
const useTelegramStore = create<TelegramStore>((set) => ({
  name: "",
  email: "",
  message: "",
  isLoading: false,
  error: null,
  success: false,

  setName: (name) => set({ name }),
  setSurname: (email) => set({ email }),
  setMessage: (message) => set({ message }),

  sendTelegram: async (data) => {
    const { name, email, text } = data;

    if (!name || !email || text === "") {
      return set({ error: "Please fill in all fields" });
    }

    const message = `Name: ${name}\nEmail: ${email}\nMessage: ${text}`;
    const token = "7943037082:AAEzDHs68E3TrccqIzC9NRzJ7rKy9VC1f1Q"; // Replace with your bot's token
    const chatID = "-4741975038"; // Replace with your chat ID
    const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;

    const dataTel = {
      chat_id: chatID,
      text: message,
    };

    set({ isLoading: true, error: null, success: false });

    try {
      await axios.post(urlApi, dataTel);
      set({ success: true, isLoading: false });
    } catch (error) {
      console.error(error);
      set({ error: "Failed to send message", isLoading: false });
    }
  },
}));

export default useTelegramStore;
