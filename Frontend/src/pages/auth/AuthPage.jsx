import React, { useState } from "react";
import image1 from "../../assets/network.jpg";

function AuthPage() {
  const [login, setLogin] = useState(true);
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className=" bg-gray-400 bg-opacity-25 p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {login ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
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
            className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600"
          >
            {login ? "Login" : "Register"}
          </button>
        </form>

        <p className="mt-4 text-center">
          {login ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            onClick={() => setLogin(!login)}
            className="text-blue-700 underline ml-2"
          >
            {login ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
