import { ArrowUpRight } from "lucide-react";
import { getPrimaryContactChannels } from "@/data/site";
import { Container } from "@/components/ui/container";
import { ChannelIcon } from "@/components/ui/social-links";
import { Reveal } from "@/components/motion/reveal";

function isHttp(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function Contact() {
  const channels = getPrimaryContactChannels();

  return (
    <section id="contact" className="scroll-mt-24 bg-accent py-[clamp(2.5rem,5vw,4.5rem)]">
      <Container>
        <Reveal>
          <p className="text-[0.7rem] font-medium tracking-[0.22em] text-ink uppercase">08 — Let’s connect</p>
          <h2 className="mt-3 max-w-[16ch] text-[clamp(2.1rem,4.4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink">
            Have a project or opportunity?
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/80">
            Roles, contract work, or a product you want built. Email or LinkedIn is the fastest way to
            reach me.
          </p>
          <ul className="mt-8 grid max-w-2xl gap-0 sm:grid-cols-2 sm:gap-x-10">
            {channels.map((channel) => (
              <li key={channel.id}>
                <a
                  href={channel.href}
                  className="group flex items-center justify-between gap-4 border-b border-ink/15 py-4 text-ink"
                  {...(isHttp(channel.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="flex items-center gap-3">
                    <ChannelIcon id={channel.id} className="size-5" />
                    <span>
                      <span className="block text-sm font-medium">{channel.label}</span>
                      <span className="block text-sm text-ink/70">{channel.detail}</span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
