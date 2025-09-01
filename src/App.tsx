import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="pt-20 max-w-7xl mx-auto px-6">
        <About />
        <section id="experience" className="py-20">
          <h2 className="text-3xl font-semibold mb-4">Experience</h2>
          <p className="text-gray-700">Mon parcours professionnel.</p>
        </section>

        <section id="work" className="py-20">
          <h2 className="text-3xl font-semibold mb-4">Work</h2>
          <p className="text-gray-700">Mes projets principaux.</p>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700">Comment me joindre.</p>
        </section>

        <section id="all-my-projects" className="py-20">
          <h2 className="text-3xl font-semibold mb-4">All my projects</h2>
          <p className="text-gray-700">Liste complète de mes réalisations.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
