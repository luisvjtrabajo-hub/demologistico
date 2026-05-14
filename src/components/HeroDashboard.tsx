"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Package, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRightLeft, 
  CheckCircle2, 
  Zap, 
  Clock 
} from "lucide-react";

const kpis = [
  { label: "ASN Activos", value: "142", icon: Package, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", trend: "+12%" },
  { label: "ASN Críticos", value: "3", icon: AlertTriangle, color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20", trend: "-2" },
  { label: "Productividad", value: "98.5%", icon: Zap, color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20", trend: "+2.4%" },
  { label: "Cumplimiento FEFO", value: "99.9%", icon: ShieldCheck, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", trend: "Óptimo" },
  { label: "Inbound / Outbound", value: "84 / 112", icon: ArrowRightLeft, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20", trend: "Balanceado" },
  { label: "Precisión Inventario", value: "99.98%", icon: CheckCircle2, color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20", trend: "+0.01%" },
  { label: "Órdenes Procesadas", value: "4,281", icon: TrendingUp, color: "text-brand-primary", bg: "bg-brand-primary/10", border: "border-brand-primary/20", trend: "+450/h" },
  { label: "Tiempo Promedio", value: "14m 32s", icon: Clock, color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20", trend: "-1m 12s" },
];

export function HeroDashboard() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            Plataforma Enterprise v2.0
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Centro de <span className="text-gradient-primary">Control Logístico</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Monitoreo operacional en tiempo real para operaciones de almacén y distribución. 
            Toma el control absoluto de tu cadena de suministro.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-5 rounded-2xl hover:bg-surface-200 transition-colors cursor-default group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <kpi.icon className={`w-24 h-24 ${kpi.color}`} />
              </div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className={`p-2 rounded-xl ${kpi.bg} ${kpi.border} border`}>
                  <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
                </div>
                <span className="text-xs font-medium text-white/50 bg-white/5 px-2 py-1 rounded-full">
                  {kpi.trend}
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-1">{kpi.value}</h3>
                <p className="text-sm text-white/60 font-medium">{kpi.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}