import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState();
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  const navigate = useNavigate();

  // console.log(title, company, location, type, description)

  const formHandeler = async (e) => {
    try {
      e.preventDefault();
      const validateForm = () =>{
        let errors = {}
        if (!title && !company && !location && !type && !description) errors = "Please fill all details"
        if (!title.trim()) errors.title = "Title is required*";
        if (!company.trim()) errors.company = "Company name is required*";
        if (!location.trim()) errors.location = "Location name is required*";
        if (!type.trim()) errors.type = "Select job Type*";
        if (!description.trim()) errors.description = "Description required*";
  
        setError(errors);
        return Object.keys(errors).length === 0;
      }

      if(validateForm()){
        setIsSubmitting(true)
        const addJob = { title, company, location, type, description };
        const response = await fetch("https://knovator-backend-9cjh.onrender.com/api/jobs", {
        method: "POST",
        body: JSON.stringify(addJob),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        console.log(data.error);
        setError(data.error);
      }

      if (response.ok) {
        setError("");
        setTitle("");
        setCompany("");
        setLocation("");
        setType("");
        setDescription("");
        navigate("/");
      }
      }

    } catch (error) {
      setError(error);
    }
  };


  return (
    <div className="px-4">
      <form
        onSubmit={formHandeler}
        className="mx-auto py-[50px] w-full h-full"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            // required
          />
            {error.title && <p className="text-red-500 font-semibold italic">{error.title}</p>}
          <label
            for="floating_title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Job Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            // required
          />
            {error.company && <p className="text-red-500 font-semibold italic">{error.company}</p>}
          <label
            for="floating_company"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Company Name (Ex. Knovator)
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="test"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            // required
          />
            {error.location && <p className="text-red-500 font-semibold italic">{error.location}</p>}
          <label
            for="floating_repeat_location"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Work Location
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
          >
            Job Type (Full-time / Part-time)
          </label>
          <select
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:border-gray-600 dark:focus:border-blue-500"
            // required
          >
            <option value="">Choose</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
          {error.type && <p className="text-red-500 font-semibold italic">{error.type}</p>}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5" cols="40"
            className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            // required
          />
            {error.description && <p className="text-red-500 font-semibold italic">{error.description}</p>}
          <label
            for="floating_description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Job Description
          </label>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className={`bg-[#0284c7] hover:bg-[#0ea5e9] py-3 px-6 rounded-sm ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#0D6ED6]'}`}
        >
          {isSubmitting ? `Submitting...` : `Submit`}
        </button>
      </form>
    </div>
  );
};

export default Create;
