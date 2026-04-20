import { useState, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Bell, ChevronDown, PieChart as PieIcon, Menu, X, LogOut } from "lucide-react";
import logo from "@/assets/logo.png";
import adminAvatar from "@/assets/admin-avatar.jpg";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Dashboard", to: "/admin" },
  { label: "Live Auctions", to: "/admin/live-auctions" },
  { label: "Listings", to: "/admin/listings" },
  { label: "Users", to: "/admin/users" },
  { label: "Payments", to: "/admin/payments" },
  { label: "Settings", to: "/admin/settings" },
];

interface DashboardShellProps {
  active: string;
  title: string;
  showBell?: boolean;
  bellCount?: number;
  children: ReactNode;
}

export function DashboardShell({ active, title, showBell = false, bellCount = 6, children }: DashboardShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setMobileOpen(false);
    navigate("/admin/login");
  };

  const SidebarContent = (
    <div className="h-full flex flex-col">
      <div className="px-6 py-6 border-b border-border flex items-center justify-between">
        <img src={logo} alt="Auction Race" className="h-12 sm:h-16 w-auto" />
        <button
          className="lg:hidden p-1 text-muted-foreground"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {navItems.map((n) => {
          const isActive = n.label === active;
          return (
            <Link
              key={n.label}
              to={n.to}
              onClick={() => setMobileOpen(false)}
              className={
                isActive
                  ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-[var(--brand)] text-[var(--brand-foreground)] font-semibold shadow-sm"
                  : "flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted cursor-pointer"
              }
            >
              <PieIcon className={isActive ? "h-5 w-5" : "h-4 w-4 opacity-60"} />
              <span>{n.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full flex items-center gap-3 rounded-lg hover:bg-muted p-1 -m-1 transition-colors outline-none">
              <div className="h-10 w-10 rounded-full overflow-hidden shrink-0">
                <img src={adminAvatar} alt="Admin" className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="text-sm font-semibold truncate">Musfiq</div>
                <div className="text-xs text-muted-foreground">Admin</div>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            side="top"
            sideOffset={10}
            className="w-[calc(100vw-3rem)] max-w-[224px] rounded-xl border-border bg-popover p-1 shadow-lg"
          >
            <DropdownMenuItem
              onClick={handleLogout}
              className="gap-3 rounded-lg px-4 py-3 font-medium text-foreground focus:bg-accent"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {SidebarContent}
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="fixed top-0 left-0 right-0 lg:left-64 z-30 min-h-[80px] bg-card/95 backdrop-blur-sm border-b border-border px-4 lg:px-6 py-3">
          <div className="mx-auto flex flex-row items-center justify-between gap-3 max-w-full lg:max-w-[calc(100vw-18rem)]">
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden p-2 text-muted-foreground hover:bg-muted rounded-lg"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <div className="relative w-full sm:w-[320px] hidden sm:block">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for something"
                  className="h-12 w-full rounded-full border border-[#E6E9F0] bg-white px-12 text-sm text-foreground shadow-sm shadow-slate-200/40 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
                />
              </div>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-transparent text-foreground transition hover:bg-slate-100 sm:hidden"
                aria-label="Open search"
              >
                <Search className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3 justify-end w-auto">
                {showBell && (
                  <button className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-transparent text-foreground transition hover:bg-slate-100">
                    <Bell className="h-6 w-6 text-black" />
                    {bellCount > 0 && (
                      <span className="absolute top-1 right-1 h-3 w-3 rounded-full bg-destructive" />
                    )}
                  </button>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="inline-flex items-center gap-3 rounded-full bg-background px-3 py-2 text-left transition hover:bg-muted">
                      <div className="h-11 w-11 overflow-hidden rounded-full border border-border">
                        <img src={adminAvatar} alt="Admin" className="h-full w-full object-cover" />
                      </div>
                      <div className="hidden sm:block text-left">
                        <div className="text-sm font-semibold text-foreground">Musfiq</div>
                        <div className="text-xs text-muted-foreground">Admin</div>
                      </div>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    side="bottom"
                    sideOffset={10}
                    className="w-[220px] rounded-xl border-border bg-popover p-1 shadow-lg"
                  >
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="gap-3 rounded-lg px-4 py-3 font-medium text-foreground focus:bg-accent"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="pt-24 p-4 lg:pt-24 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}