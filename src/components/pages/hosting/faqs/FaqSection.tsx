import CenteredSectionHeader from "@/components/shared/headers/CenteredSectionHeader";
import FaqBoard from "./FaqBoard";

export default function FaqSection() {
  return (
    <section className="bg-white-background space-y-8 py-12 md:py-16">
      <CenteredSectionHeader
        title={
          <>
            FAQs: <span className="font-bold">Your questions, our answers</span>
          </>
        }
        description="Here you will find answers to the most frequently asked questions. If
          you still need assistance, feel free to contact our live support team."
      />

      {/* Below: interactive board */}
      <div className="mx-auto max-w-7xl px-6">
        <FaqBoard defaultCategoryId="hosting" />
      </div>
    </section>
  );
}
