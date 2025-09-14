import Home from "@/components/pages/home/Home";

export const dynamic = "force-static";
// export const revalidate = 3600;

export default function HomePage() {
  return <Home />;
}
