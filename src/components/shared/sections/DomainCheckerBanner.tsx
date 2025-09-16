import DomainSearchBox from "./DomainSearchBox";

type Popular = { tld: string; price: string };

const data = {
  title: "Find Best Unique Domains Checker!",
  subtitle: "Not sure what name to choose? Start here and check instantly.",
  placeholder: "find your domain name",
  button: "Search",
  tlds: [".com", ".net", ".info", ".org", ".biz"],
  popular: [
    { tld: ".com", price: "$6.99" },
    { tld: ".net", price: "$15.99" },
    { tld: ".info", price: "$3.99" },
    { tld: ".org", price: "$6.99" },
    { tld: ".biz", price: "$6.99" },
  ] as Popular[],
} as const;

export default function DomainCheckerBanner() {
  return (
    <section className="relative isolate">
      {/* Layered teal header */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-dark via-primary to-primary/80" />

      {/* Decorative orbs / lines */}
      <div
        className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-28 right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 opacity-30"
        height="140"
        viewBox="0 0 1200 140"
        fill="none"
        aria-hidden
      >
        <path d="M0 80 C200 120 300 20 500 60 C700 100 800 10 1200 40" stroke="white" strokeOpacity="0.25" strokeWidth="2" />
      </svg>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
        {/* Card layout: content left, action right */}
        <div className="grid items-center gap-10 rounded-3xl bg-white/10 p-6 shadow-xl backdrop-blur md:grid-cols-2 md:p-10">
          {/* Left: heading */}
          <header className="space-y-5 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/25">
              <span className="inline-block h-2 w-2 rounded-full bg-white"></span>
              Domain Toolkit
            </span>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
              {data.title}
            </h1>
            <p className="text-white/90 sm:text-lg">{data.subtitle}</p>

            {/* Popular pills */}
            <div className="mt-6">
              <div className="text-white/80 text-sm font-semibold mb-2">
                Popular Domain
              </div>
              <ul className="flex flex-wrap gap-2">
                {data.popular.map((item) => (
                  <li
                    key={item.tld}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-sm backdrop-blur transition hover:bg-white/15"
                  >
                    <span className="font-medium text-white">{item.tld}</span>
                    <span className="text-white/80 group-hover:text-white">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </header>

          {/* Right: search card */}
          <aside className="relative">
            <div className="rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-gray-100">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-primary-dark">
                  Instant Availability
                </span>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
                  Teal Powered
                </span>
              </div>

              <DomainSearchBox
                tlds={data.tlds as unknown as string[]}
                placeholder={data.placeholder}
                buttonLabel={data.button}
                
              />

              {/* Quick TLD chooser (non-interactive showcase of all TLDs) */}
              <div className="mt-5">
                <div className="text-xs font-medium text-gray-600 mb-2">
                  Extensions
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.tlds.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs text-gray-700 ring-1 ring-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Accent ring */}
            <div
              className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-tr from-primary-dark to-primary opacity-40 blur-2xl"
              aria-hidden
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
