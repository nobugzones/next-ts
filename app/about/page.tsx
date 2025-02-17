export default function AboutPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-start bg-[#90Aead] text-center px-6 pt-20">
        {/* History Section */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">The History of Pickleball</h1>
        <p className="mt-4 text-lg text-gray-800 font-mono max-w-2xl leading-relaxed">
          Pickleball was invented in the summer of 1965 on Bainbridge Island, Washington. It began as a backyard game,
          created by Joel Pritchard, Bill Bell, and Barney McCallum, who improvised with a badminton court, wooden paddles,
          and a perforated plastic ball. <br /><br />
          The game quickly gained popularity due to its accessibility and fun, blending elements of tennis, badminton,
          and ping-pong. Over the years, pickleball has evolved into an internationally recognized sport, with dedicated courts,
          professional tournaments, and millions of players worldwide.
        </p>

        {/* Rules Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Pickleball Rules (Explained Like You’re 5)</h2>
        <div className="text-lg text-gray-800 font-mono max-w-2xl leading-relaxed text-left">
          <ul className="list-disc list-inside">
            <li><strong>1. Serve Underhand:</strong> You must hit the ball underhand and below your waist.</li>
            <li><strong>2. One Bounce Rule:</strong> The ball must bounce once on each side before you can volley it.</li>
            <li><strong>3. Stay Out of the Kitchen:</strong> The non-volley zone (the kitchen) is a no-go unless the ball bounces there first.</li>
            <li><strong>4. Only the Serving Team Scores:</strong> You can only score points when your team is serving.</li>
            <li><strong>5. Serve Diagonally:</strong> The serve must go to the opposite service box.</li>
            <li><strong>6. First to 11 Wins:</strong> Games are typically played to 11 points, and you must win by 2.</li>
          </ul>
        </div>

        {/* Top Pickleball Courts in Plainfield, Indiana */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Top Pickleball Courts in Plainfield, IN</h2>
        <div className="text-lg text-gray-800 font-mono max-w-2xl leading-relaxed text-left">
          <ul className="list-disc list-inside">
            <li><strong>Plainfield Recreation Center:</strong> A great indoor option with well-maintained courts.</li>
            <li><strong>Hummel Park:</strong> Offers outdoor courts with plenty of space for doubles play.</li>
            <li><strong>Franklin Park:</strong> A quieter spot with dedicated pickleball courts.</li>
            <li><strong>Danville, IN Pickleball Courts:</strong> These courts have lights that stay on by feeding them a quarter every so often.</li>
          </ul>
        </div>
      </div>
    );
}
