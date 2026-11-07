export default function Loading() {
  return (
    <div className="space-y-4" aria-live="polite" aria-busy="true">
      <div className="h-8 w-52 animate-pulse rounded bg-slate-200" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-48 animate-pulse rounded-2xl bg-slate-200" />
        <div className="h-48 animate-pulse rounded-2xl bg-slate-200" />
      </div>
    </div>
  );
}
