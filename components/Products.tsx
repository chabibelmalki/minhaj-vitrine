type Product = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  domain: string;
  preview: string;
};

const products: Product[] = [
  {
    name: "hadn",
    tagline: "Facturation & encaissement",
    description:
      "Application mobile de facturation et d'encaissement pensée pour les indépendants et les TPE. Simple, rapide, conforme.",
    href: "https://had-n.com",
    domain: "had-n.com",
    preview: "/preview-hadn.jpg",
  },
  {
    name: "xklic",
    tagline: "Sites web professionnels",
    description:
      "Création et gestion de sites web professionnels pour artisans et petites entreprises : hébergement, référencement (SEO) et publicité.",
    href: "https://xklic.com",
    domain: "xklic.com",
    preview: "/preview-xklic.jpg",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-brand-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-brand-800">
      {/* Browser-chrome preview */}
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Visiter ${product.name} (${product.domain})`}
      >
        <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-4 py-2.5 dark:border-slate-800 dark:bg-slate-800/60">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-3 truncate rounded bg-white px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-900 dark:text-slate-400">
            {product.domain}
          </span>
        </div>
        <div className="aspect-[4/3] overflow-hidden bg-slate-50 dark:bg-slate-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.preview}
            alt={`Aperçu du site ${product.name}`}
            width={1280}
            height={960}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </a>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {product.name}
          </h3>
          <span className="text-xs font-medium text-brand-600 dark:text-brand-400">
            {product.tagline}
          </span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {product.description}
        </p>
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
        >
          Visiter le site
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <section
      id="produits"
      className="border-y border-slate-200/70 bg-slate-50/60 dark:border-slate-800/70 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Nos produits
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Deux solutions éditées par MINHAJ pour outiller les indépendants,
            les artisans et les petites entreprises.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
