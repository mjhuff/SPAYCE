import localFont from 'next/font/local';
const titleFont = localFont({ src: './SphereFezFont.otf' });
const buttonFont = localFont({ src: './Atures700PersonalUseOnly-lax5.ttf' });

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center bg-black/75 rounded-lg mb-48 px-6">
        <h1 className={`${titleFont.className} text-white text-9xl`}>Test</h1>
      </div>
      <div className="flex justify-around bg-black/75 rounded-lg w-1/3">
        <button
          className={`${buttonFont.className} text-white text-lg h-16 w-56 bg-indigo-900 rounded-xl my-2.5 hover:bg-indigo-800`}
        >
          ISS Data
        </button>
        <button
          className={`${buttonFont.className} text-white text-lg h-16 w-56 bg-indigo-900 rounded-xl my-2.5 hover:bg-indigo-800`}
        >
          Mars Rover Images
        </button>
      </div>
      <video
        autoPlay
        loop
        muted
        className="w-screen h-screen object-cover fixed inset-0 -z-10"
        src="/space_vid.mp4"
        type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>
    </main>
  );
};

export default Home;
