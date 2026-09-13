import { Container } from "@/components/ui/container";

export function VideoIntro() {
  return (
    <section
      id="intro"
      aria-label="Video introduction"
      className="scroll-mt-24 border-y border-line bg-paper-elevated py-5"
    >
      <Container className="flex items-center gap-4">
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-xs font-semibold tracking-wide text-ink">
          ▶
        </span>
        <div>
          <p className="text-[0.68rem] font-medium tracking-[0.2em] text-accent-ink uppercase">07 — Introduction</p>
          <p className="mt-0.5 text-sm text-ink">
            A 60–90 second video introduction will live here. Nothing autoplays.
          </p>
        </div>
      </Container>
    </section>
  );
}
