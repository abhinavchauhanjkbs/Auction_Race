import { DashboardShell } from "@/components/DashboardShell";

const stats = [
  { label: "Revenue today", value: "Rs84,320", bg: "bg-[var(--stat-pink)]", iconBg: "bg-[var(--stat-pink-icon)]" },
  { label: "This Month", value: "Rs1.24M", bg: "bg-[var(--stat-yellow)]", iconBg: "bg-[oklch(0.75_0.18_35)]" },
  { label: "Pending payouts", value: "Rs32,100", bg: "bg-[var(--stat-green)]", iconBg: "bg-[oklch(0.65_0.2_150)]" },
  { label: "Disputes", value: "3", bg: "bg-[var(--stat-purple)]", iconBg: "bg-[var(--stat-purple-icon)]" },
];

const transactions = [
  { id: "#TXN-9821", item: "Hermès Birkin 30", buyer: "Nikhil P.", seller: "LuxeHouse", amount: "Rs18,200", fee: "Rs1,820", date: "Apr 15", status: "Cleared" },
  { id: "#TXN-9822", item: "Hermès Birkin 30", buyer: "Nikhil P.", seller: "LuxeHouse", amount: "Rs18,200", fee: "Rs1,820", date: "Apr 15", status: "Cleared" },
  { id: "#TXN-9823", item: "Hermès Birkin 30", buyer: "Nikhil P.", seller: "LuxeHouse", amount: "Rs18,200", fee: "Rs1,820", date: "Apr 15", status: "Pending" },
  { id: "#TXN-9824", item: "Hermès Birkin 30", buyer: "Nikhil P.", seller: "LuxeHouse", amount: "Rs18,200", fee: "Rs1,820", date: "Apr 15", status: "Pending" },
  { id: "#TXN-9825", item: "Hermès Birkin 30", buyer: "Nikhil P.", seller: "LuxeHouse", amount: "Rs18,200", fee: "Rs1,820", date: "Apr 15", status: "Cleared" },
];

function AdminPayments() {
  return (
    <DashboardShell active="Payments" title="Payments">
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
          <h2 className="text-lg sm:text-xl font-bold">Recent transactions</h2>
          <button className="text-[var(--brand)] font-semibold hover:opacity-80 self-start">Export CSV</button>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="bg-[#7E000008]">
                <th className="text-center py-4 px-4 font-semibold rounded-l-lg">TX ID</th>
                <th className="text-center py-4 px-4 font-semibold">Item</th>
                <th className="text-center py-4 px-4 font-semibold">Buyer</th>
                <th className="text-center py-4 px-4 font-semibold">Seller</th>
                <th className="text-center py-4 px-4 font-semibold">Amount</th>
                <th className="text-center py-4 px-4 font-semibold">Platform fee</th>
                <th className="text-center py-4 px-4 font-semibold">Date</th>
                <th className="text-center py-4 px-4 font-semibold rounded-r-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, index) => (
                <tr key={index} className="border-b border-border">
                  <td className="py-4 px-4 text-center">{txn.id}</td>
                  <td className="py-4 px-4 text-center">{txn.item}</td>
                  <td className="py-4 px-4 text-center">{txn.buyer}</td>
                  <td className="py-4 px-4 text-center">{txn.seller}</td>
                  <td className="py-4 px-4 text-center">{txn.amount}</td>
                  <td className="py-4 px-4 text-center">{txn.fee}</td>
                  <td className="py-4 px-4 text-center">{txn.date}</td>
                  <td className={`py-4 px-4 text-center font-semibold ${txn.status === "Pending" ? "text-amber-500" : "text-emerald-600"}`}>
                    {txn.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardShell>
  );
}

export default AdminPayments;
