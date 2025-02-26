import { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword); 
  };
  
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword); 
  };
  
  const [errors, setErrors] = useState({
    username: [],
    email: [],
    password: [],
    confirm_password: []
  });
  
  const validateForm = () => {
    const newErrors = {
      username: [],
      email: [],
      password: [],
      confirm_password: []
    };
  
    if (!formData.username) {
      newErrors.username.push('Username is required');
    }
    if (formData.username.length < 3) {
      newErrors.username.push('Username must be at least 3 characters');
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email) {
      newErrors.email.push('Email is required');
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email.push('Invalid email address');
    }
  
    if (!formData.password) {
      newErrors.password.push('Password is required');
    } else if (formData.password.length < 6) {
      newErrors.password.push('Password must be at least 6 characters');
    }
  
    if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password.push('Passwords do not match');
    }
  
    setErrors(newErrors);
  
    return Object.values(newErrors).every((errorArray) => errorArray.length === 0);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Signup data submitted:', formData);
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('images/Signup/background.png')" }}>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-700">Signup</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.username.length > 0 && (
              <ul className="text-red-500 text-sm">
              {errors.username.map((error, index) => (
                <li key={index}>{error}</li>
                ))}
              </ul>
            )}

          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.email.length > 0 && (
              <ul className="text-red-500 text-sm">
              {errors.email.map((error, index) => (
                <li key={index}>{error}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
            <input
              type={showPassword ? "text":"password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button 
              type="button" 
              onClick={handlePasswordToggle} 
              className="text-sm text-gray-500 mt-2 focus:outline-none">
              {showPassword ? 'Hide' : 'Show'} Password
            </button>
            {errors.password.length > 0 && (
              <ul className="text-red-500 text-sm">
              {errors.password.map((error, index) => (
                <li key={index}>{error}</li>
                ))}
              </ul>
            )}            
          </div>
          <div className="mb-6">
            <label htmlFor="confirm_password" className="block text-gray-700 font-bold mb-2">Confirm password:</label>
            <input
              type={showConfirmPassword ? "text":"password"}
              id="confirm_password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button 
              type="button" 
              onClick={handleConfirmPasswordToggle} 
              className="text-sm text-gray-500 mt-2 focus:outline-none">
              {showConfirmPassword ? 'Hide' : 'Show'} Confirm Password
            </button>
            {errors.confirm_password.length > 0 && (
              <ul className="text-red-500 text-sm">
              {errors.confirm_password.map((error, index) => (
                <li key={index}>{error}</li>
                ))}
              </ul>
            )}
          </div>
          <button type="submit" className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
