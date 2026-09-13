import { technologyGroups } from "@/data/technologies";
import { TechIcon } from "@/components/icons/tech-icon";
import { Container } from "@/components/ui/container";

export function Technologies() {
  return (
    <section id="stack" className="scroll-mt-24 bg-ink py-[clamp(1.7rem,3.4vw,2.5rem)] text-paper">
      <Container>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] text-accent uppercase">02 — Core stack</p>
            <h2 className="mt-2 text-[clamp(1.35rem,2.4vw,1.75rem)] font-semibold tracking-[-0.03em]">
              Full-stack by default
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-paper/65">
            Interface, APIs, data and delivery — grouped so you can scan the stack quickly.
          </p>
        </div>

        <div className="mt-7 grid gap-8 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {technologyGroups.map((group) => (
            <div key={group.group}>
              <h3 className="text-[0.68rem] font-medium tracking-[0.18em] text-accent uppercase">
                {group.group}
              </h3>
              <ul className="mt-4 space-y-3.5">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="mt-0.5">
                      <TechIcon name={item.icon} className="size-6" onDark />
                    </span>
                    <span>
                      <span className="block text-sm font-medium tracking-tight text-paper">{item.name}</span>
                      <span className="mt-0.5 block text-xs leading-snug text-paper/55">{item.label}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
