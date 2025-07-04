import { useState, useEffect } from "react";
import AdminPanel from "../../components/AdminPanel/AdminPanel";
import Login from "../../components/Login/Login";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdmin");
    if (loggedIn === "true") setIsAdmin(true);
  }, []);

  const handleLogin = () => {
    setIsAdmin(true);
    localStorage.setItem("isAdmin", "true");
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
  };

  return isAdmin ? <AdminPanel onLogout={handleLogout}/> : <Login setIsAdmin={handleLogin} />;
};

export default Admin;
