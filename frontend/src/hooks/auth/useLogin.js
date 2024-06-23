import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { fetchData } from "../../utils/authUtils";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
    setLoading(true);
    try {
      const data = await fetchData("/api/auth/login", "POST", {
        username,
        password,
      });

      toast.success("Login successful");
      localStorage.setItem("authUser", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.log(error);
      toast.error("Login failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;
