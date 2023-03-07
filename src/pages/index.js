const Home = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="bg-video"
        src="/space_vid.mp4"
        type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Home;
