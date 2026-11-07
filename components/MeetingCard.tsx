import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

export function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${meeting.date}T00:00:00`));

  return (
    <Link
      href={`/meetings/${meeting.id}`}
      className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          {meeting.meetingType}
        </p>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
          {meeting.stakeBusiness ? "Stake business" : "Ward meeting"}
        </span>
      </div>
      <h3 className="mt-3 text-xl font-bold text-slate-900">{formattedDate}</h3>
      <p className="mt-2 text-slate-600">Presiding: {meeting.presiding}</p>
      <p className="mt-1 text-slate-600">Conducting: {meeting.conducting}</p>
      <p className="mt-4 text-sm font-medium text-indigo-700">View program →</p>
    </Link>
  );
}
