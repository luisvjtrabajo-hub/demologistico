"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Truck, Box, Database, Server } from "lucide-react";
import { clsx } from "clsx";

const timelineEvents = [
  {
    id: 1,
    time: "Ahora",
    title: "Integración ERP Exitosa",
    description: "Sincronización de inventario completada con SAP S/4HANA. 4,281 registros actualizados.",
    type: "system",
    icon: Server,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    id: 2,
    time: "Hace 2 min",
    title: "Alerta FEFO Resuelta",
    description: "Lote L-8831 asignado a orden de salida OUT-991 prioritariamente.",
    type: "alert",
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20"
  },
  {
    id: 3,
    time: "Hace 5 min",
    title: "Recepción Completada",
    description: "ASN-550118 cerrado. 2,100 unidades confirmadas en Dock 02. Putaway iniciado.",
    type: "success",
    icon: Box,
    color: "text-brand-primary",
    bg: "bg-brand-primary/10",
    border: "border-brand-primary/20"
  },
  {
    id: 4,
    time: "Hace 12 min",
    title: "Diferencia Detectada",
    description: "Discrepancia en ASN-440882. Faltan 1,550 unidades reportadas por Operador ID-442.",
    type: "warning",
    icon: AlertTriangle,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20"
  },
  {
    id: 5,
    time: "Hace 18 min",
    title: "Pallet Validado",
    description: "LPN-992810 escaneado y validado en zona de staging.",
    type: "info",
    icon: Database,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20"
  },
  {
    id: 6,
    time: "Hace 25 min",
    title: "ASN Recibido",
    description: "Transporte registrado en garita. Asignado a Dock 05.",
    type: "info",
    icon: Truck,
    color: "text-white/70",
    bg: "bg-white/10",
    border: "border-white/20"
  }
];

export function OperationalTimeline() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">Timeline Operacional</h2>
            <p className="text-white/60 text-sm">Registro de auditoría y eventos en tiempo real.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-400">Live</span>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-2xl border border-white/10">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

            <div className="space-y-8">
              {timelineEvents.map((event, idx) => {
                const Icon = event.icon;
                return (
                  <motion.div 
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative pl-16 group"
                  >
                    {/* Timeline Node */}
                    <div className={clsx(
                      "absolute left-0 w-12 h-12 rounded-full border-4 border-black flex items-center justify-center bg-black z-10",
                    )}>
                      <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center border", event.bg, event.border, event.color)}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-white">{event.title}</h3>
                        <span className="text-xs font-medium text-white/50">{event.time}</span>
                      </div>
                      <p className="text-sm text-white/70">{event.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}