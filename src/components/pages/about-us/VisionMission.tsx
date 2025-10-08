import { visionMissionData } from "@/data/about-us.data";
import React from "react";

const VisionMission: React.FC = () => {
  return (
    <section>
      <div className="text-center mb-4 lg:mb-8 max-w-2xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-2 lg:mb-4">
          Vision & Mission
        </h2>
        <p className="text-text/80 mb-6 lg:mb-12 max-w-2xl mx-auto">
          Discover what drives us to deliver world-class hosting experiences.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 mx-auto">
        {visionMissionData.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="p-8 bg-card-background border border-border-light-gray rounded-2xl shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex gap-2 mb-4 items-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <Icon className={`text-2xl ${item.iconColor}`} />
                </div>
                <h3 className="text-2xl font-semibold text-text">
                  {item.title}
                </h3>
              </div>
              <p className="text-text/80 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VisionMission;
