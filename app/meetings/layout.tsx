import { NavLinks, type NavLink } from "@/components/NavLinks";

const meetingLinks: NavLink[] = [
  { href: "/meetings", label: "All meetings" },
  { href: "/meetings/current", label: "This Sunday" },
];

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-6 print:hidden">
        <NavLinks links={meetingLinks} ariaLabel="Meetings navigation" variant="section" />
      </div>
      {children}
    </main>
  );
}
