import Image from "next/image";
import type { SacramentMeeting } from "@/lib/types";

export function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${meeting.date}T00:00:00`));

  return (
    <article className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm print:rounded-none print:border-0 print:p-0 print:shadow-none">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">{meeting.meetingType}</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">{formattedDate}</h1>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 print:hidden">
          <Image
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80"
            alt="Sacrament table and meeting room"
            width={240}
            height={120}
            className="h-28 w-full object-cover"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Presiding</p>
          <p className="mt-2 text-lg font-medium text-slate-800">{meeting.presiding}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Conducting</p>
          <p className="mt-2 text-lg font-medium text-slate-800">{meeting.conducting}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Program Details</h2>
          <ul className="space-y-3 text-slate-700">
            <li><span className="font-semibold">Opening hymn:</span> {meeting.openingHymn.number} - {meeting.openingHymn.title}</li>
            <li><span className="font-semibold">Opening prayer:</span> {meeting.openingPrayer}</li>
            <li><span className="font-semibold">Sacrament hymn:</span> {meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}</li>
            <li><span className="font-semibold">Closing hymn:</span> {meeting.closingHymn.number} - {meeting.closingHymn.title}</li>
            <li><span className="font-semibold">Closing prayer:</span> {meeting.closingPrayer}</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Ward Business</h2>
          <ul className="space-y-2 text-slate-700">
            {meeting.wardBusiness.length > 0 ? (
              meeting.wardBusiness.map((item) => <li key={item.description}>• {item.description}</li>)
            ) : (
              <li>None recorded.</li>
            )}
          </ul>
          <p className="mt-4 text-slate-700">
            <span className="font-semibold">Stake business:</span> {meeting.stakeBusiness ? "Yes" : "No"}
          </p>
        </section>
      </div>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Announcements</h2>
        {meeting.announcements && meeting.announcements.length > 0 ? (
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            {meeting.announcements.map((item) => <li key={item}>{item}</li>)}
          </ul>
        ) : (
          <p className="text-slate-600">No announcements listed.</p>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Speakers and Musical Numbers</h2>
        {meeting.speakers.length === 0 && (
          <p className="text-slate-600">
            {meeting.meetingType === "testimony" ? "Testimonies from the congregation." : "No speakers listed."}
          </p>
        )}
        <ul className="space-y-3 text-slate-700">
          {meeting.speakers.map((speaker) => (
            <li key={`${speaker.name}-${speaker.topic}`} className="rounded-xl bg-slate-50 p-3">
              <p className="font-semibold text-slate-900">{speaker.name}</p>
              <p>
                {speaker.type === "musical-number" ? "Musical number" : "Speaker"}
                {speaker.topic ? ` • ${speaker.topic}` : ""}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
