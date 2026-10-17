import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type QuoteItem = { id: string; qty: number };
export type QuoteRequest = {
  id: string; date: string; company: string; afm: string; phone: string; email: string;
  project: string; notes: string; files: string[]; items: QuoteItem[];
};

type Ctx = {
  items: QuoteItem[];
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};
const QuoteCtx = createContext<Ctx | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  useEffect(() => {
    const s = localStorage.getItem("quote");
    if (s) setItems(JSON.parse(s));
  }, []);
  const save = (n: QuoteItem[]) => { setItems(n); localStorage.setItem("quote", JSON.stringify(n)); };
  return (
    <QuoteCtx.Provider value={{
      items,
      add: (id) => save(items.some((i) => i.id === id) ? items.map((i) => i.id === id ? { ...i, qty: i.qty + 1 } : i) : [...items, { id, qty: 1 }]),
      setQty: (id, qty) => save(items.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i))),
      remove: (id) => save(items.filter((i) => i.id !== id)),
      clear: () => save([]),
    }}>{children}</QuoteCtx.Provider>
  );
}
export const useQuote = () => useContext(QuoteCtx)!;

export const demoRequests: QuoteRequest[] = [
  { id: "Q-1042", date: "15/10/2026", company: "Δήμος Παλλήνης – Τεχνική Υπηρεσία", afm: "997654321", phone: "2106600000", email: "texniki@pallini.gr",
    project: "Αναβάθμιση Οδοφωτισμού Δ.Ε. Γέρακα – ΑΜ 23/2026", notes: "Ζητείται και φωτοτεχνική μελέτη.", files: ["meleti_odofotismou.pdf", "proypologismos.xlsx"],
    items: [{ id: "led-100", qty: 240 }, { id: "istos-8", qty: 60 }] },
  { id: "Q-1041", date: "12/10/2026", company: "ΤΕΚΤΩΝ Κατασκευαστική Α.Τ.Ε.", afm: "801234567", phone: "2310555111", email: "promithies@tekton.gr",
    project: "Ανάπλαση Πλατείας Αγ. Σοφίας", notes: "", files: ["boq.xlsx"],
    items: [{ id: "bollard", qty: 35 }, { id: "papoutsi", qty: 20 }, { id: "jileko", qty: 40 }] },
];
