
function About() {
  return (
    <div className="w-full min-h-screen p-2 flex gap-12 items-center justify-center flex-col">
      <h2 className="text-7xl font-bold text-center">ABOUT</h2>
      <div className="flex  gap-8 items-center">
        <div className="size-[400px] min-w-[400px]  bg-gray-800 rounded-3xl"></div>
        <p className="text-2xl">
          My name is Davy Rodríguez, and I am a passionate web developer
          dedicated to transforming ideas into captivating digital experiences.
          <br />
          <br />
          With continually growing technical skills and a creative mindset, my
          goal is to take each project to the next level by combining efficiency
          in backend development with meticulous aesthetics in the frontend.
          <br />
          <br />
          My commitment to constant learning and my unique perspective,
          influenced by my passion for music, literature, film, and video games,
          make me an enthusiastic and adaptable candidate. Discover how I can
          bring a distinctive touch to your team and projects!
        </p>
      </div>
    </div>
  );
}

export default About;
