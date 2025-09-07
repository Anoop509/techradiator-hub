import { Button } from "@/components/ui/button";
import { Youtube, Instagram, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, url: "https://youtube.com/@techradiator", label: "YouTube" },
    { icon: Instagram, url: "https://instagram.com/techradiator", label: "Instagram" },
    { icon: Twitter, url: "https://twitter.com/techradiator", label: "Twitter" },
    { icon: Mail, url: "mailto:business@techradiator.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "Latest Videos", href: "#videos" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#social" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-t from-background via-muted/10 to-background border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-purple rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-xl">TR</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient-primary">Tech Radiator</h3>
                <p className="text-sm text-muted-foreground">Engineering Tech Reviews</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Honest tech reviews and unboxings by an engineer. Helping you make informed decisions about your tech purchases.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 p-0 border-border/50 hover:border-primary/50 hover:bg-primary/10 rounded-lg"
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Channel Stats */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Channel Stats</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/30">
                <span className="text-sm text-muted-foreground">Subscribers</span>
                <span className="font-semibold text-primary">5K+</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/30">
                <span className="text-sm text-muted-foreground">Videos</span>
                <span className="font-semibold text-accent">400+</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/30">
                <span className="text-sm text-muted-foreground">Total Views</span>
                <span className="font-semibold text-neon-purple">2M+</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Get notified about the latest tech reviews and unboxings!
            </p>
            <Button 
              className="w-full subscribe-btn py-2 font-semibold"
              onClick={() => window.open('https://youtube.com/@techradiator?sub_confirmation=1', '_blank')}
            >
              Subscribe on YouTube
            </Button>
            <Button 
              variant="outline"
              className="w-full py-2 border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => window.open('mailto:business@techradiator.com', '_blank')}
            >
              Business Inquiries
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© {currentYear} Tech Radiator. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for tech enthusiasts</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Built with React & TailwindCSS</span>
              <Button
                size="sm"
                variant="outline"
                className="w-10 h-10 p-0 border-border/50 hover:border-primary/50 hover:bg-primary/10 rounded-lg"
                onClick={scrollToTop}
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;