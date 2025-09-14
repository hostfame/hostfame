import WordPressHosting from "@/components/pages/hosting/wordpress-hosting/WordPressHosting";

export const dynamic = "force-static";
// export const revalidate = 3600;

const WordPressHostingPage = () => {
  return <WordPressHosting />;
};

export default WordPressHostingPage;