import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Import new fonts and define CSS variables
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "hi there.",
  description: "Where one pup fails, another succeeds.",
  metadataBase: new URL("https://thesmithproject.com"), // Fixes Open Graph URL resolution
  icons: {
    icon: "/favicon.ico", // Ensures Next.js loads your new favicon
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  },
  openGraph: {  // ✅ Moved inside metadata
    title: "hi there.",
    description: "Where one pup fails, another succeeds.",
    url: "https://thesmithproject.com",
    siteName: "hi there.",
    images: [
      {
        url: "/favicon.ico", // Replace with your actual preview image
        width: 1200,
        height: 630,
        alt: "Preview of your site",
      },
    ],
    type: "website",
  }
};

import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Apply fonts globally by adding them to the className */}
      <body className={`relative min-h-screen flex flex-col ${playfair.variable} ${inter.variable}`}>
        {/* Navigation Bar */}
        <nav className="w-full max-w-5xl py-4 flex justify-between items-center px-6">
          <Link 
            href="/" 
            className="fixed top-4 left-6 px-3 py-1 text-lg font-bold text-gray-900 hover:text-gray-900 
                      bg-white md:bg-transparent rounded-lg shadow-md 
                      sm:top-4 sm:left-4 sm:bg-opacity-80"
          >
            hi there.
          </Link>

          <div className="flex space-x-4 pr-4 ml-auto">
            <Link href="/about" className="text-md font-medium hover:text-gray-900 transition">i.</Link>
            <Link href="/projects" className="text-md font-medium hover:text-gray-900 transition">ii.</Link>
            <Link href="/contact" className="text-md font-medium hover:text-gray-900 transition">iii.</Link>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-grow w-full min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="w-full py-4 text-center bg-transparent text-gray-700 text-sm">
          © Corey Smith 2025
        </footer>
      </body>
    </html>
  );
}