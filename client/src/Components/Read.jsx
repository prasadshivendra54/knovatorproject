import React, { useState, useEffect } from "react";
import landingPageImage from "../Assets/landingPageImage.webp";
import { GrLinkNext } from "react-icons/gr";

const Read = () => {
  const [detail, setDetail] = useState();
  const [error, setError] = useState("");

  // Read or Get Data Function
  const getData = async () => {
    const response = await fetch("https://knovator-backend-9cjh.onrender.com/api/jobs");
    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
      setError(data.error);
    }
    if (response.ok) {
      setDetail(data);
      if (data.length === 0) {
        setError("Sorry, Data Not Available !");
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto">
        <div className="font-[200] px-8 py-4 text-start w-[100%] h-[100%]">
          <span className="relative text-white text-2xl md:text-6xl font-[100]">
            Welcome to the KnovatorJob Application.
          </span>
        </div>
      <h1 className="text-center py-[25px] text-2xl md:text-5xl font-[300]">
        Available Jobs
      </h1>
      {error && (
        <div className="text-red-500 text-center px-[20px] text-4xl">
          {error}
        </div>
      )}
      <div className="py-4 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detail?.map((e) => (
            <div
              key={e._id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <a href={`/job/${e._id}`}>
                <img className="rounded-t-lg" src={landingPageImage} alt="" />
              </a>
              <div className="p-5">
                <a href={`/job/${e._id}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {e.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Company - {e.company}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Location - {e.location}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Type - {e.type}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Post - {" "}
                  {new Date(e.createdAt).toLocaleString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
                <a
                  href={`/job/${e._id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0284c7] rounded-sm"
                >
                  Read more
                  <div className="pl-2">
                    <GrLinkNext />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Read;
