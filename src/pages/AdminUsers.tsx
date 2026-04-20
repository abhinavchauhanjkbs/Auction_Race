import { Plus } from "lucide-react";
import { DashboardShell } from "@/components/DashboardShell";

const stats = [
  { label: "Total users", value: "8,421", bg: "bg-[var(--stat-pink)]", iconBg: "bg-[var(--stat-pink-icon)]" },
  { label: "Active today", value: "1,247", bg: "bg-[var(--stat-yellow)]", iconBg: "bg-[oklch(0.75_0.18_35)]" },
  { label: "VIP members", value: "384", bg: "bg-[var(--stat-green)]", iconBg: "bg-[oklch(0.65_0.2_150)]" },
  { label: "Flagged accounts", value: "7", bg: "bg-[var(--stat-purple)]", iconBg: "bg-[var(--stat-purple-icon)]" },
];

const users = [
  { name: "Simran L.", tier: "VIP", bids: "342", spent: "Rs5.4L", joined: "Jan 2024", lastActive: "2 min ago", status: "Active" },
  { name: "Nikhil P.", tier: "VIP", bids: "342", spent: "Rs5.4L", joined: "Jan 2024", lastActive: "2 min ago", status: "Active" },
  { name: "Simran L.", tier: "NEW", bids: "342", spent: "Rs5.4L", joined: "Jan 2024", lastActive: "2 min ago", status: "Active" },
  { name: "Simran L.", tier: "NEW", bids: "342", spent: "Rs5.4L", joined: "Jan 2024", lastActive: "2 min ago", status: "Active" },
  { name: "Simran L.", tier: "NEW", bids: "342", spent: "Rs5.4L", joined: "Jan 2024", lastActive: "2 min ago", status: "Active" },
  { name: "Simran L.", tier: "VIP", bids: "342", spent: "Rs5.4L", joined: "Jan 2024", lastActive: "2 min ago", status: "Active" },
  { name: "Simran L.", tier: "VIP", bids: "342", spent: "Rs5.4L", joined: "Jan 2024", lastActive: "2 min ago", status: "Active" },
  { name: "Simran L.", tier: "VIP", bids: "342", spent: "Rs5.4L", joined: "Jan 2024", lastActive: "2 min ago", status: "Active" },
  { name: "Simran L.", tier: "VIP", bids: "342", spent: "Rs5.4L", joined: "Jan 2024", lastActive: "2 min ago", status: "Active" },
  { name: "Simran L.", tier: "VIP", bids: "342", spent: "Rs5.4L", joined: "Jan 2024", lastActive: "2 min ago", status: "Active" },
];

function AdminUsers() {
  return (
    <DashboardShell active="Users" title="User Management">
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className={`${stat.bg} rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4`}>
            <div>
              <div className="text-sm text-foreground/70 mb-2">{stat.label}</div>
              <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
            </div>
            <div className={`${stat.iconBg} aspect-square h-10 w-10 sm:h-12 sm:w-12 rounded-[16px] flex-shrink-0`} />
          </div>
        ))}
      </div>

      <section className="bg-[var(--surface)] rounded-2xl p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <h2 className="text-lg sm:text-xl font-bold">User directory</h2>
          <button className="inline-flex items-center gap-2 text-[var(--brand)] font-semibold hover:opacity-80 self-start">
            <Plus className="h-4 w-4" />
            Invite Users
          </button>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="bg-[#7E000008]">
                <th className="text-center py-4 px-4 font-semibold rounded-l-lg">User</th>
                <th className="text-center py-4 px-4 font-semibold">Tier</th>
                <th className="text-center py-4 px-4 font-semibold">Bids</th>
                <th className="text-center py-4 px-4 font-semibold">Spent</th>
                <th className="text-center py-4 px-4 font-semibold">Joined</th>
                <th className="text-center py-4 px-4 font-semibold">Last Active</th>
                <th className="text-center py-4 px-4 font-semibold">Status</th>
                <th className="text-center py-4 px-4 font-semibold rounded-r-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b border-border">
                  <td className="py-4 px-4 text-center">{user.name}</td>
                  <td className="py-4 px-4 text-center">{user.tier}</td>
                  <td className="py-4 px-4 text-center">{user.bids}</td>
                  <td className="py-4 px-4 text-center">{user.spent}</td>
                  <td className="py-4 px-4 text-center">{user.joined}</td>
                  <td className="py-4 px-4 text-center">{user.lastActive}</td>
                  <td className="py-4 px-4 text-center text-emerald-600">{user.status}</td>
                  <td className="py-4 px-4 text-center font-semibold text-[var(--brand)]">View</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardShell>
  );
}

export default AdminUsers;
