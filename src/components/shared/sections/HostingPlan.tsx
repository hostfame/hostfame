import { hostingPlans } from "@/data/hostingPlan.data";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function HostingPlan() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Find the Perfect Web Hosting Plan
          </h2>
          <p className="mt-3 text-gray-600">
            Affordable, reliable, high-performance hosting for beginners and growing companies.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hostingPlans.map((plan) => (
            <div
              key={plan.id}
              className="group bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col"
            >
              {/* Title + Price */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold text-teal-600">{plan.price}</p>

              {/* Storage + Email */}
              <div className="mt-4 border-t pt-4 space-y-1 text-sm text-gray-700">
                <p>
                  <span className="font-medium">Storage:</span> {plan.storage}
                </p>
                <p>
                  <span className="font-medium">Email Accounts:</span> {plan.emailAccounts}
                </p>
              </div>

              {/* Features */}
              <ul className="mt-4 flex-1 space-y-2 text-sm">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {f.available ? (
                      <FaCheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <FaTimesCircle className="w-5 h-5 text-red-400" />
                    )}
                    <span
                      className={
                        f.available ? "text-gray-800" : "text-gray-400 line-through"
                      }
                    >
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="mt-6 w-full rounded-xl bg-teal-600 text-white py-2 font-medium hover:bg-teal-700 transition">
                {plan.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}