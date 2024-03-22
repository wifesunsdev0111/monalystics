import Navbar from "./landing/components/Navbar";
import Hero from "./landing/components/Hero";
import Features from "./landing/components/Features";
import Footer from "./landing/components/Footer";
import Services from "./landing/components/Services";
import Countries from "./landing/components/Countries";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Countries />
      <Footer />
    </main>
  );
}
