export type Category = { id: string; name: string; subs: { id: string; name: string }[]; facets: string[] };

export const categories: Category[] = [
  {
    id: "domika",
    name: "Δομικά & Στεγανωτικά",
    facets: [],
    subs: [
      { id: "steganotika", name: "Στεγανωτικά & Μονωτικά" },
      { id: "konimata", name: "Επισκευαστικά & Ειδικά Κονιάματα" },
      { id: "xromata", name: "Χρώματα & Οδική Σήμανση" },
    ],
  },
  {
    id: "fotismos",
    name: "Οδοφωτισμός & Φωτισμός Εξωτερικών Χώρων",
    facets: ["Ισχύς (W)", "Θερμοκρασία (K)", "Στεγανότητα (IP)"],
    subs: [
      { id: "led", name: "Φωτιστικά Οδικού Δικτύου (LED)" },
      { id: "astikos", name: "Αστικός & Αρχιτεκτονικός Φωτισμός" },
      { id: "istoi", name: "Ιστοί & Βραχίονες Στήριξης" },
    ],
  },
  {
    id: "map",
    name: "Μέσα Ατομικής Προστασίας (Μ.Α.Π.)",
    facets: ["Μέγεθος", "Πρότυπο", "Χρώμα"],
    subs: [
      { id: "kefali", name: "Προστασία Κεφαλής, Προσώπου & Ακοής" },
      { id: "endysi", name: "Ένδυση & Υπόδηση Ασφαλείας" },
      { id: "gantia", name: "Γάντια Εργασίας" },
      { id: "ergotaxio", name: "Εξοπλισμός Εργοταξίου & Οδική Ασφάλεια" },
    ],
  },
];

export type Product = {
  id: string;
  code: string;
  title: string;
  cat: string;
  sub: string;
  bullets: string[];
  attrs: Record<string, string>;
};

export const products: Product[] = [
  { id: "led-100", code: "OF-LED-100", title: "Φωτιστικό Δρόμου LED 100W IP66", cat: "fotismos", sub: "led",
    bullets: ["Φωτεινή ροή 14.000 lm", "Απόδοση 140 lm/W", "Σώμα αλουμινίου χυτοπρεσσαριστό", "Εγγύηση 5 ετών"],
    attrs: { "Ισχύς (W)": "100W", "Θερμοκρασία (K)": "4000K", "Στεγανότητα (IP)": "IP66" } },
  { id: "led-60", code: "OF-LED-060", title: "Φωτιστικό Δρόμου LED 60W IP66", cat: "fotismos", sub: "led",
    bullets: ["Φωτεινή ροή 8.400 lm", "Οπτικό τύπου II", "Προστασία υπερτάσεων 10kV"],
    attrs: { "Ισχύς (W)": "60W", "Θερμοκρασία (K)": "3000K", "Στεγανότητα (IP)": "IP66" } },
  { id: "led-150", code: "OF-LED-150", title: "Προβολέας LED 150W IP65", cat: "fotismos", sub: "astikos",
    bullets: ["Γωνία δέσμης 60°", "Για πλατείες & γήπεδα", "Driver Meanwell"],
    attrs: { "Ισχύς (W)": "150W", "Θερμοκρασία (K)": "5000K", "Στεγανότητα (IP)": "IP65" } },
  { id: "bollard", code: "OF-BOL-020", title: "Φωτιστικό Κολωνάκι Πεζοδρόμου 20W IP65", cat: "fotismos", sub: "astikos",
    bullets: ["Ύψος 80 cm", "Ανοδιωμένο αλουμίνιο", "Αντιβανδαλιστικό κάλυμμα"],
    attrs: { "Ισχύς (W)": "20W", "Θερμοκρασία (K)": "3000K", "Στεγανότητα (IP)": "IP65" } },
  { id: "istos-8", code: "OF-IST-080", title: "Ιστός Οδοφωτισμού Κωνικός 8m Γαλβανιζέ", cat: "fotismos", sub: "istoi",
    bullets: ["Θερμό γαλβάνισμα κατά EN ISO 1461", "Με θυρίδα ακροκιβωτίου", "Κατά EN 40"],
    attrs: { "Ισχύς (W)": "—", "Θερμοκρασία (K)": "—", "Στεγανότητα (IP)": "—" } },
  { id: "kranos", code: "MAP-KRN-01", title: "Κράνος Ασφαλείας ABS με Ρυθμιστή", cat: "map", sub: "kefali",
    bullets: ["Πιστοποίηση EN 397", "Εσωτερικό 6 σημείων", "Υποδοχή για ωτοασπίδες"],
    attrs: { "Μέγεθος": "Universal", "Πρότυπο": "EN 397", "Χρώμα": "Λευκό" } },
  { id: "papoutsi", code: "MAP-YPD-S3", title: "Υπόδημα Ασφαλείας S3 SRC", cat: "map", sub: "endysi",
    bullets: ["Πιστοποίηση EN ISO 20345", "Ατσάλινο προστατευτικό δακτύλων", "Αντιολισθητική σόλα SRC"],
    attrs: { "Μέγεθος": "38–47", "Πρότυπο": "EN ISO 20345", "Χρώμα": "Μαύρο" } },
  { id: "jileko", code: "MAP-END-HV", title: "Γιλέκο Υψηλής Ευκρίνειας Class 2", cat: "map", sub: "endysi",
    bullets: ["Πιστοποίηση EN ISO 20471", "Ανακλαστικές ταινίες 5cm", "Δυνατότητα εκτύπωσης λογοτύπου"],
    attrs: { "Μέγεθος": "M–XXL", "Πρότυπο": "EN ISO 20471", "Χρώμα": "Κίτρινο" } },
  { id: "gantia-nitr", code: "MAP-GNT-NT", title: "Γάντια Εργασίας Νιτριλίου", cat: "map", sub: "gantia",
    bullets: ["Πιστοποίηση EN 388 (4121X)", "Επένδυση νιτριλίου", "Συσκευασία 12 ζευγών"],
    attrs: { "Μέγεθος": "8–10", "Πρότυπο": "EN 388", "Χρώμα": "Μπλε" } },
  { id: "kono", code: "MAP-ERG-K75", title: "Κώνος Σήμανσης 75cm με Ανακλαστικά", cat: "map", sub: "ergotaxio",
    bullets: ["Κατά ΟΜΟΕ-ΣΕΕΟ", "Βαρύ ελαστικό βάσης", "2 ανακλαστικές λωρίδες"],
    attrs: { "Μέγεθος": "75 cm", "Πρότυπο": "EN 13422", "Χρώμα": "Πορτοκαλί" } },
  { id: "steg", code: "DOM-STG-PU", title: "Ελαστομερές Στεγανωτικό Πολυουρεθάνης 25kg", cat: "domika", sub: "steganotika",
    bullets: ["Κατά EN 1504-2", "Γεφύρωση ρωγμών >2mm", "Αντοχή UV"], attrs: {} },
  { id: "konima", code: "DOM-KON-R4", title: "Επισκευαστικό Κονίαμα R4 Ινοπλισμένο 25kg", cat: "domika", sub: "konimata",
    bullets: ["Κατηγορία R4 κατά EN 1504-3", "Για δομικές επισκευές", "Θιξοτροπικό"], attrs: {} },
  { id: "xroma", code: "DOM-XRM-OD", title: "Χρώμα Οδικής Σήμανσης Ακρυλικό Λευκό 25kg", cat: "domika", sub: "xromata",
    bullets: ["Κατά EN 1871", "Γρήγορο στέγνωμα", "Για υαλοσφαιρίδια"], attrs: {} },
];

export const catName = (id: string) => categories.find((c) => c.id === id)?.name ?? "";
export const subName = (id: string) =>
  categories.flatMap((c) => c.subs).find((s) => s.id === id)?.name ?? "";
