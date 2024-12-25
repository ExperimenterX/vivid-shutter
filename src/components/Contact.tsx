import React, { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking Information: ${JSON.stringify(form)}`);
  };

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-shadow-md">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:shadow-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
