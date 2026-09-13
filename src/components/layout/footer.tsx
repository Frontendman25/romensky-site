import Link from "next/link";
import { links, navItems, site } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <Container className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink">
          <span className="font-semibold">{site.mark}</span> {site.name}
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted" aria-label="Footer">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={links.resume}
            download
            className="hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Download CV
          </a>
        </nav>
        <p className="text-sm text-ink-muted">© {new Date().getFullYear()} {site.name}</p>
      </Container>
    </footer>
  );
}
