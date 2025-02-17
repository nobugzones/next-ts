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
  },
  openGraph: {
    title: "hi there.",
    description: "Where one pup fails, another succeeds.",
    url: "https://thesmithproject.com",
    siteName: "hi there.",
    images: [
      {
        url: "/preview-image.jpg", // Replace with your actual preview image
        width: 1200,
        height: 630,
        alt: "Preview of your site",
      },
    ],
    type: "website",
  },
};

import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Apply fonts globally by adding them to the className */}
      <body className={`relative min-h-screen flex flex-col ${playfair.variable} ${inter.variable}`}>
        {/* Home Link in Top-Left Corner */}
        <Link href="/" className="fixed top-4 left-4 text-xl font-bold text-gray-900 hover:text-blue-500">
          hi there.
        </Link>

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="w-full py-4 text-center bg-[#90Aead] text-gray-700 text-sm">
          © Corey Smith 2025
        </footer>
      </body>
    </html>
  );
}
