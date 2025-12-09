import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hero Section Showcase | Hostfame",
  description: "15 different hero section designs to choose from",
};

export const dynamic = "force-static";

const heroLinks = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Hero ${i + 1}`,
  href: `/hero-sections/hero-${i + 1}`,
}));

export default function HeroSectionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black text-center mb-4">Hero Section Showcase</h1>
        <p className="text-gray-600 text-center mb-12 text-lg">Click on any hero to view it in full screen</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {heroLinks.map((hero) => (
            <Link
              key={hero.id}
              href={hero.href}
              className="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl font-black">{hero.id}</span>
              </div>
              <h3 className="font-bold text-gray-900">{hero.name}</h3>
              <p className="text-sm text-gray-500 mt-1">View Design →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
