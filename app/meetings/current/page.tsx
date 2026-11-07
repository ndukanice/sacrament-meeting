import { redirect } from "next/navigation";
import { getCurrentSundayMeeting } from "@/lib/meetings-db";

// Work out "this Sunday" on every request, not once at build time.
export const dynamic = "force-dynamic";

export default function CurrentMeetingPage() {
  const currentMeeting = getCurrentSundayMeeting();

  if (!currentMeeting) {
    redirect("/meetings");
  }

  redirect(`/meetings/${currentMeeting.id}`);
}
