"use client";

import { motion } from "framer-motion";
import { AlertOctagon, AlertTriangle, ShieldAlert, Zap, Box, Clock } from "lucide-react";
import { clsx } from "clsx";

interface Alert {
  id: string;
  title: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM";
  timestamp: string;
  impact: string;
  action: string;
  icon: any;
}

const alerts: Alert[] = [
  {
    id: "ALRT-01",
    title: "Diferencia detectada en recepción",
    severity: "CRITICAL",
    timestamp: "Hace 2 min",
    impact: "Discrepancia de -1,550 unidades en ASN-440882. Impacta inventario disponible.",
    action: "Auditar pallet inmediatamente",
    icon: ShieldAlert,
  },
  {
    id: "ALRT-02",
    title: "Dock 03 Congestionado",
    severity: "HIGH",
    timestamp: "Hace 15 min",
    impact: "Retraso en cadena de inbound. 3 transportes en espera.",
    action: "Reasignar al Dock 05",
    icon: AlertOctagon,
  },
  {
    id: "ALRT-03",
    title: "Riesgo FEFO inminente",
    severity: "CRITICAL",
    timestamp: "Hace 22 min",
    impact: "Lote L-9920 expira en 30 días. Valor en riesgo: $12,500.",
    action: "Acelerar salida (Outbound Priority)",
    icon: AlertTriangle,
  },
  {
    id: "ALRT-04",
    title: "ASN detenido",
    severity: "MEDIUM",
    timestamp: "Hace 2h",
    impact: "ASN-773190 sin movimiento en área de staging.",
    action: "Verificar con supervisor de turno",
    icon: Clock,
  },
  {
    id: "ALRT-05",
    title: "SKU Inválido Escaneado",
    severity: "HIGH",
    timestamp: "Hace 45 min",
    impact: "Posible error de etiquetado de proveedor.",
    action: "Cuarentena temporal de producto",
    icon: Zap,
  },
  {
    id: "ALRT-06",
    title: "Sobrestock detectado",
    severity: "MEDIUM",
    timestamp: "Hace 1h 10m",
    impact: "Zona A4 al 105% de capacidad.",
    action: "Generar tarea de reubicación",
    icon: Box,
  },
];

const getSeverityStyles = (severity: string) => {
  switch (severity) {
    case "CRITICAL": return "border-red-500/50 bg-red-500/10 text-red-400";
    case "HIGH": return "border-orange-500/50 bg-orange-500/10 text-orange-400";
    case "MEDIUM": return "border-yellow-500/50 bg-yellow-500/10 text-yellow-400";
    default: return "border-white/20 bg-white/5 text-white";
  }
};

export function OperationalAlerts() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
            <Zap className="w-6 h-6 text-brand-warning" />
            Alertas Operacionales
          </h2>
          <p className="text-white/60 text-sm">Centro de respuesta a incidentes logísticos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alerts.map((alert, idx) => {
            const Icon = alert.icon;
            const severityStyles = getSeverityStyles(alert.severity);

            return (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={clsx(
                  "glass-panel rounded-2xl p-5 border flex flex-col justify-between relative overflow-hidden group hover:border-white/30 transition-all",
                  alert.severity === "CRITICAL" ? "border-red-500/30" : "border-white/10"
                )}
              >
                {alert.severity === "CRITICAL" && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-rose-500" />
                )}
                
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className={clsx("p-2 rounded-lg border", severityStyles)}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-white/50">{alert.timestamp}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{alert.title}</h3>
                  <p className="text-sm text-white/70 mb-4 leading-relaxed">
                    {alert.impact}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-auto flex items-center justify-between">
                  <span className="text-xs text-white/40 font-mono">{alert.id}</span>
                  <button className="text-xs font-medium text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors border border-white/10">
                    {alert.action}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}