import React, { useState, useEffect } from "react";

const EditProfileModal = ({ isOpen, onClose, user, setUser }) => {
  const [formData, setFormData] = useState(user);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(formData);
    localStorage.setItem("user", JSON.stringify(formData));
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-6">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl transition"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          {[
            { name: "name", label: "Full Name", type: "text", placeholder: "Full Name" },
            { name: "email", label: "Email", type: "email", placeholder: "Email" },
            { name: "company", label: "Company", type: "text", placeholder: "Company" },
            { name: "role", label: "Role", type: "text", placeholder: "Role" },
          ].map((field) => (
            <div key={field.name}>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData?.[field.name] || ""}
                onChange={handleChange}
                className="w-full border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className={`px-5 py-2 rounded-xl text-white text-sm font-medium transition ${
              saved ? "bg-green-500" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {saved ? "✓ Saved!" : "Save Changes"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default EditProfileModal;