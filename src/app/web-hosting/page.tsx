import WebHosting from "@/components/pages/hosting/web-hosting/WebHosting";


export const dynamic = "force-static";
export const revalidate = 3600;

export default function WebHostingPage() {
  return <WebHosting />;
}
