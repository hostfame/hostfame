
import { advancedFeaturesTabs } from "@/data/about-us.data";
import TabsHeader from "./TabHeader";
import FeaturePanel from "./FeaturePanel";

export default async function AdvancedFeaturesSection() {
  const tabs = advancedFeaturesTabs;

  return (
    <section>
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-2 lg:mb-4">
        Advanced Features for the Modern User
      </h2>

      {/* client-only control, server content below */}
      <div className="mt-6 w-full flex justify-center">
        <TabsHeader
          tabs={tabs.map((t) => ({ slug: t.slug, label: t.label }))}
          initialSlug={tabs[0].slug}
        />
      </div>

      {/* All panels are server-rendered once.
          The client tab header simply toggles `hidden` on these. */}
      <div>
        {tabs.map((t, i) => (
          <div
            key={t.slug}
            id={`panel-${t.slug}`}
            className={i === 0 ? "" : "hidden"} // default: first visible
          >
            <FeaturePanel tab={t} />
          </div>
        ))}
      </div>
    </section>
  );
}