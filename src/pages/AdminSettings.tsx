import { useState } from "react";
import { DashboardShell } from "@/components/DashboardShell";
import { Switch } from "@/components/ui/switch";

function AdminSettings() {
  const [maintenanceMode, setMaintenanceMode] = useState(true);
  const [autoExtend, setAutoExtend] = useState(true);
  const [reserveVisible, setReserveVisible] = useState(true);
  const [kycRequired, setKycRequired] = useState(true);

  return (
    <DashboardShell active="Settings" title="Settings">
      <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <div className="space-y-6">
          <section className="rounded-3xl border border-border bg-[var(--surface)] p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Admin Profile</h2>
                <p className="text-sm text-muted-foreground">Update your account details and settings</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  defaultValue="EstateAuct Admin"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  defaultValue="support@estateauct.in"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <input
                  type="text"
                  defaultValue="INR (₹)"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Time Zone</label>
                <input
                  type="text"
                  defaultValue="IST (UTC+5:30)"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button className="inline-flex justify-center rounded-2xl border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-muted">
                Cancel
              </button>
              <button className="inline-flex justify-center rounded-2xl bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                Save Changes
              </button>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-[var(--surface)] p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Security</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Current Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">New Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button className="inline-flex justify-center rounded-2xl border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-muted">
                Cancel
              </button>
              <button className="inline-flex justify-center rounded-2xl bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                Update Password
              </button>
            </div>
          </section>
        </div>

        <aside className="rounded-3xl border border-border bg-[var(--surface)] p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Platform settings</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 rounded-3xl border border-border bg-background p-4">
              <div>
                <h3 className="text-sm font-semibold">Maintenance mode</h3>
                <p className="text-sm text-muted-foreground">Disables bidding platform</p>
              </div>
              <Switch checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
            </div>
            <div className="flex items-center justify-between gap-4 rounded-3xl border border-border bg-background p-4">
              <div>
                <h3 className="text-sm font-semibold">Auto-extend auctions</h3>
                <p className="text-sm text-muted-foreground">+5 min on last-minute bids</p>
              </div>
              <Switch checked={autoExtend} onCheckedChange={setAutoExtend} />
            </div>
            <div className="flex items-center justify-between gap-4 rounded-3xl border border-border bg-background p-4">
              <div>
                <h3 className="text-sm font-semibold">Reserve price visible</h3>
                <p className="text-sm text-muted-foreground">Show to bidders</p>
              </div>
              <Switch checked={reserveVisible} onCheckedChange={setReserveVisible} />
            </div>
            <div className="flex items-center justify-between gap-4 rounded-3xl border border-border bg-background p-4">
              <div>
                <h3 className="text-sm font-semibold">KYC required</h3>
                <p className="text-sm text-muted-foreground">Enable bidder verification</p>
              </div>
              <Switch checked={kycRequired} onCheckedChange={setKycRequired} />
            </div>
          </div>

          <div className="mt-6 space-y-4 rounded-3xl border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Platform fee %</span>
              <span className="font-semibold">10</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Min bid increment</span>
              <span className="font-semibold">Rs25,000</span>
            </div>
          </div>

          <button className="mt-6 w-full rounded-2xl border border-[var(--brand)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--brand)] transition hover:bg-[var(--brand)]/5">
            Save Settings
          </button>
        </aside>
      </div>
    </DashboardShell>
  );
}

export default AdminSettings;
