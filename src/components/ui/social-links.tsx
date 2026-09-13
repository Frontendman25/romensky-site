import {
  siGithub,
  siGmail,
  siGooglecalendar,
  siRakuten,
  siTelegram,
  siUpwork,
  siWhatsapp,
  siX,
} from "simple-icons";
import type { ContactChannel } from "@/data/site";
import { BrandGlyph } from "@/components/icons/brand-glyph";
import { cn } from "@/lib/cn";

/** Official LinkedIn mark — Simple Icons no longer ships it. */
const linkedIn = {
  title: "LinkedIn",
  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

export function ChannelIcon({
  id,
  className,
}: {
  id: ContactChannel["id"];
  className?: string;
}) {
  const glyphClass = cn("size-4", className);

  switch (id) {
    case "email":
      return <BrandGlyph icon={siGmail} fill={`#${siGmail.hex}`} className={glyphClass} />;
    case "linkedin":
      return <BrandGlyph icon={linkedIn} fill="#0A66C2" className={glyphClass} />;
    case "github":
      return <BrandGlyph icon={siGithub} fill={`#${siGithub.hex}`} className={glyphClass} />;
    case "twitter":
      return <BrandGlyph icon={siX} fill={`#${siX.hex}`} className={glyphClass} />;
    case "telegram":
      return <BrandGlyph icon={siTelegram} fill={`#${siTelegram.hex}`} className={glyphClass} />;
    case "whatsapp":
      return <BrandGlyph icon={siWhatsapp} fill={`#${siWhatsapp.hex}`} className={glyphClass} />;
    case "upwork":
      return <BrandGlyph icon={siUpwork} fill={`#${siUpwork.hex}`} className={glyphClass} />;
    case "call":
      return <BrandGlyph icon={siGooglecalendar} fill={`#${siGooglecalendar.hex}`} className={glyphClass} />;
    default:
      return null;
  }
}

export function CompanyMark({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  if (id === "rakuten") {
    return <BrandGlyph icon={siRakuten} fill={`#${siRakuten.hex}`} className={className} title="Rakuten" />;
  }
  return null;
}

function linkProps(href: string) {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return { target: "_blank" as const, rel: "noopener noreferrer" };
  }
  return {};
}

export function CompactSocialRow({
  channels,
  className,
}: {
  channels: readonly ContactChannel[];
  className?: string;
}) {
  if (channels.length === 0) {
    return null;
  }

  return (
    <ul className={cn("flex flex-wrap items-center gap-x-4 gap-y-2", className)}>
      {channels.map((channel) => (
        <li key={channel.id}>
          <a
            href={channel.href}
            aria-label={channel.label}
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
            {...linkProps(channel.href)}
          >
            <ChannelIcon id={channel.id} className="size-[18px]" />
            <span>{channel.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
