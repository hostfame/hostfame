import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";
import { DomainWhyChooseHostfameData } from "@/data/domain.data";

export default function WhyChooseHostfame() {
  return (
    <section>
      <CenteredSectionHeader
        title={DomainWhyChooseHostfameData.title}
        description={DomainWhyChooseHostfameData.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
        {DomainWhyChooseHostfameData.cards.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={i}
              className="relative bg-card-background shadow-md rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 hover:shadow-primary/20 min-h-44 transition-all duration-700"
            >
              <div className="absolute right-0 top-1 flex items-center justify-center w-14 h-14 mx-auto rounded-full">
                <Icon className="text-primary/20" size={50}/>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-primary">
                  {f.title}
                </h3>
                <p className="mt-2">{f.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
