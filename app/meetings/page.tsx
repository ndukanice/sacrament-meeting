import { MeetingCard } from "@/components/MeetingCard";
import { getBaseUrl } from "@/lib/base-url";
import type { SacramentMeeting } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function MeetingsPage() {
  const baseUrl = await getBaseUrl();
  const response = await fetch(`${baseUrl}/api/meetings`, { cache: "no-store" });

  if (!response.ok) {
    return <p className="text-red-600">Unable to load meetings.</p>;
  }

  const meetings: SacramentMeeting[] = await response.json();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Meeting Archive</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">All Sacrament Meetings</h1>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </div>
  );
}
