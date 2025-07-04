import { useState, useEffect, FC, ChangeEvent } from "react";
import axios from "axios";
import s from "./AdminPanel.module.scss";

const API_URL = "http://localhost:3000/swiperInfo";

interface CardItem {
  id: number;
  name: string;
  text: string;
  job: string;
  src: string;
  starRating: string;
  description?: string; // Optional in case it's used inconsistently
}

interface AdminPanelProps {
  onLogout: () => void;
}

const AdminPanel: FC<AdminPanelProps> = ({ onLogout }) => {
  const [items, setItems] = useState<CardItem[]>([]);
  const [form, setForm] = useState<Omit<CardItem, "id">>({
    name: "",
    text: "",
    job: "",
    src: "",
    starRating: "",
  });
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get<CardItem[]>(API_URL);
      setItems(res.data);
    };
    fetchItems();
  }, []);

  const handleSubmit = async () => {
    if (!form.name.trim()) return;

    if (editId !== null) {
      const res = await axios.put<CardItem>(`${API_URL}/${editId}`, form);
      setItems((prev) =>
        prev.map((item) => (item.id === editId ? res.data : item))
      );
    } else {
      const res = await axios.post<CardItem>(API_URL, form);
      setItems((prev) => [...prev, res.data]);
    }

    setForm({ name: "", text: "", job: "", src: "", starRating: "", });
    setEditId(null);
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (item: CardItem) => {
    setForm({
      name: item.name,
      text: item.text,
      job: item.job,
      src: item.src,
      starRating: item.starRating,
    });
    setEditId(item.id);
  };

  const handleInputChange =
    (field: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [field]: e.target.value });
    };

  return (
    <div className={s.container}>
      <button onClick={onLogout} className={s.btn}>
        Logout
      </button>
      <div className={s.panel}>
        <h2 className={s.ttl}>Admin Panel</h2>
        <input
          className={s.input}
          placeholder="Img Source"
          value={form.src}
          onChange={handleInputChange("src")}
        />
        <input
          className={s.input}
          placeholder="Name"
          value={form.name}
          onChange={handleInputChange("name")}
        />
        <textarea
          className={s.input}
          placeholder="Quote"
          value={form.text}
          onChange={handleInputChange("text")}
        />
        <input
          className={s.input}
          placeholder="Job"
          value={form.job}
          onChange={handleInputChange("job")}
        />
        <input
          className={s.input}
          placeholder="Star Rating (num)"
          value={form.starRating}
          onChange={handleInputChange("starRating")}
        />
        <button className={s.btn} onClick={handleSubmit}>
          {editId !== null ? "Update" : "Add"}
        </button>

        <ul>
          {items.map((item) => (
            <li key={item.id} className={s.item}>
              <strong>{item.name}:</strong>
              <button onClick={() => handleEdit(item)} className={s.edit}>
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className={s.delete}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
