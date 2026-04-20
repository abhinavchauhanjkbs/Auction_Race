import { Plus } from "lucide-react";
import { DashboardShell } from "@/components/DashboardShell";

const stats = [
  { label: "Total listings", value: "284", bg: "bg-[var(--stat-pink)]", iconBg: "bg-[var(--stat-pink-icon)]" },
  { label: "Active", value: "48", bg: "bg-[var(--stat-yellow)]", iconBg: "bg-[oklch(0.75_0.18_35)]" },
  { label: "Pending review", value: "12", bg: "bg-[var(--stat-green)]", iconBg: "bg-[oklch(0.65_0.2_150)]" },
  { label: "Sold this month", value: "93", bg: "bg-[var(--stat-purple)]", iconBg: "bg-[var(--stat-purple-icon)]" },
];

type Listing = {
  item: string;
  category: string;
  bid: string;
  bids: string;
  seller: string;
  ends: string;
  reserve: string;
  status: string;
};

const listings: Listing[] = [
  { item: "2BHK Apartment", category: "Residential", bid: "Rs38,000", bids: "138", seller: "Heritage Co.", ends: "00:18:42", reserve: "Met", status: "Live" },
  { item: "2BHK Apartment", category: "Residential", bid: "Rs38,000", bids: "71", seller: "Heritage Co.", ends: "01:04:10", reserve: "Met", status: "Live" },
  { item: "2BHK Apartment", category: "Residential", bid: "Rs38,000", bids: "51", seller: "Heritage Co.", ends: "01:04:10", reserve: "Met", status: "Live" },
  { item: "2BHK Apartment", category: "Residential", bid: "Rs38,000", bids: "51", seller: "Heritage Co.", ends: "00:18:42", reserve: "Not Met", status: "Live" },
  { item: "2BHK Apartment", category: "Residential", bid: "Rs38,000", bids: "51", seller: "Heritage Co.", ends: "00:18:42", reserve: "Not Met", status: "Ending" },
];

function AdminListings() {
  return (
    <DashboardShell active="Listings" title="Listings">
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className={`${stat.bg} rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4`}>
            <div className="min-w-0">
              <div className="text-sm text-foreground/70 mb-2">{stat.label}</div>
              <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
            </div>
            <div className={`${stat.iconBg} aspect-square h-10 w-10 sm:h-12 sm:w-12 rounded-[16px] flex-shrink-0`} />
          </div>
        ))}
      </div>

      <section className="bg-[var(--surface)] rounded-2xl p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <h2 className="text-lg sm:text-xl font-bold">All active listings</h2>
          <button className="inline-flex items-center gap-2 text-[var(--brand)] font-semibold hover:opacity-80 self-start">
            <Plus className="h-4 w-4" />
            New Auction
          </button>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="bg-[#7E000008]">
                <th className="text-center py-4 px-4 font-semibold rounded-l-lg">Item</th>
                <th className="text-center py-4 px-4 font-semibold">Category</th>
                <th className="text-center py-4 px-4 font-semibold">Current bid</th>
                <th className="text-center py-4 px-4 font-semibold">Bids</th>
                <th className="text-center py-4 px-4 font-semibold">Seller</th>
                <th className="text-center py-4 px-4 font-semibold">Ends in</th>
                <th className="text-center py-4 px-4 font-semibold">Reserve</th>
                <th className="text-center py-4 px-4 font-semibold rounded-r-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing, index) => (
                <tr key={index} className="border-b border-border">
                  <td className="py-4 px-4 text-center">{listing.item}</td>
                  <td className="py-4 px-4 text-center">{listing.category}</td>
                  <td className="py-4 px-4 text-center">{listing.bid}</td>
                  <td className="py-4 px-4 text-center">{listing.bids}</td>
                  <td className="py-4 px-4 text-center">{listing.seller}</td>
                  <td className="py-4 px-4 text-center">{listing.ends}</td>
                  <td className="py-4 px-4 text-center">{listing.reserve}</td>
                  <td className={`py-4 px-4 text-center font-semibold ${listing.status === "Live" ? "text-[oklch(0.55_0.18_150)]" : "text-[oklch(0.7_0.18_60)]"}`}>
                    {listing.status}
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

export default AdminListings;
