import localFont from 'next/font/local';

import MainNavbar from '../components/MainNavbar';
import PageTitle from '../components/PageTitle';

const titleFont = localFont({ src: './SphereFezFont.otf' });

/*

Nothing crazy here. We're changing the page title, creating the navbar, and using the video as the background.

*/
const Home = () => {
  return (
    <>
      <PageTitle title={'SPAYCE'} />
      <main className="flex flex-col justify-center items-center h-screen">
        <div className="flex justify-center bg-zinc-900/75 rounded-lg mb-48 px-6">
          <h1
            className={`${titleFont.className} text-white text-9xl cursor-default`}
          >
            SPAYCE
          </h1>
        </div>
        <MainNavbar
          firstPath={'iss'}
          secondPath={'mars'}
          isLandingPage={true}
        />
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
    </>
  );
};

export default Home;
