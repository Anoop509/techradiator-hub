import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";  
import VideoGrid from "@/components/VideoGrid";
import About from "@/components/About";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="videos">
          <VideoGrid />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="social">
          <SocialLinks />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
