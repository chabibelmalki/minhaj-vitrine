const offers = [
  {
    title: "Conseil IT",
    description:
      "Accompagnement stratégique et technique pour structurer vos systèmes d'information.",
  },
  {
    title: "Intelligence artificielle",
    description:
      "Conception et intégration de solutions d'IA adaptées à vos métiers.",
  },
  {
    title: "Vente de solutions",
    description:
      "Sélection et déploiement des outils logiciels qui répondent à vos besoins.",
  },
  {
    title: "Formation",
    description:
      "Conduite du changement et montée en compétences sur les nouvelles technologies.",
  },
];

export default function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          À propos
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          MINHAJ est une société de conseil en prestations informatiques. Nous
          concevons des solutions d&apos;intelligence artificielle, assurons la
          vente de solutions logicielles et accompagnons la conduite du
          changement — par la formation — vers les nouvelles technologies.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {offers.map((offer) => (
          <div
            key={offer.title}
            className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-brand-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-brand-800"
          >
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              {offer.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {offer.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
