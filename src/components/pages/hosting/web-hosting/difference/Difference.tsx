import { differenceData } from "@/data/web-hosting/difference.data";
import Image from "next/image";

const Difference = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-50 to-white p-6 md:p-12">
      <div className="absolute inset-0">
        <Image
          src=""
          alt="Background"
          fill
          style={{ objectFit: "cover", opacity: 0.5 }}
          className="z-0"
        />
      </div>
      <div className="md:w-1/3 mb-6 md:mb-0 relative z-10">
        <Image
          src="/assets/web-hosting/difference/mujabhai.png"
          alt="Hostnin Representative"
          width={300}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-2/3 md:pl-10 relative z-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{differenceData.title}</h2>
        <p className="text-gray-600 mb-6">{differenceData.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differenceData.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex items-start"
            >
              <div className="text-blue-500 mr-4">
                <span className={`text-2xl material-icons`}>{feature.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Difference;