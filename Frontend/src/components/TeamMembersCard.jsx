import React from "react";
import { ShieldUser, UserPlus } from "lucide-react";

const TeamMembersCard = ({ members = [], Invite }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Team Members</h3>
        <button
          onClick={Invite}
          className="text-blue-600 hover:text-blue-800"
          title="Invite Member"
        >
          <UserPlus />
        </button>
      </div>

      <div className="space-y-5">
        {members.map((member) => (
          <div key={member.email}>
            <p className="font-semibold text-gray-800 flex items-center gap-2">
              {member.name}
              {member.role === "admin" && (
                <span>
                  <ShieldUser />
                </span>
              )}
            </p>
            <p className="text-sm text-gray-500">{member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembersCard;
