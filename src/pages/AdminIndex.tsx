import { PieChart as PieIcon, Upload } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import icon3 from "@/assets/icon-3.png";
import icon4 from "@/assets/icon-4.png";
import icon5 from "@/assets/icon-5.png";
import icon6 from "@/assets/icon-6.png";
import { DashboardShell } from "@/components/DashboardShell";

const revenueData = [
  { m: "Jan", v: 12 }, { m: "Feb", v: 13 }, { m: "Mar", v: 11 },
  { m: "Apr", v: 22 }, { m: "May", v: 6 }, { m: "Jun", v: 11 },
  { m: "Jul", v: 16 }, { m: "Aug", v: 10 }, { m: "Sep", v: 6 },
  { m: "Oct", v: 12 }, { m: "Nov", v: 18 }, { m: "Dec", v: 16 },
];

const breakdownData = [
  { x: 1, last: 50, this: 70 }, { x: 2, last: 35, this: 60 },
  { x: 3, last: 30, this: 65 }, { x: 4, last: 45, this: 55 },
  { x: 5, last: 40, this: 70 }, { x: 6, last: 50, this: 60 },
  { x: 7, last: 70, this: 90 },
];

const stats = [
  { label: "Total Users", value: "12,450", delta: "+8% from yesterday", bg: "bg-[var(--stat-pink)]", iconBg: "bg-[var(--stat-pink-icon)]", icon: icon3 },
  { label: "Live Auctions", value: "8", delta: "+5% from yesterday", bg: "bg-[var(--stat-yellow)]", iconBg: "bg-[var(--stat-yellow-icon)]", icon: icon4 },
  { label: "Total Revenue", value: "Rs 5.45L", delta: "+1,2% from yesterday", bg: "bg-[var(--stat-green)]", iconBg: "bg-[var(--stat-green-icon)]", icon: icon5 },
  { label: "Pending KYC", value: "12,450", delta: "0,5% from yesterday", bg: "bg-[var(--stat-purple)]", iconBg: "bg-[var(--stat-purple-icon)]", icon: icon6 },
];

const auctions = [
  { item: "BMW 4 series ext", bid: "Rachit thapa", bids: "Rs 30,000", ends: "Rs 30,000", status: "Live" },
  { item: "BMW 4 series ext", bid: "Rachit thapa", bids: "Rs 30,000", ends: "Rs 30,000", status: "Live" },
  { item: "BMW 4 series ext", bid: "Rachit thapa", bids: "Rs 30,000", ends: "Rs 30,000", status: "Live" },
];

function AdminIndex() {
  return (
    <DashboardShell active="Dashboard" title="Dashboard" showBell>
      <div className="grid grid-cols-12 gap-4 sm:gap-6">
        {/* Performance */}
        <section className="col-span-12 xl:col-span-9 bg-[var(--surface)] rounded-2xl p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[oklch(0.25_0.08_265)]">Performance Overview</h2>
              <p className="text-sm text-muted-foreground mt-1">Track key platform metrics and performance</p>
            </div>
            <button className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted">
              <Upload className="h-4 w-4" />
              Export
            </button>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className={`${s.bg} rounded-2xl p-5`}>
                <div className={`${s.iconBg} aspect-square h-10 w-10 sm:h-12 sm:w-12 rounded-[16px] flex-shrink-0 flex items-center justify-center mb-4`}>
                  <img src={s.icon} alt="" className="h-5 w-5 brightness-0 invert" />
                </div>
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-sm text-foreground/80 mt-1">{s.label}</div>
                <div className="text-xs text-[oklch(0.5_0.18_240)] mt-3">{s.delta}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Activity feed */}
        <aside className="col-span-12 xl:col-span-3 bg-[var(--surface)] rounded-2xl p-4 sm:p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Activity feed</h3>
          <ul className="space-y-3 text-sm list-disc list-inside text-foreground/90">
            <li>Simran L. bid Rs42,500 on BMW Q5</li>
            <li>Hermès Birkin sold to Nikhil P. for $18,200</li>
            <li>New user Aarav M. verified and joined</li>
            <li>Simran L. bid Rs42,500 on BMW Q5</li>
            <li>Payment $9,800 confirmed for Basquiat</li>
          </ul>
        </aside>

        {/* Total Revenue */}
        <section className="col-span-12 xl:col-span-8 bg-[var(--surface)] rounded-2xl p-4 sm:p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Total Revenue</h3>
          <div className="h-56 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} barSize={18}>
                <CartesianGrid vertical={false} stroke="oklch(0.92 0.01 250)" />
                <XAxis dataKey="m" axisLine={false} tickLine={false} tick={{ fill: "oklch(0.55 0.02 250)", fontSize: 12 }} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "oklch(0.55 0.02 250)", fontSize: 12 }}
                  tickFormatter={(v) => `${v}k`}
                  domain={[0, 25]}
                  ticks={[0, 5, 10, 15, 20, 25]}
                />
                <Bar dataKey="v" fill="var(--chart-bar)" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Revenue Breakdown */}
        <section className="col-span-12 xl:col-span-4 bg-[var(--surface)] rounded-2xl p-4 sm:p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Revenue Breakdown</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={breakdownData}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--chart-line-1)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--chart-line-1)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--chart-line-2)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--chart-line-2)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="last" stroke="var(--chart-line-1)" fill="url(#g1)" strokeWidth={2} dot={{ r: 3, fill: "var(--chart-line-1)" }} />
                <Area type="monotone" dataKey="this" stroke="var(--chart-line-2)" fill="url(#g2)" strokeWidth={2} dot={{ r: 3, fill: "var(--chart-line-2)" }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-around mt-4 text-sm">
            <div className="text-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-[var(--chart-line-1)]" /> Last Month
              </div>
              <div className="font-semibold mt-1">Rs3,004</div>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-[var(--chart-line-2)]" /> This Month
              </div>
              <div className="font-semibold mt-1">Rs4,504</div>
            </div>
          </div>
        </section>

        {/* Live auction monitor */}
        <section className="col-span-12 bg-[var(--surface)] rounded-2xl p-4 sm:p-6 shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Live auction monitor</h3>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-[var(--stat-pink)]/60">
                  <th className="text-center py-4 px-4 sm:px-6 font-semibold rounded-l-lg">Item</th>
                  <th className="text-center py-4 px-4 sm:px-6 font-semibold">Bid</th>
                  <th className="text-center py-4 px-4 sm:px-6 font-semibold">Bids</th>
                  <th className="text-center py-4 px-4 sm:px-6 font-semibold">Ends in</th>
                  <th className="text-center py-4 px-4 sm:px-6 font-semibold rounded-r-lg">Status</th>
                </tr>
              </thead>
              <tbody>
                {auctions.map((a, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="py-4 px-4 sm:px-6 text-center">{a.item}</td>
                    <td className="py-4 px-4 sm:px-6 text-center">{a.bid}</td>
                    <td className="py-4 px-4 sm:px-6 text-center">{a.bids}</td>
                    <td className="py-4 px-4 sm:px-6 text-center">{a.ends}</td>
                    <td className="py-4 px-4 sm:px-6 text-center">
                      <span className="px-3 py-1 rounded-full bg-[var(--stat-green)] text-[oklch(0.4_0.15_155)] text-xs font-semibold whitespace-nowrap">
                        {a.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      {/* Unused PieIcon retained for type-safe nav imports */}
      <span className="hidden"><PieIcon /></span>
    </DashboardShell>
  );
}

export default AdminIndex;