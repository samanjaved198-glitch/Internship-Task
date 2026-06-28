import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import AnalyticsCards from "./AnalyticsCards";
import RevenueChart from "./RevenueChart";
import RecentActivity from "./RecentActivity";
import UserProfile from "./UserProfile";
import EditProfileModal from "./EditProfileModal";
import { useSearch } from "../context/SearchContext";
const DashboardPreview = () => {
  const location = useLocation();
  const { search, clearSearch } = useSearch();

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) return JSON.parse(savedUser);
    return (
      location.state || {
        name: "John Doe",
        email: "john@example.com",
        company: "FlowSaaS Inc.",
        role: "Administrator",
        plan: "Professional",
        memberSince: "January 2026",
        teamSize: "10-20",
        goal: "Increase Productivity",
      }
    );
  });

  const [activeNav, setActiveNav] = useState(() => {
    const path = location.pathname;
    if (path === "/dashboard/analytics") return "Analytics";
    if (path === "/dashboard/projects") return "Projects";
    if (path === "/dashboard/team") return "Team";
    if (path === "/dashboard/settings") return "Settings";
    return "Dashboard";
  });

  // ✅ Tab switch pe search clear
  const handleNavChange = (nav) => {
    setActiveNav(nav);
    clearSearch();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Projects state
  const [projects, setProjects] = useState([
    { id: 1, name: "FlowSaaS Landing Page", status: "In Progress", deadline: "2026-07-10" },
    { id: 2, name: "BI Analytics Dashboard", status: "Completed", deadline: "2026-06-20" },
  ]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [newProject, setNewProject] = useState({ name: "", status: "In Progress", deadline: "" });

  const handleAddProject = () => {
    if (!newProject.name.trim()) return;
    setProjects([...projects, { id: Date.now(), ...newProject }]);
    setNewProject({ name: "", status: "In Progress", deadline: "" });
    setShowProjectForm(false);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  // Team state
  const [members, setMembers] = useState([
    { id: 1, name: "Saman Javed", role: "Developer", email: "saman@example.com" },
    { id: 2, name: "Ali Hassan", role: "Designer", email: "ali@example.com" },
  ]);
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [newMember, setNewMember] = useState({ name: "", role: "", email: "" });

  const handleInviteMember = () => {
    if (!newMember.name.trim() || !newMember.email.trim()) return;
    setMembers([...members, { id: Date.now(), ...newMember }]);
    setNewMember({ name: "", role: "", email: "" });
    setShowInviteForm(false);
  };

  const handleRemoveMember = (id) => {
    setMembers(members.filter((m) => m.id !== id));
  };

  const statusColor = (status) => {
    if (status === "Completed") return "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400";
    if (status === "In Progress") return "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400";
    return "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400";
  };

  // ✅ Search filters
  const filteredProjects = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.status.toLowerCase().includes(search.toLowerCase())
  );

  const filteredMembers = members.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.role.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Search banner
  const SearchBanner = () =>
    search.trim() ? (
      <div className="bg-indigo-50 dark:bg-indigo-900 border border-indigo-200 dark:border-indigo-700 rounded-xl px-4 py-3 text-sm text-indigo-700 dark:text-indigo-300 font-medium">
        🔍 Showing results for: <span className="font-bold">"{search}"</span>
      </div>
    ) : null;

  const renderContent = () => {
    switch (activeNav) {

      case "Analytics":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h2>
            <SearchBanner />
            <AnalyticsCards search={search} />
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <RevenueChart />
            </div>
          </div>
        );

      case "Projects":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
              <button
                onClick={() => setShowProjectForm(true)}
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
              >
                + New Project
              </button>
            </div>

            <SearchBanner />

            {showProjectForm && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-indigo-200 dark:border-indigo-700 space-y-4">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">New Project</h3>
                <input
                  type="text"
                  placeholder="Project name"
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <select
                  value={newProject.status}
                  onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>In Progress</option>
                  <option>Completed</option>
                  <option>On Hold</option>
                </select>
                <input
                  type="date"
                  value={newProject.deadline}
                  onChange={(e) => setNewProject({ ...newProject, deadline: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex gap-3">
                  <button onClick={handleAddProject} className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
                    Add Project
                  </button>
                  <button onClick={() => setShowProjectForm(false)} className="flex-1 py-3 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              {filteredProjects.length === 0 ? (
                <div className="p-10 text-center">
                  <p className="text-5xl mb-4">📁</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {search ? `No projects found for "${search}"` : "No projects yet. Create your first project!"}
                  </p>
                </div>
              ) : (
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
                    <tr>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 dark:text-gray-400">Project Name</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 dark:text-gray-400">Status</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 dark:text-gray-400">Deadline</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 dark:text-gray-400">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProjects.map((project) => (
                      <tr key={project.id} className="border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{project.name}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">{project.deadline || "—"}</td>
                        <td className="px-6 py-4">
                          <button onClick={() => handleDeleteProject(project.id)} className="text-red-500 hover:text-red-700 text-sm font-medium transition">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        );

      case "Team":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Team</h2>
              <button
                onClick={() => setShowInviteForm(true)}
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
              >
                + Invite Member
              </button>
            </div>

            <SearchBanner />

            {showInviteForm && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-indigo-200 dark:border-indigo-700 space-y-4">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Invite Team Member</h3>
                <input type="text" placeholder="Full name" value={newMember.name} onChange={(e) => setNewMember({ ...newMember, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <input type="email" placeholder="Email address" value={newMember.email} onChange={(e) => setNewMember({ ...newMember, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <input type="text" placeholder="Role (e.g. Designer, Developer)" value={newMember.role} onChange={(e) => setNewMember({ ...newMember, role: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <div className="flex gap-3">
                  <button onClick={handleInviteMember} className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">Send Invite</button>
                  <button onClick={() => setShowInviteForm(false)} className="flex-1 py-3 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition">Cancel</button>
                </div>
              </div>
            )}

            {filteredMembers.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 text-center border border-gray-100 dark:border-gray-700">
                <p className="text-5xl mb-4">👥</p>
                <p className="text-gray-500 dark:text-gray-400">
                  {search ? `No members found for "${search}"` : "No team members yet."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredMembers.map((member) => (
                  <div key={member.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-5 border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {member.name.split(" ").map((w) => w[0]).join("").substring(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white">{member.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{member.role || "Member"}</p>
                      <p className="text-xs text-indigo-500 mt-0.5">{member.email}</p>
                    </div>
                    <button onClick={() => handleRemoveMember(member.id)} className="text-red-400 hover:text-red-600 text-sm font-medium transition">
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case "Settings":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <UserProfile user={user} setIsModalOpen={setIsModalOpen} />
            </div>
          </div>
        );

      // ✅ Default Dashboard — RecentActivity aur AnalyticsCards dono search karte hain
      default:
        return (
          <div className="space-y-6">
            <SearchBanner />
            <AnalyticsCards search={search} />
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <RevenueChart />
            </div>
            <RecentActivity />
            <UserProfile user={user} setIsModalOpen={setIsModalOpen} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex transition-colors duration-300">
      {/* ✅ handleNavChange — tab switch pe search clear hoga */}
      <Sidebar activeNav={activeNav} setActiveNav={handleNavChange} />
      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900">
        <TopNavbar user={user} />
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={user}
        setUser={setUser}
      />
    </div>
  );
};

export default DashboardPreview;