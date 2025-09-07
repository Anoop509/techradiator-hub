import { Button } from "@/components/ui/button";
import { Play, Users, Video } from "lucide-react";
import logoImage from "@/assets/tech-radiator-logo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-neon-cyan/5 to-neon-purple/5 rounded-full blur-3xl animate-pulse-neon"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto animate-slide-up">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={logoImage} 
            alt="Tech Radiator Logo" 
            className="mx-auto w-64 h-32 object-cover rounded-lg neon-glow mb-4"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient-primary animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Tech Radiator
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Ek Engineer jo tech videos bhi banata hai
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2 text-primary">
            <Users className="w-6 h-6" />
            <span className="text-lg font-semibold">5K+ Subscribers</span>
          </div>
          <div className="flex items-center gap-2 text-accent">
            <Video className="w-6 h-6" />
            <span className="text-lg font-semibold">400+ Videos</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            className="subscribe-btn text-lg px-8 py-6 rounded-xl font-bold"
            onClick={() => window.open('https://youtube.com/@techradiator', '_blank')}
          >
            <Play className="w-6 h-6 mr-2" />
            Subscribe Now
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 rounded-xl font-bold border-primary/50 hover:border-primary hover:bg-primary/10 neon-glow"
          >
            Watch Latest Videos
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;