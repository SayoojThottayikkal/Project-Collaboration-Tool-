import React, { useState } from "react";

function AuthPage() {
  const [login, setLogin] = useState(true);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.value]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventdefalut;
  };
  return (
    <div>
      <img src="" alt="" />
      <div className="p-4 max-w-md mx-auto mt-5 sm:mt-20 bg-gray-200 shadow-xl rounded-lg ">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {login ? "Login" : "Register"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border rounded p-2"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border rounded p-2"
          />

          {!login && (
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full border rounded p-2"
            />
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 w-full"
          >
            {login ? "Login" : "Register"}
          </button>
        </form>

        <p className="mt-4 text-center">
          {login ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setLogin(!login)}
            className="text-white underline ml-2 bg-black py-2  px-3 rounded "
          >
            {login ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
