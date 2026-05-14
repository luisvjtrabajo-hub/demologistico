"use client";

import { motion } from "framer-motion";
import { ShieldAlert, ShieldCheck, AlertTriangle, CalendarDays, Lock } from "lucide-react";
import { clsx } from "clsx";

const fefoBatches = [
  { lot: "L-9920", product: "Vacuna Antiviral X", expire: "12 Días", qty: "4,500", status: "Crítico", risk: 95 },
  { lot: "L-8831", product: "Suero Fisiológico", expire: "28 Días", qty: "12,000", status: "Advertencia", risk: 65 },
  { lot: "L-7710", product: "Antibiótico Pediátrico", expire: "45 Días", qty: "8,200", status: "Normal", risk: 20 },
  { lot: "L-6605", product: "Reactivos de Lab", expire: "Expirado", qty: "300", status: "Bloqueado", risk: 100 },
];

export function FEFOMonitoring() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            Monitoreo FEFO & Control de Calidad
          </h2>
          <p className="text-white/60 text-sm">Control estricto de fechas de caducidad y lotes críticos.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main FEFO Timeline/List */}
          <div className="lg:col-span-3 glass-panel p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold mb-6">Lotes en Seguimiento Activo</h3>
            
            <div className="space-y-4">
              {fefoBatches.map((batch, idx) => (
                <div key={idx} className="relative">
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-surface-100 border border-white/5 hover:border-white/10 transition-all">
                    <div className="flex items-start md:items-center gap-4 mb-4 md:mb-0">
                      <div className={clsx(
                        "p-3 rounded-lg border",
                        batch.status === "Crítico" ? "bg-orange-500/10 border-orange-500/20 text-orange-400" :
                        batch.status === "Bloqueado" ? "bg-red-500/10 border-red-500/20 text-red-400" :
                        batch.status === "Advertencia" ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-400" :
                        "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      )}>
                        {batch.status === "Bloqueado" ? <Lock className="w-5 h-5" /> : 
                         batch.status === "Crítico" ? <AlertTriangle className="w-5 h-5" /> :
                         <CalendarDays className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-white">{batch.lot}</h4>
                          <span className={clsx(
                            "text-xs px-2 py-0.5 rounded-full font-medium border",
                            batch.status === "Crítico" ? "border-orange-500/50 text-orange-400" :
                            batch.status === "Bloqueado" ? "border-red-500/50 text-red-400" :
                            batch.status === "Advertencia" ? "border-yellow-500/50 text-yellow-400" :
                            "border-emerald-500/50 text-emerald-400"
                          )}>
                            {batch.status}
                          </span>
                        </div>
                        <p className="text-sm text-white/60">{batch.product}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-8">
                      <div>
                        <p className="text-xs text-white/50 mb-1">Vence en</p>
                        <p className="font-mono text-sm font-medium">{batch.expire}</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/50 mb-1">Cantidad</p>
                        <p className="font-mono text-sm font-medium">{batch.qty} und.</p>
                      </div>
                      <div className="w-24">
                        <p className="text-xs text-white/50 mb-1">Riesgo</p>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${batch.risk}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={clsx(
                              "h-full rounded-full",
                              batch.risk > 80 ? "bg-red-500" : batch.risk > 50 ? "bg-orange-500" : "bg-emerald-500"
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics Panel */}
          <div className="flex flex-col gap-4">
            <div className="glass-panel p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck className="w-16 h-16 text-emerald-400" />
              </div>
              <h3 className="text-sm font-medium text-white/70 mb-2 relative z-10">Cumplimiento FEFO</h3>
              <p className="text-4xl font-bold text-emerald-400 relative z-10">99.9%</p>
              <p className="text-xs text-emerald-400/60 mt-2 relative z-10">Nivel de excelencia enterprise</p>
            </div>
            
            <div className="glass-panel p-5 rounded-2xl border border-red-500/20 bg-red-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldAlert className="w-16 h-16 text-red-400" />
              </div>
              <h3 className="text-sm font-medium text-white/70 mb-2 relative z-10">Productos Bloqueados</h3>
              <p className="text-4xl font-bold text-red-400 relative z-10">300<span className="text-xl text-red-400/50">und</span></p>
              <p className="text-xs text-red-400/60 mt-2 relative z-10">Cuarentena automática activa</p>
            </div>
            
            <div className="glass-panel p-5 rounded-2xl border border-white/10 flex-1">
              <h3 className="text-sm font-medium text-white/70 mb-4">Alertas Predictivas</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 flex-shrink-0" />
                  <p className="text-xs text-white/80 leading-relaxed">
                    Sugerencia: Promover salida de L-9920 en próximos 3 despachos para evitar merma.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}