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
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen flex">
        <Sidebar /> {/* Sidebar now handles navigation */}

        <div className="flex flex-col w-full">
          {/* Slim Header */}
          <header className="fixed top-0 left-0 w-full h-12 bg-[#90Aead] shadow-md flex items-center px-6 z-50">
          {/* Only "welcome." text (not clickable) */}
          <span className="text-lg font-bold text-gray-900">welcome.</span>
        </header>

          {/* Page Content */}
          <main className="flex-grow w-full min-h-screen bg-texture p-6">{children}</main>

          {/* Footer */}
          <footer className="w-full py-4 text-center text-gray-700 text-sm">
            © Corey Smith 2025
          </footer>
        </div>
      </body>
    </html>
  );
}
