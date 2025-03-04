import { useState } from "react";
import { usePostRequest } from "../services/api"

function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const postMutation = usePostRequest();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.username || formData.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }
    if (!formData.email.includes("@")) {
      errors.email = "Invalid email address";
    }
    if (!formData.password || formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirm_password) {
      errors.confirm_password = "Passwords do not match";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }
    console.log(formData)
    postMutation.mutate(
      { url: "/signup", data: formData },
      {
        onSuccess: (data) => {
          console.log("Signup successful:", data);
          localStorage.setItem("jwtToken", data.token); 
        },
        onError: (error) => {
          console.error("Signup failed:", error);
        },
      }
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-scree">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Signup</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border rounded-lg mt-3"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border rounded-lg mt-3"
          />
          <input
            type="password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-lg mt-3"
          />
          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white rounded-lg mt-3"
            disabled={postMutation.isLoading}
          >
            {postMutation.isLoading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
  
}

export default SignupForm;
