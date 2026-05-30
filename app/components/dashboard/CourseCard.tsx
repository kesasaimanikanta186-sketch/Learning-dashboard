"use client";

import { motion } from "framer-motion";

interface CourseCardProps {
  title: string;
  progress: number;
}

export default function CourseCard({
  title,
  progress,
}: CourseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 transition-all duration-100 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(128,90,213,0.15)]">
      <p className="text-sm text-zinc-400">
        Course
      </p>

      <h3 className="mt-3 text-xl font-semibold">
        {title}
      </h3>

      <div className="mt-6">
        <div className="flex items-center justify-between text-sm text-zinc-400 mb-2">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.article>
  );
}