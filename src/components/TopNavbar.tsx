"use client";

import { motion } from "framer-motion";
import { Activity, Box, Command } from "lucide-react";

export function TopNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass-panel border-b border-white/5">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-brand-primary/10 p-2 rounded-xl border border-brand-primary/20">
            <Command className="w-5 h-5 text-brand-primary" />
          </div>
          <span className="font-semibold text-lg tracking-tight text-white lowercase">
            vv<span className="text-white/60">logix</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
          <a href="#" className="hover:text-white transition-colors">Operaciones</a>
          <a href="#" className="hover:text-white transition-colors">Inbound</a>
          <a href="#" className="hover:text-white transition-colors">Outbound</a>
          <a href="#" className="hover:text-white transition-colors">Analítica</a>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-surface-100 border border-white/10">
          <span className="text-white/70">Sistema Operativo</span>
          <span className="w-1 h-1 rounded-full bg-white/30 mx-1" />
          <span className="flex items-center gap-1.5 text-brand-accent">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            Realtime Connected
          </span>
        </div>
        
        <a 
          href="https://wa.me/56982228924?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20implementaci%C3%B3n%20de%20la%20plataforma%20log%C3%ADstica."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black hover:bg-white/90 transition-colors px-4 py-2 rounded-lg text-sm font-medium shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        >
          Solicitar Implementación
        </a>
      </div>
    </nav>
  );
}