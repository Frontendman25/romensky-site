export const site = {
  name: "Vitaly Romensky",
  mark: "VR.",
  role: "Senior Full-Stack / Software Engineer",
  headlineLead: "I build web products",
  headlineEmphasis: "that make sense.",
  summary:
    "Senior Full-Stack Engineer with 8+ years of experience building production web applications with React, Next.js, TypeScript, and Node.js — from frontend architecture and authentication to APIs, databases, testing, and deployment.",
  location: "Germany · Remote B2B / Contract",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "superfullstackdev@gmail.com",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/vitaly-javascript-developer-116493203",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/Frontendman25",
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL ?? "https://x.com/viromix",
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "",
  upwork: process.env.NEXT_PUBLIC_UPWORK_URL ?? "",
  calendar: process.env.NEXT_PUBLIC_CALENDAR_URL ?? "",
  cvHref: "/vitaly-romensky-cv.pdf",
  photo: "/images/vitaly.jpg",
  aboutPhoto: "/images/about-vitaly.jpg",
} as const;

/** Canonical URLs — every UI surface must read from here. */
export const links = {
  email: site.email,
  mailto: `mailto:${site.email}`,
  linkedin: site.linkedin,
  github: site.github,
  twitter: site.twitter,
  telegram: site.telegram,
  whatsapp: site.whatsapp,
  upwork: site.upwork,
  calendar: site.calendar,
  resume: site.cvHref,
} as const;

export const navItems = [
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#services", label: "Services", id: "services" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#contact", label: "Contact", id: "contact" },
] as const;

export type ContactChannelId =
  | "email"
  | "linkedin"
  | "github"
  | "twitter"
  | "telegram"
  | "whatsapp"
  | "upwork"
  | "call";

export type ContactChannel = {
  id: ContactChannelId;
  label: string;
  href: string;
  detail: string;
};

function definedChannel(
  id: ContactChannelId,
  label: string,
  href: string,
  detail: string,
): ContactChannel | null {
  if (!href) {
    return null;
  }
  return { id, label, href, detail };
}

const allChannels = (): ContactChannel[] =>
  [
    definedChannel("email", "Email", links.mailto, links.email),
    definedChannel("linkedin", "LinkedIn", links.linkedin, "Professional profile"),
    definedChannel("github", "GitHub", links.github, "Selected public work"),
    definedChannel("twitter", "X", links.twitter, "Updates"),
    definedChannel("telegram", "Telegram", links.telegram, "Direct message"),
    definedChannel("whatsapp", "WhatsApp", links.whatsapp, "Message"),
    definedChannel("upwork", "Upwork", links.upwork, "Contract work"),
    definedChannel("call", "Book a call", links.calendar, "15–30 minutes"),
  ].filter((channel): channel is ContactChannel => channel !== null);

export function getHeroSocials(): ContactChannel[] {
  const allowed = new Set<ContactChannelId>(["email", "linkedin", "github", "twitter"]);
  return allChannels().filter((channel) => allowed.has(channel.id));
}

export function getPrimaryContactChannels(): ContactChannel[] {
  const allowed = new Set<ContactChannelId>(["email", "linkedin", "github", "twitter", "upwork"]);
  return allChannels().filter((channel) => allowed.has(channel.id));
}
