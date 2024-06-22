import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { fetchData } from "../utils/authUtils";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ username, email, password, confirmPassword }) => {
    const success = handleInputErrors({
      username,
      email,
      password,
      confirmPassword,
    });
    if (!success) return;

    setLoading(true);
    try {
      const data = await fetchData(
        "http://localhost:5000/api/auth/signup",
        "POST",
        {
          username,
          email,
          password,
          confirmPassword,
        }
      );
      console.log("User created successfully");
      toast.success("Account created successfully");

      // Set user to local storage
      localStorage.setItem("authUser", JSON.stringify(data));
      // context
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};
export default useSignup;

function handleInputErrors({ username, email, password, confirmPassword }) {
  if (!email || !username || !password || !confirmPassword) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
