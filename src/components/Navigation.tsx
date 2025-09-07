import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, Youtube, Search, Bell } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Videos", href: "#videos" },
    { label: "About", href: "#about" },
    { label: "Connect", href: "#social" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-primary-foreground font-bold text-lg">TR</span>
            </div>
            <span className="text-xl font-bold text-gradient-primary hidden sm:block">
              Tech Radiator
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="ghost"
              className="hidden sm:flex items-center gap-2 hover:bg-primary/10"
              onClick={() => scrollToSection('videos')}
            >
              <Search className="w-4 h-4" />
              Search
            </Button>

            <Button
              size="sm"
              className="subscribe-btn px-4 py-2 text-sm font-semibold"
              onClick={() => window.open('https://youtube.com/@techradiator?sub_confirmation=1', '_blank')}
            >
              <Youtube className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Subscribe</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              
              <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-md">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-3 pb-6 border-b border-border/50">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-primary-foreground font-bold text-xl">TR</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gradient-primary">Tech Radiator</h3>
                      <p className="text-sm text-muted-foreground">Tech Reviews & More</p>
                    </div>
                  </div>

                  {/* Mobile Navigation Items */}
                  <div className="space-y-4">
                    {navItems.map((item) => (
                      <SheetClose key={item.label} asChild>
                        <button
                          onClick={() => scrollToSection(item.href.substring(1))}
                          className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-card/80 transition-colors text-left"
                        >
                          <span className="font-medium">{item.label}</span>
                        </button>
                      </SheetClose>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <div className="space-y-3 pt-6 border-t border-border/50">
                    <SheetClose asChild>
                      <Button 
                        className="w-full subscribe-btn py-3 font-semibold"
                        onClick={() => window.open('https://youtube.com/@techradiator?sub_confirmation=1', '_blank')}
                      >
                        <Bell className="w-4 h-4 mr-2" />
                        Subscribe on YouTube
                      </Button>
                    </SheetClose>
                    
                    <SheetClose asChild>
                      <Button 
                        variant="outline" 
                        className="w-full py-3 border-primary/50 hover:border-primary hover:bg-primary/10"
                        onClick={() => scrollToSection('videos')}
                      >
                        <Search className="w-4 h-4 mr-2" />
                        Browse Videos
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;