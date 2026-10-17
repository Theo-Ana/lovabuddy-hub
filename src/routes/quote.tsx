import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/Shell";
import { products } from "@/lib/catalog";
import { useQuote } from "@/lib/quote";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Λίστα Ζήτησης Προσφοράς – GPTA DOMUS EMPIRE" },
      { name: "description", content: "Ολοκληρώστε τη ζήτηση προσφοράς με στοιχεία έργου και επισύναψη μελέτης." },
      { property: "og:title", content: "Ζήτηση Προσφοράς – GPTA DOMUS EMPIRE" },
      { property: "og:description", content: "Στείλτε τη λίστα υλικών και τη μελέτη του έργου σας." },
    ],
  }),
  component: QuotePage,
});

const field = "w-full border bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring";

function QuotePage() {
  const { items, setQty, remove, clear } = useQuote();
  const [files, setFiles] = useState<File[]>([]);
  const [sent, setSent] = useState(false);

  if (sent) return (
    <Shell><div className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Η ζήτηση στάλθηκε</h1>
      <p className="mt-3 text-muted-foreground">Θα λάβετε προσφορά στο email σας. (Πρότυπο – δεν αποστέλλεται πραγματικά.)</p>
      <Link to="/" className="inline-block mt-6 bg-primary text-primary-foreground px-6 py-3 font-semibold">Επιστροφή στον κατάλογο</Link>
    </div></Shell>
  );

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-6 py-10 grid lg:grid-cols-[1fr_420px] gap-10">
        <div>
          <h1 className="text-3xl font-bold">Λίστα Ζήτησης</h1>
          {items.length === 0 ? (
            <p className="mt-6 text-muted-foreground">Η λίστα είναι κενή. <Link to="/" className="text-primary underline">Δείτε τον κατάλογο</Link>.</p>
          ) : (
            <div className="mt-6 border bg-card divide-y">
              {items.map((i) => {
                const p = products.find((x) => x.id === i.id)!;
                return (
                  <div key={i.id} className="flex items-center gap-4 p-4">
                    <div className="flex-1"><p className="font-mono text-xs text-muted-foreground">{p.code}</p><p className="font-medium">{p.title}</p></div>
                    <input type="number" min={1} value={i.qty} onChange={(e) => setQty(i.id, +e.target.value)} className="w-24 border px-2 py-1.5 font-mono" />
                    <button onClick={() => remove(i.id)} className="text-sm text-destructive">Αφαίρεση</button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); clear(); setSent(true); }} className="border bg-card p-6 space-y-4 h-fit">
          <h2 className="text-xl font-bold">Στοιχεία Φορέα / Εργολάβου</h2>
          <input required placeholder="Επωνυμία *" className={field} />
          <div className="grid grid-cols-2 gap-3">
            <input required placeholder="ΑΦΜ *" pattern="\d{9}" title="9 ψηφία" className={field} />
            <input required placeholder="Τηλέφωνο *" type="tel" className={field} />
          </div>
          <input required placeholder="Email *" type="email" className={field} />
          <input required placeholder="Τίτλος / Κωδικός Έργου *" className={field} />
          <textarea placeholder="Σχόλια" rows={3} className={field} />
          <label className="block border-2 border-dashed p-4 text-center cursor-pointer hover:bg-accent">
            <span className="font-semibold">Επισύναψη Αρχείου (PDF/Excel)</span>
            <span className="block text-xs text-muted-foreground mt-1">Μελέτες, προϋπολογισμοί, τεύχη</span>
            <input type="file" multiple accept=".pdf,.xls,.xlsx,.csv" className="hidden" onChange={(e) => setFiles([...(e.target.files ?? [])])} />
          </label>
          {files.map((f) => <p key={f.name} className="text-sm font-mono">📎 {f.name}</p>)}
          <button disabled={items.length === 0} className="w-full bg-primary text-primary-foreground py-3 font-bold disabled:opacity-40">Αποστολή Ζήτησης</button>
        </form>
      </div>
    </Shell>
  );
}
