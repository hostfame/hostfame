import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hostnin | WordPress Hosting",
  description: "A hosting platform."
};

export default function WebHostingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
