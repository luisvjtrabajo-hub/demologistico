"use client";

import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Database, TrendingDown, Layers, BoxSelect } from "lucide-react";

const inventoryHistory = [
  { name: "Lun", stock: 4000, out: 2400 },
  { name: "Mar", stock: 3000, out: 1398 },
  { name: "Mié", stock: 2000, out: 9800 },
  { name: "Jue", stock: 2780, out: 3908 },
  { name: "Vie", stock: 1890, out: 4800 },
  { name: "Sáb", stock: 2390, out: 3800 },
  { name: "Dom", stock: 3490, out: 4300 },
];

export function InventoryDashboard() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
            <Database className="w-6 h-6 text-brand-primary" />
            Inteligencia de Inventario
          </h2>
          <p className="text-white/60 text-sm">Métricas de salud, ocupación y rotación en tiempo real.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Flujo de Inventario (In/Out)</h3>
              <span className="text-xs font-medium bg-brand-primary/10 text-brand-primary px-2 py-1 rounded border border-brand-primary/20">
                Últimos 7 días
              </span>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={inventoryHistory} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorOut" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(10,10,10,0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="stock" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorStock)" />
                  <Area type="monotone" dataKey="out" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorOut)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Metrics Column */}
          <div className="flex flex-col gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-accent/10 rounded-lg text-brand-accent border border-brand-accent/20">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white/90">Ocupación Almacén</h3>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-bold">82<span className="text-2xl text-white/50">%</span></span>
                <span className="text-sm text-emerald-400 mb-1 flex items-center">
                  Óptimo
                </span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2 mt-4 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "82%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-gradient-to-r from-brand-accent to-emerald-400 h-2 rounded-full"
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-white/40">
                <span>Zona A: 95%</span>
                <span>Zona B: 60%</span>
                <span>Zona C: 78%</span>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white/90">Vencimientos Próximos</h3>
              </div>
              <div className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-sm text-white/80">&lt; 30 días</span>
                  </div>
                  <span className="text-sm font-medium">12 SKUs</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-sm text-white/80">&lt; 60 días</span>
                  </div>
                  <span className="text-sm font-medium">45 SKUs</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="text-sm text-white/80">&lt; 90 días</span>
                  </div>
                  <span className="text-sm font-medium">128 SKUs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}