import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    setLoading(true);
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

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
