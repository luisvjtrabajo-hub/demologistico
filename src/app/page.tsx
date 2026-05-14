import { TopNavbar } from "@/components/TopNavbar";
import { HeroDashboard } from "@/components/HeroDashboard";
import { ASNPanel } from "@/components/ASNPanel";
import { OperationalAlerts } from "@/components/OperationalAlerts";
import { InventoryDashboard } from "@/components/InventoryDashboard";
import { OperationalProductivity } from "@/components/OperationalProductivity";
import { FEFOMonitoring } from "@/components/FEFOMonitoring";
import { OperationalAI } from "@/components/OperationalAI";
import { OperationalTimeline } from "@/components/OperationalTimeline";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      {/* Abstract Global Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-gradient-to-b from-black via-black/90 to-black pointer-events-none z-0" />
      
      <div className="relative z-10">
        <TopNavbar />
        <HeroDashboard />
        <OperationalAlerts />
        <ASNPanel />
        <InventoryDashboard />
        <OperationalProductivity />
        <FEFOMonitoring />
        <OperationalAI />
        <OperationalTimeline />
        <FinalCTA />
      </div>
    </main>
  );
}