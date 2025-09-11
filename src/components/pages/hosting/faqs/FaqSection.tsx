import FaqBoard from "./FaqBoard";

export default function FaqSection() {
  return (
    <section className="bg-[#f7f7f9] space-y-8 py-12 md:py-16">
      <div className="mx-auto space-y-3 max-w-7xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          FAQs: <span className="font-bold">Your questions, our answers</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          Here you will find answers to the most frequently asked questions. If
          you still need assistance, feel free to contact our live support team.
        </p>
      </div>

      {/* Below: interactive board */}
      <div className="mx-auto max-w-7xl px-6">
        <FaqBoard defaultCategoryId="hosting" />
      </div>
    </section>
  );
}
