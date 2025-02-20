export default function MusicPage() {
  // 🎵 Song Data Array
  const songs = [
    { title: "You're Still Good to Me | The War Within", src: "https://open.spotify.com/embed/track/0PyLMfIydHY4SzngUV6Cq8?utm_source=generator" },
    { title: "Hard Fought Hallelujah | Lake x Roll", src: "https://open.spotify.com/embed/track/4cLC8gydI0O78g8chZugS4?utm_source=generator" },
    { title: "For My Daughter | Kane Brown", src: "https://open.spotify.com/embed/track/2moC0T4mGwmP8dUDostr2g?utm_source=generator" },
    { title: "The Prodigal | Josiah Queen", src: "https://open.spotify.com/embed/track/6BqobW3pEDxEvgznbam8kv?utm_source=generator" } // ✅ Added New Song

  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 md:pt-24">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Music</h1>

      {/* 🎶 Loop Through Songs */}
      {songs.map((song, index) => (
        <div key={index} className="w-full max-w-md sm:max-w-xs mt-8">
          <p className="text-lg text-gray-700">{song.title}</p>
          <iframe 
            className="mt-4 rounded-lg w-full"
            src={song.src}
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
        </div>
      ))}
    </div>
  );
}
