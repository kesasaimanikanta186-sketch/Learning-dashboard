export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] p-10">
      <div className="animate-pulse space-y-6">
        
        <div className="h-10 w-72 rounded-lg bg-zinc-800" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="xl:col-span-2 h-64 rounded-3xl bg-zinc-900" />

          <div className="h-64 rounded-3xl bg-zinc-900" />

          <div className="h-64 rounded-3xl bg-zinc-900" />

          <div className="h-64 rounded-3xl bg-zinc-900" />

          <div className="h-64 rounded-3xl bg-zinc-900" />

          <div className="h-64 rounded-3xl bg-zinc-900" />

        </div>
      </div>
    </main>
  );
}