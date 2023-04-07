import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Luis Website",
  description: "Created by Mired Web Services",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="md:py-6 py-4 px-4 max-w-[1400px] mx-auto">
        <header className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-5 md:text-4xl text-gray-900">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="border-2 rounded-xl p-4 border-transparent hover:border-gray-900"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="md:pt-44 pt-20">{children}</main>
      </body>
    </html>
  );
}
