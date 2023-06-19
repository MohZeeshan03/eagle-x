import About from "./components/About/about"
import Contact from "./components/Contact/contact"
import Ecosystem from "./components/Ecosystem/ecosystem"
import Footer from "./components/Footer/footer"
import Header from "./components/Header/header"
import Hero from "./components/Hero/hero"
import Roadmap from "./components/Roadmap/roadmap"
import Team from "./components/Team/team"
import Tokenomics from "./components/Tokenomics/tokenomics"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Ecosystem />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default App
