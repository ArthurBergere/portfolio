import About from "./sections/About";
import Experience from "./sections/Experience/Experience";
import Header from "./components/layout/Header";
import Project from "./sections/projects/Project";
import Contact from "./sections/Contact";
import Work from "./sections/work/Work";
import Footer from "./components/layout/Footer";

function App() {

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="pt-20 max-w-7xl mx-auto px-6">
        <About />
        <Experience />
        <Work />
        <Contact />
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
