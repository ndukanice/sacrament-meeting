import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10">
      <section className="overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl">
        <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Ward Leadership</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Sacrament meeting planning made simple.
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              Review recent meetings, prepare upcoming programs, and print a polished meeting agenda for church leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/meetings"
                className="rounded-full bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                View meetings
              </Link>
              <Link
                href="/meetings/current"
                className="rounded-full border border-slate-500 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Current Sunday
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-700">
            <Image
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80"
              alt="Church meeting hall and sacrament table"
              width={900}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Weekly</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">Current program</h2>
          <p className="mt-3 text-slate-600">Track the latest hymn, prayer, speakers, and service notices for Sunday worship.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Archive</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">Past meetings</h2>
          <p className="mt-3 text-slate-600">Browse older schedules to keep continuity and compare recent activity across weeks.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Print</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">Ready to share</h2>
          <p className="mt-3 text-slate-600">Print a clean program for meetings, announcements, and speaker assignments in one view.</p>
        </div>
      </section>
    </main>
  );
}
