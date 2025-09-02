
import About from "./sections/About";
import Experience from "./sections/Experience/Experience";
import Header from "./components/layout/Header";
import Project from "./sections/projects/Project";
import Contact from "./sections/Contact";
import Work from "./sections/work/Work";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="pt-20 max-w-7xl mx-auto px-6">
        <About />
        <Experience />

        <Work />

        <Contact />

        <Project  />

      </main>
    </div>
  );
}

export default App;
