import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BaseUrl from "../const";

const SignupForm = () => {

    const [btnText, setbtnText] = useState("Sign Up");
  

  const indianStates = {
    "Andhra Pradesh": "AP",
    "Arunachal Pradesh": "AR",
    Assam: "AS",
    Bihar: "BR",
    Chhattisgarh: "CG",
    Goa: "GA",
    Gujarat: "GJ",
    Haryana: "HR",
    "Himachal Pradesh": "HP",
    Jharkhand: "JH",
    Karnataka: "KA",
    Kerala: "KL",
    "Madhya Pradesh": "MP",
    Maharashtra: "MH",
    Manipur: "MN",
    Meghalaya: "ML",
    Mizoram: "MZ",
    Nagaland: "NL",
    Odisha: "OD",
    Punjab: "PB",
    Rajasthan: "RJ",
    Sikkim: "SK",
    "Tamil Nadu": "TN",
    Telangana: "TG",
    Tripura: "TR",
    "Uttar Pradesh": "UP",
    Uttarakhand: "UK",
    "West Bengal": "WB",
  };

  const [filteredStates, setFilteredStates] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    phone:"",
    gender:"",
    city:"",
    state:"",
    collegeName:"",
    collegeId:"",
    department:"",
    abbrivation :""
  });

  const [success, setSuccess] = useState(null);

  const navigate = useNavigate(); // React Router hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleStateChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, state: value });

    if (value) {
      // Filter states based on user input
      const matches = Object.keys(indianStates).filter((state) =>
        state.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredStates(matches);
      setShowDropdown(true);
    } else {
      setFilteredStates([]);
      setShowDropdown(false);
    }
  };

  const handleSelectState = (state) => {
    setFormData({
      ...formData,
      state: state,
      abbrivation: indianStates[state], // Save abbreviation
    });
    setShowDropdown(false); // Close dropdown after selection
  };


   // Handle form submission
   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setbtnText("Signing Up...");
      const response = await fetch(`${BaseUrl}/api/user/SaRegister`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
        body: JSON.stringify(formData),
      });
      // console.log(formData)
      const data = await response.json();
  
      // console.log("Response:", data);
      if (response.ok) {
        setSuccess("User created successfully.");
        console.log("SA Registered successfully", data)

    // Save user data along with expiry time in localStorage
    localStorage.setItem('CompositSaData', JSON.stringify({ ...data}));     
    localStorage.setItem('Satoken', data.token); 
    setbtnText("Sign Up");
    navigate("/");
    window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error.message);
      setbtnText("Sign Up");
    }
  };



  return (
    <>
  
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center mt-20"
        style={{
          backgroundImage: "",
        }}
      >
        <div className="w-[420px] bg-black bg-opacity-2 border-2 border-white border-opacity-20 backdrop-blur-md shadow-md text-white p-8 rounded-lg mt-10">
          <form action="" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

            {/* Full Name */}
            <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-user absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

            {/* Email */}
            <div className="relative w-full h-12 mb-8">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

            {/* Password */}
            <div className="relative w-full h-12 mb-8">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-lock-alt absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

             {/* Phone */}
             <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone No."
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

             {/* Gender */}
             <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Gender"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

             {/* CollegeName */}
             <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                placeholder="College Name"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

             {/* CollegeId */}
             <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="collegeId"
                value={formData.collegeId}
                onChange={handleChange}
                placeholder="College ID"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

             {/* Department */}
             <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Department"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

             {/* City */}
             <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

             {/* State */}
             {/* <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div> */}

<div className="relative w-full h-12 mb-16">
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleStateChange}
        placeholder="State"
        className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
      />
      <i className="bx bxs-map-pin absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
      {/* Dropdown */}
      {showDropdown && filteredStates.length > 0 && (
        <ul className="absolute left-0 w-full bg-gray-800 border border-gray-600 mt-2 rounded-md max-h-48 overflow-y-auto z-10">
          {filteredStates.map((state, index) => (
            <li
              key={index}
              onClick={() => handleSelectState(state)}
              className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
            >
              {state}
            </li>
          ))}
        </ul>
      )}

      {/* Display selected state and abbreviation */}
      {/* {formData.state && (
        <div className="mt-4 text-white">
          <p>
            Selected State: <strong>{formData.state}</strong>
          </p>
          <p>
            Abbreviation: <strong>{formData.abbreviation}</strong>
          </p>
        </div>
      )} */}
    </div>



            {/* Confirm Password */}
            {/* <div className="relative w-full h-12 mb-6">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-lock-alt absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div> */}

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full h-12 bg-white text-gray-800 font-semibold rounded-full shadow-md hover:bg-opacity-10 hover:text-white transition duration-300"
            >
              {btnText}
            </button>

            {/* Login Link */}
            <div className="text-sm text-center mt-6">
              <p>
                Already have an account? <br />
                <Link
                  to={"/login"}
                  className="font-semibold text-lg hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
