import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-05-03",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Jones",
    announcements: ["Ward temple night: May 10", "Youth activity Saturday at 10:00 AM"],
    openingHymn: { number: 2, title: "The Spirit of God" },
    openingPrayer: "Sister Williams",
    wardBusiness: [{ description: "Sustaining of new Primary president" }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: "Sister Brown", topic: "Faith in Jesus Christ", type: "speaker" },
      { name: "Youth Choir", topic: "", type: "musical-number" },
    ],
    closingHymn: { number: 31, title: "O God, Our Help in Ages Past" },
    closingPrayer: "Brother Davis",
  },
  {
    id: 2,
    date: "2026-05-10",
    meetingType: "testimony",
    presiding: "Stake President Hall",
    conducting: "Brother Moore",
    announcements: ["Fast Sunday next week", "Family history workshop on Friday"],
    openingHymn: { number: 136, title: "How Great Thou Art" },
    openingPrayer: "Brother Thompson",
    wardBusiness: [
      { description: "Volunteer sign-ups for service project" },
      { description: "Ward clean-up day schedule" },
    ],
    stakeBusiness: true,
    sacramentHymn: { number: 193, title: "I Believe in Christ" },
    speakers: [
      { name: "Brother Allen", topic: "Repentance and renewal", type: "speaker" },
      { name: "Sister Patel", topic: "Service to others", type: "speaker" },
    ],
    closingHymn: { number: 116, title: "We Thank Thee, O God, for a Prophet" },
    closingPrayer: "Sister Kim",
  },
  {
    id: 3,
    date: "2026-05-17",
    meetingType: "stake",
    presiding: "Stake High Councilor Lee",
    conducting: "Brother Carter",
    announcements: ["Missionary farewell next Sunday", "Ward social committee update"],
    openingHymn: { number: 82, title: "Guide Us, O Thou Great Jehovah" },
    openingPrayer: "Brother Young",
    wardBusiness: [{ description: "New member welcome and class schedule review" }],
    stakeBusiness: true,
    sacramentHymn: { number: 202, title: "There Is a Green Hill Far Away" },
    speakers: [
      { name: "Brother Rivera", topic: "Charity and compassion", type: "speaker" },
      { name: "Primary Choir", topic: "", type: "musical-number" },
    ],
    closingHymn: { number: 123, title: "Come, Come, Ye Saints" },
    closingPrayer: "Sister Gomez",
  },
  {
    id: 4,
    date: "2026-05-24",
    meetingType: "general",
    presiding: "Bishop Adams",
    conducting: "Brother Foster",
    announcements: ["Young women camp registration", "Priesthood breakfast this Saturday"],
    openingHymn: { number: 68, title: "Redeemer of Israel" },
    openingPrayer: "Brother Long",
    wardBusiness: [{ description: "Current needs and ministering assignments" }],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: "O Holy Word" },
    speakers: [
      { name: "Elder Martin", topic: "The blessings of the temple", type: "speaker" },
      { name: "Brother Walker", topic: "Family scripture study", type: "speaker" },
    ],
    closingHymn: { number: 90, title: "Praise to the Man" },
    closingPrayer: "Sister Ramirez",
  },
  {
    id: 5,
    date: "2026-05-31",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Jenkins",
    announcements: ["Relief Society luncheon", "Service project sign-up"],
    openingHymn: { number: 14, title: "Sweet Hour of Prayer" },
    openingPrayer: "Sister Scott",
    wardBusiness: [{ description: "Budget and ministry updates" }],
    stakeBusiness: false,
    sacramentHymn: { number: 177, title: "Take Time to Be Holy" },
    speakers: [
      { name: "Sister Brooks", topic: "Prayer and gratitude", type: "speaker" },
      { name: "Solo", topic: "", type: "musical-number" },
    ],
    closingHymn: { number: 7, title: "Abide with Me" },
    closingPrayer: "Brother Williams",
  },
  {
    id: 6,
    date: "2026-11-01",
    meetingType: "testimony",
    presiding: "Bishop Smith",
    conducting: "Brother Jones",
    announcements: ["Tithing declaration appointments are open", "Ward Christmas party committee meets Tuesday"],
    openingHymn: { number: 19, title: "We Thank Thee, O God, for a Prophet" },
    openingPrayer: "Sister Nelson",
    wardBusiness: [{ description: "Release of the Sunday School secretary" }],
    stakeBusiness: false,
    sacramentHymn: { number: 181, title: "Jesus of Nazareth, Savior and King" },
    speakers: [],
    closingHymn: { number: 85, title: "How Firm a Foundation" },
    closingPrayer: "Brother Harris",
  },
  {
    id: 7,
    date: "2026-11-08",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Moore",
    announcements: ["Stake conference is in two weeks", "Food drive donations due Saturday"],
    openingHymn: { number: 98, title: "I Need Thee Every Hour" },
    openingPrayer: "Sister Evans",
    wardBusiness: [{ description: "Sustaining of new ward clerk" }],
    stakeBusiness: false,
    sacramentHymn: { number: 196, title: "Jesus, Once of Humble Birth" },
    speakers: [
      { name: "Sister Clark", topic: "Gratitude", type: "speaker" },
      { name: "Ward Choir", topic: "", type: "musical-number" },
      { name: "Brother Lewis", topic: "Ministering like the Savior", type: "speaker" },
    ],
    closingHymn: { number: 166, title: "Abide with Me!" },
    closingPrayer: "Brother Turner",
  },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}

// Format a date as YYYY-MM-DD using local time (toISOString would shift it to UTC).
function toDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// Returns the meeting for the most recent Sunday (today if it is Sunday).
// If that Sunday has no entry, falls back to the latest meeting before it.
export function getCurrentSundayMeeting(today: Date = new Date()): SacramentMeeting | null {
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - today.getDay());
  const sundayDate = toDateString(sunday);

  const pastMeetings = meetings
    .filter((meeting) => meeting.date <= sundayDate)
    .sort((a, b) => b.date.localeCompare(a.date));

  return pastMeetings[0] ?? null;
}
