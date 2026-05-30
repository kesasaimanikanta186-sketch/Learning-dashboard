"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AddCourseForm() {
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState("");
  async function addCourse() {
  const { error } = await supabase
    .from("courses")
    .insert([
      {
        title,
        progress: Number(progress),
      },
    ]);

  if (error) {
    console.error(error);
    alert("Failed to add course");
    return;
  }

  alert("Course Added!");

  setTitle("");
  setProgress("");

  location.reload();
}
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6">
      <h2 className="text-xl font-bold mb-4">
        Add New Course
      </h2>

      <input
      type="text"
      placeholder="Course Name"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full p-3 rounded-lg bg-zinc-800 mb-4"
      />
      <input
      type="number"
      placeholder="Progress %"
      value={progress}
      onChange={(e) => setProgress(e.target.value)}
      className="w-full p-3 rounded-lg bg-zinc-800 mb-4"
      />

      <button
      onClick={addCourse}
      className="w-full p-3 rounded-lg bg-cyan-500"
      >
      Add Course 
      </button>
    </div>
  );
}