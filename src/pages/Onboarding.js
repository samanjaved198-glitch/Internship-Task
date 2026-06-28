import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    role: "",
    teamSize: "",
    goal: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // ✅ FIX 1: Added email format check + password min 8 chars validation
  const validateStep1 = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Full name is required.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!form.company.trim()) newErrors.company = "Company name is required.";
    if (!form.role) newErrors.role = "Please select your role.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ FIX 2: Added goal required validation on Step 3
  const validateStep3 = () => {
    const newErrors = {};
    if (!form.goal) newErrors.goal = "Please select a goal to continue.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
    else if (step === 3 && validateStep3()) setStep(4);
  };

  const steps = ["Account", "Company", "Goals"];

  // ✅ FIX 3: Progress bar now starts at 33% on step 1 (not 0%)
  const progressPercent = (step / 3) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">

        {/* Brand */}
        <h1 className="text-2xl font-bold text-indigo-600 text-center mb-6">FlowSaaS</h1>

        {/* ✅ FIX 4: Improved progress steps with tick marks for completed steps */}
        {step < 4 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              {steps.map((label, i) => {
                const stepNum = i + 1;
                const isCompleted = step > stepNum;
                const isActive = step === stepNum;

                return (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300
                        ${isCompleted
                          ? "bg-indigo-600 text-white"
                          : isActive
                          ? "bg-indigo-100 text-indigo-600 border-2 border-indigo-600"
                          : "bg-gray-100 text-gray-400"
                        }`}
                    >
                      {isCompleted ? "✓" : stepNum}
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        isActive ? "text-indigo-600" : isCompleted ? "text-indigo-400" : "text-gray-400"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Step 1 — Account */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Create your account</h2>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Min 8 characters"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <button
              onClick={handleNext}
              className="bg-indigo-600 text-white py-3 rounded-full font-semibold text-sm hover:bg-indigo-700 transition-all mt-2"
            >
              Continue →
            </button>
          </div>
        )}

        {/* Step 2 — Company */}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Tell us about your company</h2>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Company Name</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your company name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Your Role</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="">Select your role</option>
                <option>CEO / Founder</option>
                <option>Product Manager</option>
                <option>Developer</option>
                <option>Designer</option>
                <option>Marketing</option>
                <option>Other</option>
              </select>
              {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Team Size</label>
              <select
                name="teamSize"
                value={form.teamSize}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="">Select team size</option>
                <option>Just me</option>
                <option>2–5</option>
                <option>6–20</option>
                <option>21–50</option>
                <option>50+</option>
              </select>
            </div>

            <div className="flex gap-3 mt-2">
              <button
                onClick={() => setStep(1)}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-full font-semibold text-sm hover:border-indigo-600 hover:text-indigo-600 transition-all"
              >
                ← Back
              </button>
              <button
                onClick={handleNext}
                className="flex-1 bg-indigo-600 text-white py-3 rounded-full font-semibold text-sm hover:bg-indigo-700 transition-all"
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 3 — Goals */}
        {step === 3 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2">What is your main goal?</h2>
            <p className="text-sm text-gray-500 -mt-2">Select one to personalize your experience.</p>

            {/* ✅ FIX 5: Goal error message shown if none selected */}
            {errors.goal && (
              <p className="text-red-500 text-xs -mt-1">{errors.goal}</p>
            )}

            {[
              "Increase team productivity",
              "Better analytics & insights",
              "Streamline workflows",
              "Scale my business",
            ].map((goal) => (
              <button
                key={goal}
                onClick={() => {
                  setForm({ ...form, goal });
                  setErrors({ ...errors, goal: "" });
                }}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                  form.goal === goal
                    ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                    : "border-gray-200 text-gray-700 hover:border-indigo-400"
                }`}
              >
                {form.goal === goal ? "✓ " : ""}{goal}
              </button>
            ))}

            <div className="flex gap-3 mt-2">
              <button
                onClick={() => setStep(2)}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-full font-semibold text-sm hover:border-indigo-600 hover:text-indigo-600 transition-all"
              >
                ← Back
              </button>
              <button
                onClick={handleNext}
                className="flex-1 bg-indigo-600 text-white py-3 rounded-full font-semibold text-sm hover:bg-indigo-700 transition-all"
              >
                Finish →
              </button>
            </div>
          </div>
        )}

        {/* Step 4 — Success Page */}
        {step === 4 && (
          <div className="text-center py-6">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🎉</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">You're all set!</h2>
            <p className="text-gray-500 text-sm mb-2">
              Welcome to FlowSaaS, <span className="font-semibold text-indigo-600">{form.name}</span>!
            </p>
            <p className="text-gray-400 text-xs mb-8">
              Your account has been created successfully. Let's get started.
            </p>

            {/* Summary Card */}
            <div className="bg-indigo-50 rounded-2xl p-4 text-left mb-6 space-y-2">
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-gray-700">Email:</span> {form.email}
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-gray-700">Company:</span> {form.company || "—"}
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-gray-700">Role:</span> {form.role || "—"}
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-gray-700">Goal:</span> {form.goal || "—"}
              </p>
              <p className="text-xs text-gray-500">
             <span className="font-semibold text-gray-700">
              Team Size:
              </span>
           {form.teamSize || "—"}
                  </p>
            </div>
    <button
  onClick={() => {
    const userData = {
      name: form.name,
      email: form.email,
      company: form.company,
      role: form.role,
      teamSize: form.teamSize,
      goal: form.goal,
    };

    // Save user data in localStorage
    localStorage.setItem("user", JSON.stringify(userData));

    // Navigate to Dashboard
    navigate("/dashboard", {
      state: userData,
    });
  }}
  className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-indigo-700 transition-all w-full"
>
  Go to Dashboard →
</button>

          </div>
        )}

      </div>
    </div>
  );
};

export default Onboarding;