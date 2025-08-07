import React from "react";

const CreateProjectModal = ({ project, setProject, Close, Create }) => {
  return (
    <div className="fixed inset-0  flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">
          Create New Project
        </h2>
        <form onSubmit={Create} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Name
            </label>
            <input
              type="text"
              value={project.name}
              onChange={(e) => setProject({ ...project, name: e.target.value })}
              required
              placeholder="Enter project name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={project.description}
              onChange={(e) =>
                setProject({ ...project, description: e.target.value })
              }
              required
              placeholder="Enter project description"
              className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={Close}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectModal;
