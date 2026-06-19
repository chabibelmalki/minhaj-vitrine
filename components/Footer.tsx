export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white dark:border-slate-800/70 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              MINHAJ SAS
            </p>
            <address className="mt-2 text-sm not-italic leading-relaxed text-slate-600 dark:text-slate-400">
              17 Rue de Moscou, 95520 Osny
            </address>
          </div>

          <div className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            <p>SIREN 106 303 944</p>
            <p>RCS Pontoise</p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-500">
          © {new Date().getFullYear()} MINHAJ SAS. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
