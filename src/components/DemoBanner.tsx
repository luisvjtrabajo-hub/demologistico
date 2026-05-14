"use client";

import { Info, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto md:max-w-2xl z-50"
      >
        <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-2xl p-4 pr-12 rounded-2xl flex items-start gap-3">
          <div className="bg-brand-primary/20 p-2 rounded-full flex-shrink-0 mt-0.5">
            <Info className="w-5 h-5 text-brand-primary" />
          </div>
          <div>
            <h4 className="text-white font-medium text-sm mb-1">
              Versión de Demostración General
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Esta es una demostración general. Las funcionalidades, reglas y cantidad de módulos mostrados son ilustrativos; todo <strong>se ajusta y personaliza</strong> dependiendo siempre de las lógicas específicas de cada negocio.
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            aria-label="Cerrar aviso"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
