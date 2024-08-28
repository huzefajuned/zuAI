import React from "react";
import data from "../lib/mycoursework.json"; // Import the JSON data

const MyCourseWork = () => {
  return (
    <div className=" my-10 ">
      <h1 className="text-xl  text-secondary">My Course Work</h1>
      <div className=" flex flex-col sm:flex-row  flex-wrap justify-between">
        {/* sliced and then map */}
        {/* add view all button next */}
        {data.slice(1, 3).map((course, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl  shadow-lg  my-3 w-full sm:w-[48%] flex flex-row gap-4"
          >
            <div className="info w-4/12 p-2 bg-white shadow-xl  border-gray-100 border-[2px] rounded-xl  ">
              <p className="text-gray-700 text-sm ">
                {course.fileInfo.slice(0, 150)}
              </p>
            </div>
            <div className="details  w-8/12">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <h3 className="text-md text-gray-500">{course.subTitle}</h3>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  By {course.author}
                </span>
                <span className="text-sm text-gray-600">{course.language}</span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Read Time: {course.readTime}
                </span>
                <span className="text-sm text-gray-600">
                  Word Count: {course.wordCount}
                </span>
              </div>
              <div className="mt-4">
                <span className="inline-block bg-yellow-400 text-white text-sm px-2 py-1 rounded">
                  Rating: {course.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className=" text-secondary text-center">view all</h2>
    </div>
  );
};

export default MyCourseWork;
