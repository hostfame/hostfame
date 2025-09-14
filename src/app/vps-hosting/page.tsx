import VpsHosting from "@/components/pages/hosting/vps-hosting/VpsHosting";

export const dynamic = "force-static";
// export const revalidate = 3600;

export default function WebHostingPage() {
  // return <></>
  return <VpsHosting />;
}
