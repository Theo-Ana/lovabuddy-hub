import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/Shell";
import { categories, products, subName } from "@/lib/catalog";
import { useQuote } from "@/lib/quote";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Κατάλογος B2B – GPTA DOMUS EMPIRE" },
      { name: "description", content: "Οδοφωτισμός, ΜΑΠ και δομικά υλικά για δήμους και εργολάβους. Ζητήστε προσφορά." },
      { property: "og:title", content: "Κατάλογος B2B – GPTA DOMUS EMPIRE" },
      { property: "og:description", content: "Οδοφωτισμός, ΜΑΠ και δομικά υλικά για δημόσια έργα." },
    ],
  }),
  component: Index,
});

function Index() {
  const [cat, setCat] = useState<string | null>(null);
  const [sub, setSub] = useState<string | null>(null);
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const { add } = useQuote();
  const current = categories.find((c) => c.id === cat);

  const list = useMemo(() => products.filter((p) =>
    (!cat || p.cat === cat) && (!sub || p.sub === sub) &&
    Object.entries(filters).every(([k, v]) => v.length === 0 || v.includes(p.attrs[k]))), [cat, sub, filters]);

  const toggle = (k: string, v: string) => setFilters((f) => {
    const cur = f[k] ?? [];
    return { ...f, [k]: cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v] };
  });

  return (
    <Shell>
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="font-mono text-xs text-accent">ΠΡΟΜΗΘΕΙΕΣ ΔΗΜΟΣΙΩΝ ΕΡΓΩΝ</p>
          <h1 className="mt-2 text-4xl font-bold max-w-2xl">Τεχνικά υλικά με πλήρη τεκμηρίωση TDS & CE.</h1>
          <p className="mt-3 max-w-xl opacity-80">Προσθέστε προϊόντα στη λίστα ζήτησης, επισυνάψτε τη μελέτη σας και λάβετε προσφορά.</p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 py-8 grid md:grid-cols-[260px_1fr] gap-8">
        <aside className="space-y-6 text-sm">
          <div>
            <h3 className="font-mono text-xs text-muted-foreground mb-2">ΚΑΤΗΓΟΡΙΕΣ</h3>
            <button onClick={() => { setCat(null); setSub(null); setFilters({}); }}
              className={`block w-full text-left py-1.5 ${!cat ? "font-bold text-primary" : ""}`}>Όλα τα προϊόντα</button>
            {categories.map((c) => (
              <div key={c.id} className="mt-2">
                <button onClick={() => { setCat(c.id); setSub(null); setFilters({}); }}
                  className={`text-left font-semibold py-1 ${cat === c.id && !sub ? "text-primary" : ""}`}>{c.name}</button>
                <div className="border-l ml-1 pl-3">
                  {c.subs.map((s) => (
                    <button key={s.id} onClick={() => { setCat(c.id); setSub(s.id); }}
                      className={`block text-left py-1 text-muted-foreground hover:text-foreground ${sub === s.id ? "text-primary font-medium" : ""}`}>{s.name}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {current?.facets.map((f) => {
            const vals = [...new Set(products.filter((p) => p.cat === current.id).map((p) => p.attrs[f]).filter((v) => v && v !== "—"))];
            return (
              <div key={f}>
                <h3 className="font-mono text-xs text-muted-foreground mb-2">{f.toUpperCase()}</h3>
                {vals.map((v) => (
                  <label key={v} className="flex items-center gap-2 py-0.5 cursor-pointer">
                    <input type="checkbox" className="accent-primary" checked={filters[f]?.includes(v) ?? false} onChange={() => toggle(f, v)} />
                    {v}
                  </label>
                ))}
              </div>
            );
          })}
        </aside>
        <div>
          <p className="text-sm text-muted-foreground mb-4">{list.length} προϊόντα</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {list.map((p) => (
              <div key={p.id} className="border bg-card p-5 flex flex-col">
                <span className="font-mono text-xs text-muted-foreground">{p.code} · {subName(p.sub)}</span>
                <Link to="/product/$id" params={{ id: p.id }} className="mt-2 font-semibold leading-snug hover:text-primary">{p.title}</Link>
                <ul className="mt-3 text-sm text-muted-foreground space-y-1 flex-1">
                  {p.bullets.slice(0, 2).map((b) => <li key={b}>— {b}</li>)}
                </ul>
                <div className="mt-4 flex gap-2">
                  <button onClick={() => add(p.id)} className="flex-1 bg-primary text-primary-foreground py-2 text-sm font-semibold">+ Ζήτηση</button>
                  <Link to="/product/$id" params={{ id: p.id }} className="border px-3 py-2 text-sm">Τεχνικά</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
