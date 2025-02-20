"use client";
import { useState } from "react";
import Link from "next/link";
import { FiArrowDownCircle } from "react-icons/fi";

export default function HomePage() {
  const [hovered, setHovered] = useState(false);

  // 🎵 Song Data Array
  const songs = [
    { title: "You're Still Good to Me | The War Within", src: "https://open.spotify.com/embed/track/0PyLMfIydHY4SzngUV6Cq8?utm_source=generator" },
    { title: "Hard Fought Hallelujah | Lake x Roll", src: "https://open.spotify.com/embed/track/4cLC8gydI0O78g8chZugS4?utm_source=generator" },
    { title: "For My Daughter | Kane Brown", src: "https://open.spotify.com/embed/track/2moC0T4mGwmP8dUDostr2g?utm_source=generator" },
    { title: "The Prodigal | Josiah Queen", src: "https://open.spotify.com/embed/track/6BqobW3pEDxEvgznbam8kv?utm_source=generator" } // ✅ Added New Song
  ];

  return (
    <div className="bg-[#90Aead] text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center space-y-6">
        <h1 className="text-6xl font-bold">hi there.</h1>
        <p className="text-xl">A place where creativity and passion come together.</p>
        <Link href="#about">
          <FiArrowDownCircle 
            className={`text-4xl transition-transform ${hovered ? "scale-110" : "scale-100"}`} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
          />
        </Link>
      </section>

     {/* About Section */}
      <section 
        id="about" 
        className="py-5 px-8 max-w-4xl mx-auto text-center scroll-mt-20"
      >
        <h2 className="text-4xl font-semibold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I&apos;m passionate about building, creating, and bringing ideas to life. Welcome to my world.
        </p>
      </section>


      {/* Music Section */}
      <section className="py-32 px-8 text-center">
        <h2 className="text-4xl font-semibold mb-6">What I&apos;m Listening To</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {songs.map((song, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform">
              <p className="text-lg text-gray-700">{song.title}</p>
              <iframe 
                className="mt-4 rounded-lg w-full"
                src={song.src}
                width="100%" 
                height="152" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
              </iframe>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
