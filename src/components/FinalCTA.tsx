"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Transforma tu operación logística con <span className="text-gradient-primary">visibilidad en tiempo real</span>.
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Implementación enterprise, integración fluida con WMS/ERP y monitoreo operacional avanzado para llevar tu centro de distribución al siguiente nivel.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/56982228924"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-white/90 transition-all rounded-xl font-semibold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              Agendar Implementación
            </a>
          </div>
          
          <p className="mt-8 text-sm text-white/40 flex items-center justify-center gap-4">
            <span>✓ Integración en 4 semanas</span>
            <span>✓ SLA 99.99%</span>
            <span>✓ Soporte 24/7</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}