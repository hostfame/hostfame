import { redirect } from "next/navigation";

export default function EmailHostingPage() {
    // Redirect to home page as email hosting is not yet available
    redirect("/");
}