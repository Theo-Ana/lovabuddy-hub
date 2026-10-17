import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { products } from "@/lib/catalog";
import { demoRequests } from "@/lib/quote";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Διαχείριση Ζητήσεων – GPTA DOMUS EMPIRE" },
      { name: "description", content: "Πίνακας διαχείρισης αιτημάτων προσφοράς." },
      { property: "og:title", content: "Διαχείριση Ζητήσεων" },
      { property: "og:description", content: "Αιτήματα προσφοράς από δήμους και εργολάβους." },
    ],
  }),
  component: Admin,
});

function Admin() {
  return (
    <Shell>
      <div className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-bold">Ζητήσεις Προσφοράς</h1>
        <p className="text-sm text-muted-foreground mt-1">Δείγμα δεδομένων (πρότυπο).</p>
        <div className="mt-6 space-y-4">
          {demoRequests.map((r) => (
            <div key={r.id} className="border bg-card p-5">
              <div className="flex justify-between flex-wrap gap-2">
                <div><span className="font-mono text-xs text-muted-foreground">{r.id} · {r.date}</span><h2 className="font-semibold text-lg">{r.company}</h2></div>
                <span className="bg-accent text-accent-foreground px-2 py-1 text-xs font-semibold h-fit">ΝΕΟ</span>
              </div>
              <p className="mt-1 text-sm">Έργο: <b>{r.project}</b></p>
              <p className="text-sm text-muted-foreground">ΑΦΜ {r.afm} · {r.phone} · {r.email}</p>
              <ul className="mt-3 text-sm">
                {r.items.map((i) => <li key={i.id} className="font-mono">{i.qty} × {products.find((p) => p.id === i.id)?.title}</li>)}
              </ul>
              <div className="mt-3 flex gap-2 flex-wrap">
                {r.files.map((f) => <span key={f} className="border px-2 py-1 text-xs font-mono">📎 {f}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}
