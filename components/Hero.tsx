export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200/70 dark:border-slate-800/70"
    >
      {/* Soft brand gradient backdrop. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 to-white dark:from-slate-900 dark:to-slate-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl"
      />

      <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
        <span className="inline-flex items-center rounded-full border border-brand-200 bg-white/60 px-3 py-1 text-xs font-medium text-brand-700 dark:border-brand-900 dark:bg-slate-900/60 dark:text-brand-300">
          Conseil &amp; services informatiques
        </span>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl dark:text-white">
          MINHAJ
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-300">
          Conseil &amp; solutions informatiques. Nous accompagnons les
          entreprises sur l&apos;IT, l&apos;intelligence artificielle et la
          conduite du changement vers les nouvelles technologies.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            Nous contacter
          </a>
          <a
            href="#produits"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Nos produits
          </a>
        </div>
      </div>
    </section>
  );
}
