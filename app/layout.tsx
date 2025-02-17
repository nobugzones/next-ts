import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Import new fonts
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Smith Project",
  description: "Where one fails, another succeeds.",
  icons: {
    icon: "/favicon.ico", // Ensures Next.js loads your new favicon
  },
  openGraph: {
    title: "Your Site Name",
    description: "A short description of your site that appears in previews.",
    url: "https://yourdomain.com",
    siteName: "Your Site Name",
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
      <body className="relative min-h-screen">
        {/* Home Link in Top-Left Corner */}
        <Link href="/" className="fixed top-4 left-4 text-xl font-bold text-gray-900 hover:text-blue-500">
          hi there.
        </Link>

        {children} {/* This renders the current page */}
      </body>
    </html>
  );
}
