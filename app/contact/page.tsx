export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#90Aead] text-center px-6">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Music</h1>

      {/* Song 1 */}
      <p className="text-lg text-gray-700">You&apos;;re Still Good to Me | The War Within</p>
      <iframe 
        className="mt-4 rounded-lg"
        src="https://open.spotify.com/embed/track/0PyLMfIydHY4SzngUV6Cq8?utm_source=generator"
        width="50%" 
        height="352" 
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
      </iframe>

      {/* Song 2 */}
      <p className="text-lg text-gray-700 mt-8">Hard Fought Hallelujah | Lake x Roll</p>
      <iframe 
        className="mt-4 rounded-lg"
        src="https://open.spotify.com/embed/track/4cLC8gydI0O78g8chZugS4?utm_source=generator"
        width="50%" 
        height="352" 
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
      </iframe>
    </div>
  );
}
