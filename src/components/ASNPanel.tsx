"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Clock, ShieldAlert, AlertTriangle, FileCheck } from "lucide-react";
import { clsx } from "clsx";

type ASNStatus = "Completo" | "Recepción Parcial" | "Retrasado" | "Bloqueado" | "En Validación" | "Riesgo FEFO";

interface ASNRecord {
  id: string;
  status: ASNStatus;
  eta: string;
  expected: number;
  received: number;
  difference: number;
  risk: "Bajo" | "Medio" | "Alto" | "Crítico";
  lastUpdate: string;
}

const asnData: ASNRecord[] = [
  { id: "ASN-847221", status: "En Validación", eta: "10:30 AM", expected: 1200, received: 1200, difference: 0, risk: "Bajo", lastUpdate: "Hace 2 min" },
  { id: "ASN-991203", status: "Riesgo FEFO", eta: "11:15 AM", expected: 850, received: 850, difference: 0, risk: "Crítico", lastUpdate: "Hace 5 min" },
  { id: "ASN-440882", status: "Recepción Parcial", eta: "09:00 AM", expected: 3000, received: 1450, difference: -1550, risk: "Medio", lastUpdate: "Hace 12 min" },
  { id: "ASN-773190", status: "Retrasado", eta: "08:30 AM", expected: 400, received: 0, difference: -400, risk: "Alto", lastUpdate: "Hace 1h" },
  { id: "ASN-119022", status: "Bloqueado", eta: "12:00 PM", expected: 620, received: 620, difference: 0, risk: "Alto", lastUpdate: "Hace 15 min" },
  { id: "ASN-550118", status: "Completo", eta: "07:45 AM", expected: 2100, received: 2100, difference: 0, risk: "Bajo", lastUpdate: "Hace 2h" },
];

const getStatusConfig = (status: ASNStatus) => {
  switch (status) {
    case "Completo": return { color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", icon: CheckCircle };
    case "Recepción Parcial": return { color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", icon: Clock };
    case "Retrasado": return { color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20", icon: AlertCircle };
    case "Bloqueado": return { color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20", icon: ShieldAlert };
    case "En Validación": return { color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20", icon: FileCheck };
    case "Riesgo FEFO": return { color: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/20", icon: AlertTriangle };
  }
};

const getRiskColor = (risk: string) => {
  switch (risk) {
    case "Bajo": return "text-emerald-400";
    case "Medio": return "text-blue-400";
    case "Alto": return "text-orange-400";
    case "Crítico": return "text-red-400";
    default: return "text-white/60";
  }
};

export function ASNPanel() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-1">Monitoreo ASN en Vivo</h2>
            <p className="text-white/60 text-sm">Visualización en tiempo real de recepciones y estados.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 text-sm text-brand-accent bg-brand-accent/10 px-3 py-1.5 rounded-full border border-brand-accent/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              Live Updates
            </span>
          </div>
        </div>

        <div className="glass-panel rounded-2xl overflow-hidden border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-200/50 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 font-medium text-white/60">ASN</th>
                  <th className="px-6 py-4 font-medium text-white/60">Estado</th>
                  <th className="px-6 py-4 font-medium text-white/60">ETA</th>
                  <th className="px-6 py-4 font-medium text-white/60 text-right">Esperado</th>
                  <th className="px-6 py-4 font-medium text-white/60 text-right">Recibido</th>
                  <th className="px-6 py-4 font-medium text-white/60 text-right">Diferencia</th>
                  <th className="px-6 py-4 font-medium text-white/60 text-center">Riesgo</th>
                  <th className="px-6 py-4 font-medium text-white/60">Última actualización</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {asnData.map((asn, idx) => {
                  const statusConfig = getStatusConfig(asn.status);
                  const Icon = statusConfig.icon;
                  return (
                    <motion.tr 
                      key={asn.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="hover:bg-surface-100 transition-colors group"
                    >
                      <td className="px-6 py-4 font-medium text-white">{asn.id}</td>
                      <td className="px-6 py-4">
                        <div className={clsx("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium", statusConfig.bg, statusConfig.color, statusConfig.border)}>
                          <Icon className="w-3.5 h-3.5" />
                          {asn.status}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-white/80">{asn.eta}</td>
                      <td className="px-6 py-4 text-right text-white/80">{asn.expected.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right font-medium">{asn.received.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right">
                        <span className={clsx(
                          "px-2 py-1 rounded text-xs font-medium",
                          asn.difference === 0 ? "text-white/40" : "text-red-400 bg-red-400/10"
                        )}>
                          {asn.difference === 0 ? "-" : asn.difference.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={clsx("font-medium text-xs uppercase tracking-wider", getRiskColor(asn.risk))}>
                          {asn.risk}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/50 text-xs">
                        {asn.lastUpdate}
                      </td>
                    </motion.tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}