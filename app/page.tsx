import Link from "next/link"; // ✅ Import Link from Next.js

export default function Home() {
  return (
    <div className="min-h-screen bg-[#90Aead] flex flex-col items-center px-6">
      {/* Navigation Bar */}
      <nav className="w-full max-w-5xl py-4 flex justify-between items-center">
        {/* Home Link in Upper Left */}
        <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-500">
        
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/about" className="text-lg font-medium hover:text-blue-500 transition">About</Link>
          <Link href="/projects" className="text-lg font-medium hover:text-blue-500 transition">Projects</Link>
          <Link href="/contact" className="text-lg font-medium hover:text-blue-500 transition">Contact</Link>
        </div>
      </nav>

      {/* Dog Image Above the Main Content */}
      {/* Image and Text Container */}
      {/* Center Content Lower on the Page */}
      <div className="flex flex-col items-center justify-center min-h-screen pb-20 space-y-6">
        <img src="/roaster.png" alt="Dog Icon" width={150} height={150} className="rounded-full" />
        <p className="text-4xl font-bold text-gray-900">i am glad you are here.</p>
      </div>

      {/* Main Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center">
        <div className="container">
          <p className="text-4xl font-bold text-gray-900"></p>
        </div>
      </section>
    </div>
  );
}
