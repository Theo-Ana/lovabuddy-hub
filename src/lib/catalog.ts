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
  { id: "led-30", code: "OF-LED-030", title: "Φωτιστικό Δρόμου LED 30W IP66 για Οικιστικούς Δρόμους", cat: "fotismos", sub: "led", bullets: ["Κατά EN 60598-2-3 & EN 13201", "Κλάση μόνωσης II", "IK08 κατά EN 62262"], attrs: { "Ισχύς (W)": "30W", "Θερμοκρασία (K)": "3000K", "Στεγανότητα (IP)": "IP66" } },
  { id: "led-200", code: "OF-LED-200", title: "Φωτιστικό Δρόμου LED 200W IP66 για Λεωφόρους", cat: "fotismos", sub: "led", bullets: ["Κατά EN 60598-2-3", "Φωτοβιολογική ασφάλεια EN 62471 (RG0)", "Υποδοχή NEMA/Zhaga για τηλεδιαχείριση"], attrs: { "Ισχύς (W)": "200W", "Θερμοκρασία (K)": "4000K", "Στεγανότητα (IP)": "IP66" } },
  { id: "led-dali", code: "OF-LED-080D", title: "Φωτιστικό Δρόμου LED 80W DALI με Dimming", cat: "fotismos", sub: "led", bullets: ["Πρωτόκολλο DALI-2", "Σήμανση CE & ENEC", "Συμμόρφωση RoHS 2011/65/EE"], attrs: { "Ισχύς (W)": "80W", "Θερμοκρασία (K)": "2700K", "Στεγανότητα (IP)": "IP66" } },
  { id: "fanari", code: "OF-AST-040", title: "Φανοστάτης Κλασικού Τύπου LED 40W", cat: "fotismos", sub: "astikos", bullets: ["Κατά EN 60598-1", "Για ιστορικά κέντρα", "Αλουμίνιο με βαφή πούδρας RAL"], attrs: { "Ισχύς (W)": "40W", "Θερμοκρασία (K)": "2700K", "Στεγανότητα (IP)": "IP65" } },
  { id: "xoneuto", code: "OF-AST-012", title: "Χωνευτό Φωτιστικό Δαπέδου LED 12W", cat: "fotismos", sub: "astikos", bullets: ["Βατό έως 2.000 kg", "IK10 κατά EN 62262", "Γυαλί tempered"], attrs: { "Ισχύς (W)": "12W", "Θερμοκρασία (K)": "3000K", "Στεγανότητα (IP)": "IP67" } },
  { id: "solar", code: "OF-AST-SOL", title: "Ηλιακό Φωτιστικό Δρόμου LED 50W All-in-One", cat: "fotismos", sub: "astikos", bullets: ["Μπαταρία LiFePO4", "Αισθητήρας κίνησης PIR", "Αυτονομία 3 νυχτών"], attrs: { "Ισχύς (W)": "50W", "Θερμοκρασία (K)": "5000K", "Στεγανότητα (IP)": "IP65" } },
  { id: "istos-10", code: "OF-IST-100", title: "Ιστός Οδοφωτισμού Οκταγωνικός 10m", cat: "fotismos", sub: "istoi", bullets: ["Κατά EN 40-5", "Θερμό γαλβάνισμα EN ISO 1461", "Σήμανση CE κατά CPR 305/2011"], attrs: { "Ισχύς (W)": "—", "Θερμοκρασία (K)": "—", "Στεγανότητα (IP)": "—" } },
  { id: "vraxionas", code: "OF-IST-BR2", title: "Βραχίονας Διπλός 1,5m Γαλβανιζέ", cat: "fotismos", sub: "istoi", bullets: ["Κλίση 5°/15°", "Κατά EN 40-5", "Για ιστούς Ø60–76mm"], attrs: { "Ισχύς (W)": "—", "Θερμοκρασία (K)": "—", "Στεγανότητα (IP)": "—" } },
  { id: "prosopida", code: "MAP-PRS-01", title: "Προσωπίδα Προστασίας Πολυανθρακικού", cat: "map", sub: "kefali", bullets: ["Πιστοποίηση EN 166", "Αντιθαμβωτική επεξεργασία", "Συμβατή με κράνος EN 397"], attrs: { "Μέγεθος": "Universal", "Πρότυπο": "EN 166", "Χρώμα": "Διάφανο" } },
  { id: "otoaspides", code: "MAP-OTO-30", title: "Ωτοασπίδες SNR 30dB", cat: "map", sub: "kefali", bullets: ["Πιστοποίηση EN 352-1", "Κανονισμός ΜΑΠ (ΕΕ) 2016/425", "Ρυθμιζόμενη στεφάνη"], attrs: { "Μέγεθος": "Universal", "Πρότυπο": "EN 352", "Χρώμα": "Κίτρινο" } },
  { id: "gyalia", code: "MAP-GYA-01", title: "Γυαλιά Ασφαλείας Anti-Scratch", cat: "map", sub: "kefali", bullets: ["Πιστοποίηση EN 166 / EN 170", "Προστασία UV400", "Πλευρική προστασία"], attrs: { "Μέγεθος": "Universal", "Πρότυπο": "EN 166", "Χρώμα": "Διάφανο" } },
  { id: "maska", code: "MAP-MSK-P3", title: "Μάσκα Μισού Προσώπου με Φίλτρα P3", cat: "map", sub: "kefali", bullets: ["Πιστοποίηση EN 140 / EN 143", "Κλάση φίλτρων P3 R", "Σιλικόνη υψηλής άνεσης"], attrs: { "Μέγεθος": "M/L", "Πρότυπο": "EN 140", "Χρώμα": "Γκρι" } },
  { id: "formes", code: "MAP-END-FR", title: "Φόρμα Εργασίας Υψηλής Ευκρίνειας Class 3", cat: "map", sub: "endysi", bullets: ["Πιστοποίηση EN ISO 20471 Class 3", "Ύφασμα 65/35 πολυεστέρας/βαμβάκι", "Πολλαπλές τσέπες"], attrs: { "Μέγεθος": "M–XXL", "Πρότυπο": "EN ISO 20471", "Χρώμα": "Πορτοκαλί" } },
  { id: "mpotes", code: "MAP-YPD-S3H", title: "Μπότα Ασφαλείας S3 HRO Αδιάβροχη", cat: "map", sub: "endysi", bullets: ["Πιστοποίηση EN ISO 20345", "Σόλα HRO έως 300°C", "Μεμβράνη αδιαβροχίας"], attrs: { "Μέγεθος": "38–47", "Πρότυπο": "EN ISO 20345", "Χρώμα": "Μαύρο" } },
  { id: "adiavroxo", code: "MAP-END-RN", title: "Αδιάβροχο Σετ Υψηλής Ευκρίνειας", cat: "map", sub: "endysi", bullets: ["Πιστοποίηση EN 343 & EN ISO 20471", "Θερμοκολλημένες ραφές", "Κουκούλα σε γιακά"], attrs: { "Μέγεθος": "M–XXL", "Πρότυπο": "EN 343", "Χρώμα": "Κίτρινο" } },
  { id: "gantia-kopi", code: "MAP-GNT-CT5", title: "Γάντια Αντοχής σε Κοπή Επιπέδου C", cat: "map", sub: "gantia", bullets: ["Πιστοποίηση EN 388 (4X43C)", "Ίνες HPPE", "Επικάλυψη PU"], attrs: { "Μέγεθος": "8–10", "Πρότυπο": "EN 388", "Χρώμα": "Γκρι" } },
  { id: "gantia-xim", code: "MAP-GNT-CH", title: "Γάντια Χημικής Προστασίας Νιτριλίου", cat: "map", sub: "gantia", bullets: ["Πιστοποίηση EN ISO 374-1 Type A", "Μήκος 33cm", "Εσωτερική επένδυση βαμβακιού"], attrs: { "Μέγεθος": "8–10", "Πρότυπο": "EN ISO 374", "Χρώμα": "Πράσινο" } },
  { id: "gantia-ilek", code: "MAP-GNT-EL0", title: "Μονωτικά Γάντια Ηλεκτρολόγων Class 0", cat: "map", sub: "gantia", bullets: ["Πιστοποίηση EN 60903", "Τάση λειτουργίας έως 1.000V", "Δοκιμή κάθε τεμαχίου"], attrs: { "Μέγεθος": "9–11", "Πρότυπο": "EN 60903", "Χρώμα": "Κόκκινο" } },
  { id: "baries", code: "MAP-ERG-BAR", title: "Πλαστικό Κιγκλίδωμα Εργοταξίου 2m", cat: "map", sub: "ergotaxio", bullets: ["Κατά EN 1317 (προσωρινή σήμανση)", "Δυνατότητα πλήρωσης με νερό", "Λευκό/κόκκινο ανακλαστικό"], attrs: { "Μέγεθος": "2 m", "Πρότυπο": "EN 1317", "Χρώμα": "Κόκκινο" } },
  { id: "fanos", code: "MAP-ERG-LMP", title: "Φανός Σήμανσης LED Εργοταξίου", cat: "map", sub: "ergotaxio", bullets: ["Κατά EN 12352", "Λειτουργία σταθερή/αναλάμπουσα", "Αισθητήρας ημέρας-νύχτας"], attrs: { "Μέγεθος": "Universal", "Πρότυπο": "EN 12352", "Χρώμα": "Πορτοκαλί" } },
  { id: "pinakida", code: "MAP-ERG-K20", title: "Πινακίδα Σήμανσης Κ-20 Ανακλαστική", cat: "map", sub: "ergotaxio", bullets: ["Ανακλαστική μεμβράνη κατά EN 12899-1", "Κατά ΟΜΟΕ-ΣΕΕΟ", "Αλουμίνιο 2mm"], attrs: { "Μέγεθος": "Ø60 cm", "Πρότυπο": "EN 12899", "Χρώμα": "Λευκό" } },
  { id: "zoni", code: "MAP-ERG-HRN", title: "Ζώνη Ολόσωμη Συγκράτησης Πτώσης", cat: "map", sub: "ergotaxio", bullets: ["Πιστοποίηση EN 361", "2 σημεία πρόσδεσης", "Ρυθμιζόμενοι ιμάντες"], attrs: { "Μέγεθος": "Universal", "Πρότυπο": "EN 361", "Χρώμα": "Μαύρο" } },
  { id: "membrani", code: "DOM-STG-BM", title: "Ασφαλτική Μεμβράνη SBS 4mm με Ψηφίδα", cat: "domika", sub: "steganotika", bullets: ["Κατά EN 13707", "Σήμανση CE", "Ευκαμψία σε -20°C"], attrs: {} },
  { id: "tsimento-steg", code: "DOM-STG-2K", title: "Τσιμεντοειδές Στεγανωτικό 2 Συστατικών", cat: "domika", sub: "steganotika", bullets: ["Κατά EN 1504-2 & EN 14891", "Για δεξαμενές πόσιμου νερού", "Ελαστικό, γεφυρώνει ρωγμές"], attrs: {} },
  { id: "eps", code: "DOM-MON-XPS", title: "Εξηλασμένη Πολυστερίνη XPS 5cm", cat: "domika", sub: "steganotika", bullets: ["Κατά EN 13164", "Λ = 0,034 W/mK", "Κατηγορία πυρός Euroclass E"], attrs: {} },
  { id: "kinima-grout", code: "DOM-KON-GR", title: "Κονίαμα Πάκτωσης (Grout) Μη Συρρικνούμενο", cat: "domika", sub: "konimata", bullets: ["Κατά EN 1504-6", "Αντοχή >70 MPa", "Για αγκυρώσεις και βάσεις μηχανημάτων"], attrs: {} },
  { id: "anastoleas", code: "DOM-KON-CI", title: "Αναστολέας Διάβρωσης Οπλισμού", cat: "domika", sub: "konimata", bullets: ["Κατά EN 1504-7", "Ενεργή προστασία οπλισμού", "Μονοσυστατικό"], attrs: {} },
  { id: "epoxy", code: "DOM-KON-EP", title: "Εποξειδική Κόλλα Δομικών Συνδέσεων 2K", cat: "domika", sub: "konimata", bullets: ["Κατά EN 1504-4", "Συγκόλληση νέου-παλαιού σκυροδέματος", "Υψηλή πρόσφυση"], attrs: {} },
  { id: "thermo", code: "DOM-XRM-TP", title: "Θερμοπλαστικό Υλικό Οδικής Σήμανσης", cat: "domika", sub: "xromata", bullets: ["Κατά EN 1871 & EN 1436", "Με υαλοσφαιρίδια κατά EN 1423", "Υψηλή αντοχή σε τριβή"], attrs: {} },
  { id: "yalosf", code: "DOM-XRM-GB", title: "Υαλοσφαιρίδια Επίπασης 25kg", cat: "domika", sub: "xromata", bullets: ["Κατά EN 1423", "Αντανακλαστικότητα νυχτερινής ορατότητας", "Επεξεργασία υγρασίας"], attrs: {} },
  { id: "antisk", code: "DOM-XRM-AC", title: "Αντιδιαβρωτικό Χρώμα Μεταλλικών Επιφανειών", cat: "domika", sub: "xromata", bullets: ["Κατά EN ISO 12944 (C4)", "Για ιστούς & κιγκλιδώματα", "Απόχρωση RAL κατά παραγγελία"], attrs: {} },
];

export const catName = (id: string) => categories.find((c) => c.id === id)?.name ?? "";
export const subName = (id: string) =>
  categories.flatMap((c) => c.subs).find((s) => s.id === id)?.name ?? "";
