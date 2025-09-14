import ManagedHosting from "@/components/shared/sections/ManagedHostingThatGrows";


export const dynamic = "force-static";
export const revalidate = 3600;

export default function WebHostingPage() {
  return <ManagedHosting />;
}
