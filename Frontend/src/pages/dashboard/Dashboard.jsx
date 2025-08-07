import React, { useState } from "react";
import TeamMembersCard from "../../components/TeamMembersCard";
import ProjectList from "../../components/ProjectList";
import CreateProjectModal from "../../components/CreateProjectModal";

function Dashboard() {
  const [create, setCreate] = useState(false);
  const [project, setProject] = useState({ name: "", description: "" });
  const [projectList, setProjectList] = useState([]);

  const handleCreate = (e) => {
    e.preventDefault();
    setProjectList([...projectList, project]);
    setProject({ name: "", description: "" });
    setCreate(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">
        frontend project tool
      </h1>
      <div className="flex gap-4">
        <TeamMembersCard
          members={[
            { name: "sayooj", email: "sayooj@gmail.com", role: "admin" },
            { name: "user", email: "user@gmail.com", role: "member" },
          ]}
          Invite={() => console.log("Invite")}
        />
        <div className="flex-1">
          <ProjectList
            projectList={projectList}
            Create={() => setCreate(true)}
          />
        </div>
      </div>

      {create && (
        <CreateProjectModal
          project={project}
          setProject={setProject}
          Close={() => setCreate(false)}
          Create={handleCreate}
        />
      )}
    </div>
  );
}

export default Dashboard;
