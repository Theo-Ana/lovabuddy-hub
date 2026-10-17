import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useQuote } from "@/lib/quote";

export function Shell({ children }: { children: ReactNode }) {
  const { items } = useQuote();
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-primary text-primary-foreground text-xs font-mono px-6 py-1.5">
        B2B ΚΑΤΑΛΟΓΟΣ ΓΙΑ ΔΗΜΟΥΣ & ΕΡΓΟΛΑΒΟΥΣ — ΤΙΜΕΣ ΜΟΝΟ ΜΕ ΠΡΟΣΦΟΡΑ
      </div>
      <header className="border-b bg-card">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-6">
          <Link to="/" className="font-bold tracking-tight text-lg">
            GPTA <span className="text-accent-foreground bg-accent px-1.5">DOMUS</span> EMPIRE
          </Link>
          <nav className="flex items-center gap-5 text-sm">
            <Link to="/" className="hover:text-primary">Κατάλογος</Link>
            <Link to="/admin" className="hover:text-primary text-muted-foreground">Διαχείριση</Link>
            <Link to="/quote" className="bg-primary text-primary-foreground px-4 py-2 font-semibold">
              Λίστα Ζήτησης ({items.reduce((a, i) => a + i.qty, 0)})
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-card text-sm text-muted-foreground">
        <div className="mx-auto max-w-7xl px-6 py-6 flex justify-between flex-wrap gap-2">
          <span>GPTA DOMUS EMPIRE E.E.</span>
          <a href="mailto:gpta@domusempire.gr">gpta@domusempire.gr</a>
        </div>
      </footer>
    </div>
  );
}
