import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const AdminIndex = lazy(() => import("./pages/AdminIndex.tsx"));
const AdminLiveAuctions = lazy(() => import("./pages/AdminLiveAuctions.tsx"));
const AdminListings = lazy(() => import("./pages/AdminListings.tsx"));
const AdminUsers = lazy(() => import("./pages/AdminUsers.tsx"));
const AdminPayments = lazy(() => import("./pages/AdminPayments.tsx"));
const AdminSettings = lazy(() => import("./pages/AdminSettings.tsx"));
const AdminLogin = lazy(() => import("./pages/AdminLogin.tsx"));

const queryClient = new QueryClient();

const routeLoader = <div className="p-6 text-sm text-muted-foreground">Loading...</div>;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<Suspense fallback={routeLoader}><AdminIndex /></Suspense>} />
          <Route path="/admin/live-auctions" element={<Suspense fallback={routeLoader}><AdminLiveAuctions /></Suspense>} />
          <Route path="/admin/listings" element={<Suspense fallback={routeLoader}><AdminListings /></Suspense>} />
          <Route path="/admin/users" element={<Suspense fallback={routeLoader}><AdminUsers /></Suspense>} />
          <Route path="/admin/payments" element={<Suspense fallback={routeLoader}><AdminPayments /></Suspense>} />
          <Route path="/admin/login" element={<Suspense fallback={routeLoader}><AdminLogin /></Suspense>} />
          <Route path="/admin/settings" element={<Suspense fallback={routeLoader}><AdminSettings /></Suspense>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Suspense fallback={routeLoader}><NotFound /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
