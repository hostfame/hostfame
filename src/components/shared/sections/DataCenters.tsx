// app/components/DataCenters.tsx
import Image from "next/image";
import { Fragment } from "react";
import CenteredSectionHeader from "../headers/CenteredSectionHeader";

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
    "We offer server locations in the USA, Germany, Egypt, India, China, Brazil, Canada, Russia, Australia, Singapore, and South Africa for our Web, WordPress, and Cloud hosting packages.",
  mapSrc:
    "https://themewant.com/products/wordpress/hostie/wp-content/uploads/2024/01/data__center.png",
  // Positions tuned for the provided background (approximate, responsive via %)
  pins: [
    {
      id: "ca",
      country: "Canada",
      flag: "/assets/flags/ca.png",
      pos: { top: "14.4%", left: "17.9%" },
    }, // done
    {
      id: "us",
      country: "United States",
      flag: "/assets/flags/us.png",
      pos: { top: "35%", left: "18.6%" },
    }, // done
    {
      id: "br",
      country: "Brazil",
      flag: "/assets/flags/br.png",
      pos: { top: "60.9%", left: "29.8%" },
    }, // done
    {
      id: "de",
      country: "Germany",
      flag: "/assets/flags/de.png",
      pos: { top: "24%", left: "48.3%" },
    }, // done
    {
      id: "eg",
      country: "Egypt",
      flag: "/assets/flags/eg.png",
      pos: { top: "42.5%", left: "53.2%" },
    }, // done
    {
      id: "in",
      country: "India",
      flag: "/assets/flags/in.png",
      pos: { top: "46.2%", left: "67.9%" },
    }, // done
    {
      id: "cn",
      country: "China",
      flag: "/assets/flags/cn.png",
      pos: { top: "32.7%", left: "75%" },
    }, // done
    {
      id: "ru",
      country: "Russia",
      flag: "/assets/flags/ru.png",
      pos: { top: "17.7%", left: "79%" },
    }, // done
    {
      id: "za",
      country: "South Africa",
      flag: "/assets/flags/za.png",
      pos: { top: "76.3%", left: "52%" },
    }, // done
    {
      id: "au",
      country: "Australia",
      flag: "/assets/flags/au.png",
      pos: { top: "73.8%", left: "82.6%" },
    },
  ],
};

function PingDot() {
  return <div className="animate-ping size-2 rounded-full bg-primary-dark"></div>;
}

export default function DataCenters() {
  return (
    <section className="mx-auto max-w-7xl py-16">
      <CenteredSectionHeader
        title={data.title}
        description={data.description}
      />

      <div className="relative mx-auto mt-10 w-full overflow-hidden rounded-3xl bg-gray-background p-2 shadow-sm sm:p-3">
        {/* Map wrapper keeps the aspect ratio of the background image */}
        <div className="relative mx-auto aspect-[1180/579] w-full">
          {/* Background map */}
          <Image
            src={data.mapSrc}
            alt="World map with connected data-center points"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
            className="object-contain"
            priority
          />

          {/* Flags placed below the green points */}
          {data.pins.map((p) => (
            <Fragment key={p.id}>
              <div
                className="absolute z-10 -translate-x-1/2 flex flex-col justify-center gap-y-2 items-center translate-y-2"
                style={{ top: p.pos.top, left: p.pos.left }}
                title={p.country}
              >
                <PingDot />
                <Image
                  src={p.flag}
                  alt={`${p.country} flag`}
                  width={32}
                  height={22}
                  className="rounded border border-white shadow ring-1 ring-black/10 bg-white"
                />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
