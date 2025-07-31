import React, { useState, useEffect } from "react";
import landingPageImage from "../Assets/landingPageImage.webp";
import { GrLinkNext } from "react-icons/gr";

const Read = () => {
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState("");

  // Read or Get Data Function
  const getData = async () => {
    const response = await fetch(
      "https://knovator-backend-9cjh.onrender.com/api/jobs"
    );
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
      {detail ? (
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
                    Post -{" "}
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
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0284c7] hover:bg-[#0ea5e9] rounded-sm"
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
      ) : (
        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
          <svg
            className="w-16 h-16 animate-spin text-[#0284c7]"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-gray-900"
            ></path>
          </svg>
          <br />
          Loading data, please wait...
        </div>
      )}
    </div>
  );
};

export default Read;
