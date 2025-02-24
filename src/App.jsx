import {
  Navbar,
  Hero,
  Technologies,
  Experience,
  CodingProfiles,
  Education,
} from "./components";
const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Experience />
        <CodingProfiles />
        <Education />
      </div>
    </div>
  );
};

export default App;
