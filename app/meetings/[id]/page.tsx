import { notFound } from "next/navigation";
import { MeetingDetail } from "@/components/MeetingDetail";
import type { SacramentMeeting } from "@/lib/types";

export const dynamic = "force-dynamic";

type MeetingDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MeetingDetailPage({ params }: MeetingDetailPageProps) {
  const { id } = await params;
  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/meetings/${meetingId}`, { cache: "no-store" });

  if (!response.ok) {
    notFound();
  }

  const meeting: SacramentMeeting = await response.json();

  return (
    <div className="mx-auto max-w-4xl">
      <MeetingDetail meeting={meeting} />
    </div>
  );
}
