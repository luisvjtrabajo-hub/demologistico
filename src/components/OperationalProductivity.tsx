"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Users, Truck, Timer, Activity } from "lucide-react";

const productivityData = [
  { time: "08:00", recepciones: 45, throughput: 120 },
  { time: "09:00", recepciones: 62, throughput: 150 },
  { time: "10:00", recepciones: 85, throughput: 210 },
  { time: "11:00", recepciones: 78, throughput: 190 },
  { time: "12:00", recepciones: 95, throughput: 240 },
  { time: "13:00", recepciones: 55, throughput: 140 },
];

const topOperators = [
  { name: "Carlos M.", role: "Recepción", rate: "142 pallets/h", eff: "98%" },
  { name: "Ana P.", role: "Validación", rate: "210 lineas/h", eff: "99%" },
  { name: "Luis R.", role: "Putaway", rate: "85 tareas/h", eff: "95%" },
];

export function OperationalProductivity() {
  return (
    <section className="py-12 px-6 bg-surface-100/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
              <Activity className="w-6 h-6 text-brand-primary" />
              Productividad Operacional
            </h2>
            <p className="text-white/60 text-sm">Eficiencia de equipos, recepciones y tiempos de procesamiento.</p>
          </div>
          <div className="flex gap-4">
            <div className="glass-panel px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3">
              <Timer className="w-5 h-5 text-brand-warning" />
              <div>
                <div className="text-xs text-white/50">Tiempo Prom. ASN</div>
                <div className="font-bold text-white">14m 32s</div>
              </div>
            </div>
            <div className="glass-panel px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3">
              <Truck className="w-5 h-5 text-brand-accent" />
              <div>
                <div className="text-xs text-white/50">Docks Activos</div>
                <div className="font-bold text-white">8 / 12</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold mb-6">Throughput por Hora</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productivityData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="time" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: 'rgba(10,10,10,0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  />
                  <Bar dataKey="throughput" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={40} />
                  <Bar dataKey="recepciones" fill="#8b5cf6" radius={[4, 4, 0, 0]} maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Operators */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-5 h-5 text-white/70" />
              <h3 className="text-lg font-semibold">Top Operadores</h3>
            </div>
            <div className="space-y-4">
              {topOperators.map((op, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-white">{op.name}</h4>
                      <p className="text-xs text-white/50">{op.role}</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                      {op.eff} Efic.
                    </span>
                  </div>
                  <div className="text-sm text-white/80">
                    {op.rate}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}