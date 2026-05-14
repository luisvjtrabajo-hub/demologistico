"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, TrendingDown, Target, ShieldAlert, Cpu } from "lucide-react";
import { clsx } from "clsx";

const aiInsights = [
  {
    type: "PREDICTION",
    title: "Predicción de Congestión",
    description: "Se detectó riesgo de retraso en recepción inbound del Dock 03 para las 14:00 hrs. basado en volumen histórico y transportes en ruta.",
    action: "Sugerencia: Habilitar Dock 04 temporalmente.",
    icon: TrendingDown,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20"
  },
  {
    type: "ANOMALY",
    title: "Detección de Anomalía",
    description: "Probabilidad alta (87%) de diferencia de inventario en ASN-991203. El proveedor tiene un historial de discrepancias del 12% en este SKU.",
    action: "Sugerencia: Requerir conteo ciego a nivel unidad.",
    icon: Target,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20"
  },
  {
    type: "OPTIMIZATION",
    title: "Optimización de Slotting",
    description: "La zona B2 muestra alto tráfico. Reubicar SKUs de alta rotación (Fast Movers) a la zona A1 reducirá tiempos de viaje en 14%.",
    action: "Sugerencia: Generar tareas de reabastecimiento intercaladas.",
    icon: Sparkles,
    color: "text-brand-primary",
    bg: "bg-brand-primary/10",
    border: "border-brand-primary/20"
  }
];

export function OperationalAI() {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Abstract Background for AI section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl border border-white/10 mb-4 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <BrainCircuit className="w-8 h-8 text-brand-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-gradient-primary">Insights Inteligentes</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Nuestro motor de IA analiza millones de datapoints en tiempo real para predecir, alertar y optimizar tu operación antes de que ocurran problemas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiInsights.map((insight, idx) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all"
              >
                <div className="absolute -right-6 -top-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Cpu className={`w-32 h-32 ${insight.color}`} />
                </div>
                
                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div className={clsx("p-2 rounded-xl border", insight.bg, insight.border, insight.color)}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-medium tracking-wider text-white/50 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    {insight.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3 relative z-10">{insight.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6 relative z-10 min-h-[80px]">
                  {insight.description}
                </p>
                
                <div className="relative z-10 p-3 bg-white/5 border border-white/10 rounded-xl">
                  <p className="text-xs font-medium text-white/90 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    {insight.action}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}