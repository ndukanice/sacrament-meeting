import { redirect } from "next/navigation";
import { getCurrentSundayMeeting } from "@/lib/meetings-db";

export default function CurrentMeetingPage() {
  const currentMeeting = getCurrentSundayMeeting();

  if (!currentMeeting) {
    redirect("/meetings");
  }

  redirect(`/meetings/${currentMeeting.id}`);
}
