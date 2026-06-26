import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import heroCoffee from "@/assets/hero-coffee.jpg";
import productEspresso from "@/assets/product-espresso.jpg";
import productLatte from "@/assets/product-latte.jpg";
import productColdbrew from "@/assets/product-coldbrew.jpg";
import storyBeans from "@/assets/story-beans.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  component: VelvetBean,
});

// ---------- atoms ----------

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-eyebrow inline-flex items-center gap-3 before:block before:h-px before:w-8 before:bg-current before:opacity-50">
      {children}
    </span>
  );
}

// ---------- nav ----------

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#menu", label: "Menu" },
    { href: "#story", label: "Story" },
    { href: "#gallery", label: "Gallery" },
    { href: "#voices", label: "Voices" },
    { href: "#visit", label: "Visit" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto max-w-6xl px-4 transition-all duration-500 sm:px-6 ${
          scrolled ? "mt-3" : "mt-5"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full border border-white/10 px-6 transition-all duration-500 sm:px-8 ${
            scrolled
              ? "bg-[oklch(0.18_0.022_40_/_0.82)] py-2 shadow-soft backdrop-blur-xl"
              : "bg-[oklch(0.18_0.022_40_/_0.45)] py-2.5 backdrop-blur-md"
          }`}
        >
          <a href="#top" className="flex shrink-0 items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--gold)] text-[var(--espresso)] font-display text-base leading-none">
              v
            </span>
            <span className="text-display text-base text-[var(--cream)] tracking-wide">
              Velvet Bean
            </span>
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.78rem] uppercase tracking-[0.18em] text-[oklch(0.85_0.018_75_/_0.78)] transition-colors hover:text-[var(--gold)]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#visit"
              className="hidden rounded-full bg-[var(--cream)] px-5 py-1.5 text-xs font-medium tracking-wide text-[var(--espresso)] transition-all hover:bg-[var(--gold)] sm:inline-block"
            >
              Reserve
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-[var(--cream)] md:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1">
                <span className="block h-px w-3.5 bg-current" />
                <span className="block h-px w-3.5 bg-current" />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 flex flex-col rounded-3xl border border-white/10 bg-[oklch(0.18_0.022_40_/_0.92)] p-3 backdrop-blur-xl md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-[var(--cream)] hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

// ---------- hero ----------

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      id="top"
      ref={ref}
      className="section-espresso section-glow grain relative min-h-screen overflow-hidden pt-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[20%] -z-0 select-none text-center text-[26vw] font-display leading-none tracking-tighter text-white/[0.035] sm:text-[20vw]"
      >
        velvet
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-32 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 lg:pt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
            className="space-y-9"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.7 }}>
              <Eyebrow>Est. 2014 — Slow craft coffee</Eyebrow>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-display text-[clamp(3.25rem,8vw,7rem)]"
            >
              A quieter
              <br />
              <em className="text-gold-gradient italic">ritual</em> in every
              <br />
              cup.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="max-w-md text-lg leading-relaxed text-[oklch(0.85_0.02_75_/_0.85)]"
            >
              Velvet Bean is a small-batch coffee house honouring the long way —
              hand-selected origins, slow roasts, and the kind of warmth you
              only find in places built by hand.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a href="#menu" className="btn-luxe group">
                Explore the menu
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a href="#story" className="btn-ghost">
                Our story
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-3 gap-6 border-t border-white/10 pt-10"
            >
              {[
                ["12", "single origins"],
                ["48h", "post-roast rest"],
                ["01", "tiny roastery"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-display text-4xl text-[var(--gold)] sm:text-5xl">
                    {n}
                  </div>
                  <div className="mt-2 text-[0.65rem] uppercase tracking-[0.28em] text-[oklch(0.78_0.02_75_/_0.7)]">
                    {l}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="relative lg:col-span-6">
          <motion.div
            style={{ y, scale }}
            className="relative mx-auto aspect-[4/5] w-full max-w-xl overflow-hidden rounded-[2rem] shadow-luxe ring-1 ring-white/5"
          >
            <img
              src={heroCoffee}
              alt="Espresso splash in a stoneware cup at Velvet Bean"
              width={1536}
              height={1536}
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 90% at 70% 20%, oklch(1 0 0 / 0.12), transparent 55%), linear-gradient(180deg, transparent 55%, oklch(0.18 0.022 40 / 0.7))",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-6 left-2 max-w-[17rem] rounded-2xl border border-white/10 bg-[oklch(0.22_0.022_42_/_0.85)] p-5 shadow-soft backdrop-blur-xl sm:left-0"
          >
            <div className="flex items-center gap-1 text-[var(--gold)]">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-xs">
                  {s}
                </span>
              ))}
              <span className="ml-2 text-[0.7rem] tracking-wide text-[oklch(0.78_0.02_75_/_0.7)]">
                4.9 · 1,284 reviews
              </span>
            </div>
            <p className="mt-3 font-display text-base italic leading-snug text-[var(--cream)]">
              “The most considered cup of coffee in the city.”
            </p>
            <p className="mt-2 text-[0.7rem] uppercase tracking-widest text-[oklch(0.78_0.02_75_/_0.6)]">
              Coffee Review Quarterly
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6">
        <div className="flex animate-[scroll_45s_linear_infinite] gap-16 whitespace-nowrap font-display text-2xl tracking-wide text-white/30">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-16">
              {[
                "Ethiopia Yirgacheffe",
                "Colombia Huila",
                "Guatemala Huehuetenango",
                "Kenya Nyeri",
                "Brazil Cerrado",
                "Panama Geisha",
              ].map((t) => (
                <span key={t} className="flex items-center gap-16">
                  {t}
                  <span className="h-1 w-1 rounded-full bg-[var(--gold)]/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </section>
  );
}

// ---------- menu ----------

const products = [
  {
    name: "Velvet Espresso",
    blend: "House blend · Ethiopia + Brazil",
    notes: "Dark chocolate · plum · cocoa nib",
    price: "$4.50",
    img: productEspresso,
  },
  {
    name: "Honey Cortado",
    blend: "Single origin · Colombia Huila",
    notes: "Caramel · orange peel · brown sugar",
    price: "$5.80",
    img: productLatte,
  },
  {
    name: "Slow Cold Brew",
    blend: "24h steep · Kenya Nyeri",
    notes: "Blackcurrant · cane sugar · stone fruit",
    price: "$6.20",
    img: productColdbrew,
  },
];

function Menu() {
  return (
    <section id="menu" className="section-cream relative py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.7 }}>
            <Eyebrow>The Menu · 03 selections</Eyebrow>
            <h2 className="mt-6 text-display text-6xl sm:text-7xl">
              Brewed with
              <br />
              <em className="italic text-[var(--mocha)]">intention.</em>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Three signature drinks from the current season. Each is roasted
            in-house no more than four days before it reaches your cup.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[1.75rem] bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 rounded-full bg-[oklch(1_0_0_/_0.85)] px-3 py-1 text-[0.65rem] font-mono uppercase tracking-[0.22em] text-[var(--espresso)] backdrop-blur">
                  No. 0{i + 1}
                </span>
              </div>
              <div className="space-y-5 p-8">
                <div className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--mocha)]">
                  {p.blend}
                </div>
                <h3 className="text-display text-3xl text-foreground">
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.notes}
                </p>
                <div className="flex items-center justify-between border-t border-border pt-6">
                  <span className="text-display text-2xl text-foreground">
                    {p.price}
                  </span>
                  <button className="group/btn inline-flex items-center gap-3 text-sm font-medium text-foreground">
                    Order
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition-all group-hover/btn:scale-110">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- story ----------

function Story() {
  return (
    <section id="story" className="section-espresso grain relative py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative lg:col-span-6"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-luxe ring-1 ring-white/5">
              <img
                src={storyBeans}
                alt="Roasted coffee beans cascading through warm light"
                loading="lazy"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-2 -bottom-6 max-w-[19rem] rounded-2xl border border-white/10 bg-[oklch(0.22_0.022_42_/_0.9)] p-7 shadow-soft backdrop-blur-xl sm:-right-8">
              <div className="text-display text-6xl text-[var(--gold)]">10y</div>
              <p className="mt-3 text-sm leading-relaxed text-[oklch(0.85_0.02_75_/_0.8)]">
                of slow, single-batch roasting from one small roastery in the
                old quarter.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.12 }}
            className="space-y-10 lg:col-span-6 lg:pl-6"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.7 }}>
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="mt-6 text-display text-6xl sm:text-7xl">
                Built by hand,
                <br />
                <em className="text-gold-gradient italic">poured</em> with care.
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-lg leading-relaxed text-[oklch(0.85_0.02_75_/_0.85)]"
            >
              Velvet Bean began as a single drum roaster, a wooden counter, and
              a stubborn belief that coffee deserves to be unhurried. A decade
              later, we still roast every bag ourselves, still know our farmers
              by name, and still pour every cup as if it were the first one of
              the morning.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3"
            >
              {[
                { t: "Source", d: "Direct trade from twelve farms across four origin countries." },
                { t: "Roast", d: "Slow profile roasted in small batches at our flagship." },
                { t: "Pour", d: "Every cup brewed by trained baristas to recipe and ritual." },
              ].map((c) => (
                <div
                  key={c.t}
                  className="bg-[oklch(0.22_0.022_42_/_0.85)] p-7 backdrop-blur"
                >
                  <div className="text-[0.65rem] uppercase tracking-[0.3em] text-[var(--gold)]">
                    {c.t}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[oklch(0.88_0.018_75_/_0.85)]">
                    {c.d}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------- gallery ----------

function Gallery() {
  const items = [
    { src: gallery1, h: "row-span-2", alt: "Barista pouring milk" },
    { src: gallery2, h: "", alt: "Warm café interior with pendant lights" },
    { src: gallery3, h: "", alt: "Coffee beans in a burlap sack" },
    { src: gallery4, h: "row-span-2", alt: "Pour over brewing" },
  ];
  return (
    <section id="gallery" className="section-cream relative py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <Eyebrow>Inside the room</Eyebrow>
          <h2 className="mt-6 text-display text-6xl sm:text-7xl">
            A small room,
            <br />
            <em className="italic text-[var(--mocha)]">warm light.</em>
          </h2>
        </motion.div>

        <div className="grid auto-rows-[16rem] grid-cols-2 gap-5 sm:gap-7 md:grid-cols-4">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${it.h}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- testimonials ----------

const voices = [
  {
    q: "There is a quietness to this place. The coffee is exquisite, but the room is the real magic.",
    a: "Amelia Crane",
    r: "Regular since 2019",
  },
  {
    q: "I came for a flat white and stayed for an hour, just watching the light change against the bar.",
    a: "Idris Mahmoud",
    r: "Travel journalist",
  },
  {
    q: "The kind of coffee that ruins you for everywhere else. I think about the cortado weekly.",
    a: "Léa Bonnard",
    r: "Pastry chef",
  },
];

function Voices() {
  return (
    <section id="voices" className="section-espresso grain relative py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <Eyebrow>Voices</Eyebrow>
            <h2 className="mt-6 text-display text-6xl sm:text-7xl">
              Words from
              <br />
              <em className="text-gold-gradient italic">the regulars.</em>
            </h2>
          </div>
          <div className="text-[0.65rem] uppercase tracking-[0.3em] text-[oklch(0.78_0.02_75_/_0.6)]">
            04 · independent reviews
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {voices.map((v, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative flex flex-col rounded-3xl border border-white/10 bg-[oklch(0.24_0.022_42_/_0.7)] p-9 backdrop-blur-xl"
            >
              <span className="absolute right-7 top-4 font-display text-7xl leading-none text-[var(--gold)]/40">
                “
              </span>
              <p className="text-display text-2xl italic leading-snug text-[var(--cream)]">
                {v.q}
              </p>
              <footer className="mt-10 border-t border-white/10 pt-6">
                <div className="text-sm font-medium text-[var(--cream)]">
                  {v.a}
                </div>
                <div className="mt-1 text-[0.65rem] uppercase tracking-[0.28em] text-[oklch(0.78_0.02_75_/_0.65)]">
                  {v.r}
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- contact ----------

function Contact() {
  return (
    <section id="visit" className="section-cream relative py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="relative grid grid-cols-1 gap-14 overflow-hidden rounded-[2.5rem] bg-card p-10 shadow-luxe sm:p-16 lg:grid-cols-12 lg:p-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--gold)]/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-[var(--mocha)]/15 blur-3xl"
          />
          <div className="relative lg:col-span-7">
            <Eyebrow>Visit · Reserve</Eyebrow>
            <h2 className="mt-6 text-display text-6xl sm:text-7xl">
              Come sit
              <br />
              <em className="italic text-[var(--mocha)]">a while.</em>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Walk-ins are always welcome. For weekend mornings and small
              gatherings, leave us a note and we'll save the corner banquette
              for you.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {[
                { p: "Your name" },
                { p: "Email", type: "email" },
              ].map((f) => (
                <input
                  key={f.p}
                  type={f.type ?? "text"}
                  placeholder={f.p}
                  className="rounded-xl border border-border bg-[oklch(1_0_0_/_0.6)] px-5 py-4 text-sm outline-none transition-all focus:border-foreground focus:bg-white"
                />
              ))}
              <input
                placeholder="Preferred date & time"
                className="rounded-xl border border-border bg-[oklch(1_0_0_/_0.6)] px-5 py-4 text-sm outline-none transition-all focus:border-foreground focus:bg-white sm:col-span-2"
              />
              <textarea
                rows={3}
                placeholder="A note (optional)"
                className="rounded-xl border border-border bg-[oklch(1_0_0_/_0.6)] px-5 py-4 text-sm outline-none transition-all focus:border-foreground focus:bg-white sm:col-span-2"
              />
              <button type="submit" className="btn-luxe group mt-2 sm:col-span-2">
                Reserve a table
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </div>

          <div className="relative space-y-10 lg:col-span-5 lg:border-l lg:border-border lg:pl-14">
            {[
              {
                t: "Find us",
                d: ["27 Linden Lane", "Old Quarter, Floor 1", "Open daily 7am — 8pm"],
              },
              {
                t: "Say hello",
                d: ["hello@velvetbean.co", "+1 (415) 555 0142", "@velvetbean"],
              },
              {
                t: "Whole beans",
                d: [
                  "Subscribe and we'll ship freshly",
                  "roasted bags to your door every",
                  "two weeks.",
                ],
              },
            ].map((b) => (
              <div key={b.t}>
                <div className="text-[0.65rem] uppercase tracking-[0.3em] text-[var(--mocha)]">
                  {b.t}
                </div>
                <div className="mt-4 space-y-1 text-foreground">
                  {b.d.map((line) => (
                    <div key={line} className="text-sm leading-relaxed">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- footer ----------

function Footer() {
  return (
    <footer className="section-espresso relative border-t border-white/10 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 sm:px-8 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--gold)] text-[var(--espresso)] font-display">
            v
          </span>
          <div>
            <div className="text-display text-lg text-[var(--cream)]">
              Velvet Bean
            </div>
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-[oklch(0.78_0.02_75_/_0.6)]">
              Artisanal coffee · roasted slowly
            </div>
          </div>
        </div>
        <div className="text-[0.65rem] uppercase tracking-[0.3em] text-[oklch(0.78_0.02_75_/_0.5)]">
          © {new Date().getFullYear()} Velvet Bean Coffee Co.
        </div>
        <div className="flex gap-7 text-sm text-[oklch(0.85_0.02_75_/_0.75)]">
          {["Instagram", "Journal", "Privacy"].map((l) => (
            <a key={l} href="#" className="transition-colors hover:text-[var(--gold)]">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ---------- page ----------

function VelvetBean() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Menu />
        <Story />
        <Gallery />
        <Voices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
