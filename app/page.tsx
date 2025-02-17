export default function Home() {
  return (
    <div className="min-h-screen bg-[#90Aead] flex flex-col items-center px-6">
      {/* Navigation Bar */}
      <nav className="w-full max-w-5xl py-4 flex justify-between items-center">
        {/* Home Link in Upper Left */}
        <a href="/" className="text-xl font-bold text-gray-900 hover:text-blue-500">
          
        </a>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="/about" className="text-lg font-medium hover:text-blue-500 transition">About</a>
          <a href="/projects" className="text-lg font-medium hover:text-blue-500 transition">Projects</a>
          <a href="/contact" className="text-lg font-medium hover:text-blue-500 transition">Contact</a>
        </div>
      </nav>

      {/* Main Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center">
        <div className="container">
          <p className="text-4xl font-bold text-gray-900">i am glad you are here.</p>
        </div>
      </section>
    </div>
  );
}
