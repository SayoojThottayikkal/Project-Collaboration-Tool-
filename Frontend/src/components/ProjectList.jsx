import React from "react";

const ProjectList = ({ projectList, Create }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-blue-700">Projects</h2>
        <button
          onClick={Create}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          + Create Project
        </button>
      </div>
      <div className="flex gap-4 flex-wrap">
        {projectList.map((proj, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow-md w-64 hover:bg-gray-50 cursor-pointer"
          >
            <h3 className="font-bold text-blue-800">{proj.name}</h3>
            <p className="text-sm text-gray-600">{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
