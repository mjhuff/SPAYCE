import localFont from 'next/font/local';
import { useRouter } from 'next/router';

const buttonFont = localFont({ src: './Atures700PersonalUseOnly-lax5.ttf' });

//For each potential path, need to map the correct route plus text.
const potentialPaths = {
  home: ['/', 'Home'],
  iss: ['/iss', 'ISS Data'],
  mars: ['/mars', 'Mars Rover Images'],
};

const MainNavbar = ({ firstPath, secondPath, isLandingPage }) => {
  const router = useRouter();

  if (isLandingPage)
    return (
      <div className="flex justify-around bg-zinc-900/75 rounded-lg w-1/3">
        <button
          onClick={() => router.push(potentialPaths[firstPath][0])}
          className={`${buttonFont.className} text-white text-lg h-16 w-56 bg-indigo-900 rounded-xl my-2.5 hover:bg-indigo-800`}
        >
          {potentialPaths[firstPath][1]}
        </button>
        <button
          onClick={() => router.push(potentialPaths[secondPath][0])}
          className={`${buttonFont.className} text-white text-lg h-16 w-56 bg-indigo-900 rounded-xl my-2.5 hover:bg-indigo-800`}
        >
          {potentialPaths[secondPath][1]}
        </button>
      </div>
    );
  else
    return (
      <div className="flex justify-center bg-zinc-900/75 rounded-lg w-100 fixed top-0 left-0 right-0">
        <button
          onClick={() => router.push(potentialPaths[firstPath][0])}
          className={`${buttonFont.className} text-white text-xs h-8 w-28 bg-gray-700 rounded-xl my-2.5 hover:bg-indigo-800 mr-5`}
        >
          {potentialPaths[firstPath][1]}
        </button>
        <button
          onClick={() => router.push(potentialPaths[secondPath][0])}
          className={`${buttonFont.className} text-white text-xs h-8 w-28 bg-gray-700 rounded-xl my-2.5 hover:bg-indigo-800`}
        >
          {potentialPaths[secondPath][1]}
        </button>
      </div>
    );
};

export default MainNavbar;
