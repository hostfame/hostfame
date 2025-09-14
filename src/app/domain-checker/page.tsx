import DomainChecker from "@/components/pages/domain-checker/DomainChecker";

export const dynamic = "force-static";
// export const revalidate = 3600;

export default function WebHostingPage() {
  return <DomainChecker />;
}
