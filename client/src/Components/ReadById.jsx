import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import landingPageImage from "../Assets/landingPageImage.webp";
import { IoReturnDownBack } from "react-icons/io5";


const ReadById = () => {
  // Get single Data Function
  const [detail, setDetail] = useState();
  const [error, setError] = useState("");

  const { id } = useParams();

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:2000/api/jobs/${id}`);
      const data = await response?.json();
      console.log(data);

      if (!response.ok) {
        console.log(data.error);
        setError(data.error);
      }
      if (response.ok) {
        setDetail(data);
        if (data === null) {
          setError("Sorry, Data Not Available !");
        }
      }
    } catch (error) {
      setError(
        "Something went wrong while fetching the data. Please check your internet !"
      );
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto">
      {error && (
        <div className="text-red-500 text-center py-[20px] text-4xl">
          {error}
          <div className="">
            <a
              href="/"
              className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-[#0284c7] rounded-sm"
            >
              <div className="pr-2">
                <IoReturnDownBack />
              </div>
              Back
            </a>
          </div>
        </div>
      )}
      
      <div className="py-4 px-2">
      <div className="py-6">
            <a
              href="/"
              className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-[#0284c7] rounded-sm"
            >
              <div className="pr-2">
                <IoReturnDownBack />
              </div>
              Back
            </a>
          </div>
        <div className="gap-6">
          {detail && (
            <div
              key={detail._id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img className="rounded-t-lg h-full" src={landingPageImage} alt="" />
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {detail.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Company - {detail.company}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Location - {detail.location}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Type - {detail.type}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Post -{" "}
                    {new Date(detail.createdAt).toLocaleString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Job description - {detail.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadById;