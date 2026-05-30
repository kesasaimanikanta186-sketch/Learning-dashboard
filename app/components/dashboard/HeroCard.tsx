"use client";
import { motion } from "framer-motion";
export default function HeroCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="xl:col-span-2 rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur"
    >
      
      <p className="text-zinc-400 text-sm mb-3">
        Daily Streak
      </p>

      <h2 className="text-6xl font-bold">
        12 Days
      </h2>

      <div className="mt-6 h-3 w-full rounded-full bg-zinc-800 overflow-hidden">
        <div className="h-full w-[70%] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
      </div>

    </motion.article>
  );
}