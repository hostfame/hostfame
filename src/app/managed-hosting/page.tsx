import ManagedHosting from "@/components/pages/managed-hosting/ManagedHosting";

export const dynamic = "force-static";
// export const revalidate = 3600;

export default function WebHostingPage() {
  return <ManagedHosting />;
}
