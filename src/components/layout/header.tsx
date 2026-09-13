"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { links, navItems, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const lockedUntil = useRef(0);
  const menuId = useId();
  const onHome = pathname === "/";

  useEffect(() => {
    if (!open) {
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!onHome) {
      setActiveId(null);
      return;
    }

    const update = () => {
      if (performance.now() < lockedUntil.current) {
        return;
      }

      const marker = 88;
      let current: string | null = null;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) {
          continue;
        }
        if (el.getBoundingClientRect().top - marker <= 0) {
          current = item.id;
        }
      }

      const scrolledToEnd =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 12;
      if (scrolledToEnd) {
        current = "contact";
      }

      setActiveId((prev) => (prev === current ? prev : current));
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onHome]);

  const goToSection = (id: string) => {
    lockedUntil.current = performance.now() + 1100;
    setActiveId(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper">
      <Container className="grid h-[4.25rem] grid-cols-[auto_1fr_auto] items-center gap-3">
        <Link
          href="/"
          className="flex items-baseline gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <span className="font-sans text-lg font-semibold tracking-tight text-ink">{site.mark}</span>
          <span className="hidden text-sm text-ink-muted sm:inline">{site.name}</span>
        </Link>

        <nav className="hidden items-center justify-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={onHome ? `#${item.id}` : item.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative pb-1 text-sm transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                  isActive ? "text-ink after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-accent" : "text-ink-muted",
                )}
                onClick={() => goToSection(item.id)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center justify-end">
          <ButtonLink href={links.resume} variant="ghost" className="hidden px-3 lg:inline-flex">
            Download CV
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-sm border border-line text-ink lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <Menu size={18} className={open ? "hidden" : "block"} />
            <X size={18} className={open ? "block" : "hidden"} />
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-line bg-paper lg:hidden">
          <Container id={menuId} className="py-6">
            <nav className="flex flex-col gap-4" aria-label="Mobile">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={onHome ? `#${item.id}` : item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "text-lg",
                      isActive
                        ? "text-ink underline decoration-accent decoration-2 underline-offset-4"
                        : "text-ink",
                    )}
                    onClick={() => goToSection(item.id)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <div className="mt-6">
              <ButtonLink href={links.resume} variant="secondary" className="w-full">
                Download CV
              </ButtonLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
