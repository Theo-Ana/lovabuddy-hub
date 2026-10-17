import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { toast } from "sonner";
import { Shell } from "@/components/Shell";
import { catName, products, subName } from "@/lib/catalog";
import { useQuote } from "@/lib/quote";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const p = products.find((x) => x.id === params.id);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Προϊόν"} – GPTA DOMUS EMPIRE` },
      { name: "description", content: loaderData?.bullets.join(", ") ?? "" },
      { property: "og:title", content: loaderData?.title ?? "Προϊόν" },
      { property: "og:description", content: loaderData?.bullets.join(", ") ?? "" },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const p = Route.useLoaderData();
  const { add } = useQuote();
  const specs = Object.entries(p.attrs).filter(([, v]) => v !== "—");
  return (
    <Shell>
      <div className="mx-auto max-w-5xl px-6 py-10">
        <p className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Κατάλογος</Link> / {catName(p.cat)} / {subName(p.sub)}
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-10">
          <div className="bg-secondary aspect-square flex items-center justify-center font-mono text-secondary-foreground/60">{p.code}</div>
          <div>
            <span className="font-mono text-xs text-muted-foreground">ΚΩΔ. {p.code}</span>
            <h1 className="mt-1 text-3xl font-bold leading-tight">{p.title}</h1>
            <ul className="mt-5 space-y-2">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2"><span className="text-primary font-bold">■</span>{b}</li>
              ))}
            </ul>
            <button onClick={() => { add(p.id); toast.success("Προστέθηκε στη λίστα ζήτησης"); }}
              className="mt-8 w-full bg-primary text-primary-foreground py-4 text-lg font-bold hover:opacity-90">
              Προσθήκη στη Ζήτηση
            </button>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a href="#" onClick={(e) => { e.preventDefault(); toast("Δείγμα: εδώ θα κατεβαίνει το TDS (PDF)"); }}
                className="border-2 border-foreground py-3 text-center text-sm font-semibold hover:bg-accent">↓ Τεχνικό Φυλλάδιο (TDS)</a>
              <a href="#" onClick={(e) => { e.preventDefault(); toast("Δείγμα: εδώ θα κατεβαίνει η Πιστοποίηση CE (PDF)"); }}
                className="border-2 border-foreground py-3 text-center text-sm font-semibold hover:bg-accent">↓ Πιστοποίηση (CE)</a>
            </div>
            {specs.length > 0 && (
              <table className="mt-8 w-full text-sm">
                <tbody>
                  {specs.map(([k, v]) => (
                    <tr key={k} className="border-b"><td className="py-2 text-muted-foreground">{k}</td><td className="py-2 font-mono text-right">{v}</td></tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </Shell>
  );
}
