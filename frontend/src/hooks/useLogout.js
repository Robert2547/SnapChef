import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { fetchData } from "../utils/authUtils";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    setLoading(true);
    try {
      const data = await fetchData("/api/auth/logout", "POST");
      if (!data) throw new Error("Failed to logout");
      
      console.log("User logged out successfully");
      toast.success("Logged out successfully");

      // Remove user from local storage
      localStorage.removeItem("authUser");
      setAuthUser(null); // Remove user from context
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  return { loading, logout };
};

export default useLogout;
