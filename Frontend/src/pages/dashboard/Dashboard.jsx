import React from "react";
import TeamMembersCard from "../../components/TeamMembersCard";

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
      <TeamMembersCard
        members={[
          { name: "Sayooj", email: "sayooj@gmail.com", role: "admin" },
          { name: "Member1", email: "member@gmail.com", role: "member" },
        ]}
        Invite={() => console.log("Invite")}
      />
    </div>
  );
}

export default Dashboard;
