import React, { useState } from "react";

function NavBar() {
  const [login, setLogin] = useState(true);
  return (
    <div className="flex items-center justify-between bg-blue-500 p-3">
      <h1 className="text-3xl text-shadow-blue-100 font-bold">
        Project Collaboration Tool{" "}
      </h1>
      <button className="px-2  py-1 rounded bg-blue-900 cursor-pointer font-bold text-white ">
        {!login ? "Login" : "Logout"}
      </button>
    </div>
  );
}

export default NavBar;
