"use client";
import { motion } from "framer-motion";
interface StatsCardProps {
  title: string;
  value: string;
}

export default function StatsCard({
  title,
  value,
}: StatsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2}}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 transition-all duration-100 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
    >
      
      <p className="text-zinc-400 text-sm">
        {title}
      </p>

      <h3 className="mt-4 text-4xl font-bold">
        {value}
      </h3>

    </motion.article>
  );
}