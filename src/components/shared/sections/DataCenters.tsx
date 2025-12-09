// app/components/DataCenters.tsx
import Image from "next/image";
import { Fragment } from "react";

type Pin = {
  id: string;
  country: string;
  flag: string; // image url
  pos: { top: string; left: string }; // percentages relative to the map container
};

const data: {
  title: string;
  description: string;
  mapSrc: string;
  pins: Pin[];
} = {
  title: "Data Centers All Around the World",
  description:
    "We offer server locations in the USA, Germany, Egypt, India, Bangladesh, China, Brazil, Canada, Russia, Australia, Singapore, and South Africa for our Web, WordPress, and Cloud hosting packages.",
  mapSrc:
    "https://themewant.com/products/wordpress/hostie/wp-content/uploads/2024/01/data__center.png",
  // Positions tuned for the provided background (approximate, responsive via %)
  pins: [
    {
      id: "ca",
      country: "Canada",
      flag: "/assets/flags/ca.png",
      pos: { top: "14.4%", left: "17.9%" }
    }, // done
    {
      id: "us",
      country: "United States",
      flag: "/assets/flags/us.png",
      pos: { top: "35%", left: "18.6%" }
    }, // done
    {
      id: "br",
      country: "Brazil",
      flag: "/assets/flags/br.png",
      pos: { top: "60.9%", left: "29.8%" }
    }, // done
    {
      id: "de",
      country: "Germany",
      flag: "/assets/flags/de.png",
      pos: { top: "24%", left: "48.3%" }
    }, // done
    {
      id: "eg",
      country: "Egypt",
      flag: "/assets/flags/eg.png",
      pos: { top: "42.5%", left: "53.2%" }
    }, // done
    {
      id: "in",
      country: "India",
      flag: "/assets/flags/in.png",
      pos: { top: "46.2%", left: "67.9%" }
    }, // done
    {
      id: "bn",
      country: "Bangladesh",
      flag: "/assets/flags/bn.png",
      pos: { top: "48.5%", left: "71.9%" }
    }, // done
    {
      id: "cn",
      country: "China",
      flag: "/assets/flags/cn.png",
      pos: { top: "32.7%", left: "75%" }
    }, // done
    {
      id: "ru",
      country: "Russia",
      flag: "/assets/flags/ru.png",
      pos: { top: "17.7%", left: "79%" }
    }, // done
    {
      id: "za",
      country: "South Africa",
      flag: "/assets/flags/za.png",
      pos: { top: "76.3%", left: "52%" }
    }, // done
    {
      id: "au",
      country: "Australia",
      flag: "/assets/flags/au.png",
      pos: { top: "73.8%", left: "82.6%" }
    }
  ]
};

function PingDot() {
  return (
    <div className="animate-ping size-2 rounded-full bg-primary-dark"></div>
  );
}

export default function DataCenters() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-5">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-primary text-sm font-medium">All Servers Online</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px] text-text mb-4">
          {data.title}
        </h2>
        <p className="mx-auto max-w-3xl text-description-text sm:text-lg">
          {data.description}
        </p>
      </div>

      {/* Stats row */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
        {[
          { value: "12+", label: "Locations" },
          { value: "99.9%", label: "Uptime" },
          { value: "<30ms", label: "Latency" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-4xl sm:text-5xl font-bold text-primary">{stat.value}</p>
            <p className="text-description-text text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Map Card */}
      <div className="relative mx-auto w-full overflow-hidden rounded-2xl bg-white border border-gray-200 p-4 shadow-lg sm:p-6">
        <div className="relative mx-auto aspect-[1180/579] w-full">
          <Image
            src={data.mapSrc}
            alt="World map with connected data-center points"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
            className="object-contain"
            priority
          />

          {/* Location pins */}
          {data.pins.map((p) => (
            <Fragment key={p.id}>
              <div
                className="absolute -translate-x-1/2 flex flex-col justify-center gap-y-1.5 items-center group cursor-pointer"
                style={{ top: p.pos.top, left: p.pos.left }}
                title={p.country}
              >
                <PingDot />
                <div className="relative">
                  <Image
                    src={p.flag}
                    alt={`${p.country} flag`}
                    width={32}
                    height={22}
                    className="scale-75 sm:scale-90 md:scale-100 rounded shadow-lg ring-2 ring-white transition-all duration-200"
                  />
                  {/* Tooltip on hover */}
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-slate-900 text-white text-[10px] font-medium px-2 py-0.5 rounded whitespace-nowrap shadow-lg">
                      {p.country}
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      {/* Bottom country list */}
      <div className="flex flex-wrap justify-center gap-2">
        {data.pins.map((p) => (
          <div key={p.id} className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 rounded-full px-3 py-1.5 hover:bg-primary/5 hover:border-primary/20 transition-colors">
            <Image src={p.flag} alt={p.country} width={16} height={12} className="rounded-sm" />
            <span className="text-text text-xs font-medium">{p.country}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
