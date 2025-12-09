import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";
import { DomainWhyChooseHostfameData } from "@/data/domain.data";

export default function WhyChooseHostfame() {
  return (
    <section aria-labelledby="why-hostfame" className=" space-y-8">
      <CenteredSectionHeader
        title={DomainWhyChooseHostfameData.title}
        description={DomainWhyChooseHostfameData.description}
      />

      <ul
        role="list"
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-7"
        aria-describedby="why-hostfame"
        id="why-hostfame"
      >
        {DomainWhyChooseHostfameData.cards.map((f, i) => {
          const Icon = f.icon;
          return (
            <li
              key={i}
              className="group relative rounded-3xl bg-white dark:bg-gray-900 shadow-sm ring-1 ring-border/50 dark:ring-gray-800 p-8 md:p-8 min-h-60 flex flex-col transition-all duration-300
                         hover:shadow-xl focus-within:shadow-xl
                         hover:ring-primary/30 focus-within:ring-primary/30"
            >
              {/* Hover gradient frame */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/0 to-primary/10 opacity-0
                           group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300"
              />

              {/* Icon medallion */}
              <div className="mb-6">
                <div className="relative inline-flex">
                  <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-primary/5 grid place-items-center ring-1 ring-primary/10">
                    <Icon className="text-primary/60" size={34} />
                  </div>
                </div>
              </div>

              {/* Title & description */}
              <h3 className="text-2xl font-semibold tracking-tight text-text">
                {f.title}
              </h3>
              <p className="mt-3 text-description-text leading-relaxed">
                {f.desc}
              </p>

              {/* Highlights (extra, not replacing content) */}
              {/* {highlights[f.title]?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {highlights[f.title].map((chip, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-full border border-border/70 bg-background/60 text-foreground/80"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              ) : null} */}

              {/* Footer CTA (optional anchor you can wire later) */}
              {/* <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
                >
                  Learn more
                </a>
                <span className="text-xs text-muted-foreground">
                  Included with every domain
                </span>
              </div> */}
            </li>
          );
        })}
      </ul>
    </section>
  );
}