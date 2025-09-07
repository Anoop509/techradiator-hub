import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Youtube, 
  Instagram, 
  Twitter, 
  Mail, 
  ExternalLink,
  Bell,
  Share2
} from "lucide-react";

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@techradiator",
      followers: "5K+ Subscribers",
      description: "Latest tech reviews & unboxings",
      primary: true,
      gradient: "from-red-500 to-red-600"
    },
    {
      name: "Instagram", 
      icon: Instagram,
      url: "https://instagram.com/techradiator",
      followers: "2.5K Followers",
      description: "Behind the scenes & quick tech tips",
      gradient: "from-pink-500 via-purple-500 to-orange-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/techradiator", 
      followers: "1.8K Followers",
      description: "Tech news & quick thoughts",
      gradient: "from-blue-400 to-blue-600"
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleSubscribe = () => {
    window.open('https://youtube.com/@techradiator?sub_confirmation=1', '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Tech Radiator - Tech Reviews by an Engineer',
        text: 'Check out Tech Radiator for honest tech reviews and unboxings!',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Stay Connected
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow Tech Radiator across all platforms for the latest updates, behind-the-scenes content, and tech discussions
          </p>
        </div>

        {/* Primary CTA */}
        <div className="text-center mb-12">
          <div className="inline-flex gap-4 p-6 rounded-2xl bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm border border-primary/20 neon-glow animate-pulse-neon">
            <Button 
              size="lg"
              onClick={handleSubscribe}
              className="subscribe-btn text-lg px-8 py-4 rounded-xl font-bold"
            >
              <Bell className="w-5 h-5 mr-2" />
              Subscribe on YouTube
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={handleShare}
              className="text-lg px-8 py-4 rounded-xl font-bold border-primary/50 hover:border-primary hover:bg-primary/10 neon-glow"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share Channel
            </Button>
          </div>
        </div>

        {/* Social Platform Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {socialPlatforms.map((platform, index) => (
            <Card 
              key={platform.name}
              className={`card-hover cursor-pointer border-0 bg-card/80 backdrop-blur-sm animate-slide-up ${
                platform.primary ? 'ring-2 ring-primary/30' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleSocialClick(platform.url)}
            >
              <CardContent className="p-6 text-center">
                {/* Platform Icon with Gradient */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${platform.gradient} p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <platform.icon className="w-full h-full text-white" />
                </div>

                {/* Platform Info */}
                <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                <p className="text-primary font-semibold mb-2">{platform.followers}</p>
                <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>

                {/* Follow Button */}
                <Button 
                  size="sm"
                  variant="outline"
                  className="w-full border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Follow
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm border-0 animate-fade-in">
          <CardContent className="p-8 text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Business Inquiries</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Interested in collaborations, product reviews, or sponsorships? 
              Let's discuss how we can work together.
            </p>
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-xl border-primary/50 hover:border-primary hover:bg-primary/10 neon-glow"
              onClick={() => window.open('mailto:business@techradiator.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SocialLinks;