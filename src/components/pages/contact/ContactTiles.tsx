// ContactTiles.tsx
import { JSX } from "react";
import { FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";

type ContactItem = {
  id: string;
  title: string;
  lines: string[];
  icon: JSX.Element;
  links?: string[];
};

const contactData: ContactItem[] = [
  {
    id: "address",
    title: "Our Office",
    lines: ["75 E 3rd St, Sheridan,", "WY 82801"],
    icon: <FiMapPin />,
  },
  {
    id: "email",
    title: "Email Us",
    lines: ["info@hostfame.com", "support@hostfame.com"],
    icon: <FiMail />,
    links: ["mailto:info@hostfame.com", "mailto:support@hostfame.com"],
  },
  {
    id: "phone",
    title: "Call Anytime",
    lines: ["(192) 9460 8661", "(151) 2866 7153"],
    icon: <FiPhone />,
    links: ["tel:+19294608661", "tel:+15128667153"],
  },
  {
    id: "hours",
    title: "Hours",
    lines: ["Mon–Sun: Open 24/7", "Always here for you"],
    icon: <FiClock />,
  },
];

export default function ContactTiles() {
  return (
    <section className="w-full bg-transparent py-10">
      <div className="mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {contactData.map((item) => (
          <Tile key={item.id}>
            <IconWrap>{item.icon}</IconWrap>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              {item.title}
            </h3>
            <div className="text-sm text-slate-600 dark:text-slate-300 space-y-0.5">
              {item.lines.map((line, i) =>
                item.links && item.links[i] ? (
                  <a
                    key={i}
                    href={item.links[i]}
                    className="underline-offset-2 hover:underline block"
                  >
                    {line}
                  </a>
                ) : (
                  <p key={i}>{line}</p>
                )
              )}
            </div>
          </Tile>
        ))}
      </div>
    </section>
  );
}

/* ---------- subcomponents ---------- */

function Tile({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-xl
        bg-gradient-to-r from-primary via-primary-light to-primary-light
        hover:-translate-y-2 duration-300 
        p-5
        transition-transform
      "
    >
      {/* decorative strip */}
      <div
        className="
          absolute inset-y-0 left-0 w-1
          bg-toggle
        "
        aria-hidden
      />
      {children}
    </div>
  );
}

function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        mb-3 inline-flex h-10 w-10 items-center justify-center
        rounded-lg
        bg-white text-primary
      "
    >
      {children}
    </div>
  );
}
