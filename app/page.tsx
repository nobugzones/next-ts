export default function Home() {
  return (
    <main className="min-h-screen bg-[#90Aead] flex flex-col items-center justify-center px-6">
      
      {/* Center Content Lower on the Page */}
      <div className="flex flex-col items-center justify-center space-y-6">
      <p className="text-4xl font-bold text-gray-900">
        i am glad you are here.
        <span className="block mt-2 text-lg font-normal">
          Click on the <strong>i.</strong> to learn about the game of pickleball.
          <br></br>
          Click on the <strong>ii.</strong> to see my projects (coming soon!).
          <br></br>
          Click on the <strong>iii.</strong> to see my favorite songs. 
        </span>
      </p>
      </div>

    </main>
  );
}
  