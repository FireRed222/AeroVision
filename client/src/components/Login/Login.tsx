import { useState, ChangeEvent, FC } from "react";
import axios from "axios";
import s from "./Login.module.scss";

interface LoginProps {
  setIsAdmin: (isAdmin: boolean) => void;
}

const Login: FC<LoginProps> = ({ setIsAdmin }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      alert("Please enter both username and password");
      return;
    }

    try {
      const res = await axios.get("http://localhost:3000/users", {
        params: { username, password },
      });

      if (res.data.length > 0) {
        setIsAdmin(true);
        localStorage.setItem("isAdmin", "true");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error("Login failed", err);
      alert("Error connecting to server");
    }
  };

  const handleInputChange =
    (setter: (value: string) => void) => (e: ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  return (
    <div className={s.div}>
      <div className={s.container}>
        <input
          className={s.input}
          placeholder="Username"
          value={username}
          onChange={handleInputChange(setUsername)}
        />
        <input
          className={s.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange(setPassword)}
        />
        <button className={s.btn} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
