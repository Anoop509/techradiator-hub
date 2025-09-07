import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Smartphone, Laptop, Award, Users, PlayCircle } from "lucide-react";
import creatorPhoto from "@/assets/creator-photo.jpg";

const About = () => {
  const achievements = [
    { icon: Users, label: "5K+ Subscribers", color: "text-primary" },
    { icon: PlayCircle, label: "400+ Videos", color: "text-accent" },
    { icon: Award, label: "Tech Expert", color: "text-neon-purple" },
  ];

  const expertise = [
    { icon: Smartphone, label: "Mobile Reviews" },
    { icon: Laptop, label: "Laptop Testing" },
    { icon: Cpu, label: "PC Building" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            About Tech Radiator
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the engineer behind the channel - passionate about technology and helping others make informed decisions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Creator Photo & Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30 animate-pulse-neon"></div>
              <img 
                src={creatorPhoto}
                alt="Tech Radiator Creator"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl neon-glow"
              />
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.label}
                  className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <achievement.icon className={`w-8 h-8 mx-auto mb-2 ${achievement.color}`} />
                  <p className="text-sm font-semibold text-muted-foreground">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Card className="card-hover border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gradient-primary">
                  The Story Behind the Channel
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Welcome to Tech Radiator! I'm an engineer by profession who discovered a passion for creating 
                    technology content that actually helps people. What started as a hobby has grown into a 
                    community of 5,000+ tech enthusiasts.
                  </p>
                  <p>
                    With my engineering background, I bring a unique perspective to tech reviews - focusing on 
                    the technical details that matter while keeping everything accessible for everyone.
                  </p>
                  <p>
                    From unboxing the latest smartphones to building custom PCs, I cover it all with honest 
                    opinions and thorough testing. Because when you're spending your hard-earned money on tech, 
                    you deserve to know exactly what you're getting.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Expertise Areas */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Areas of Expertise</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {expertise.map((skill, index) => (
                  <div 
                    key={skill.label}
                    className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <skill.icon className="w-6 h-6 text-primary" />
                    <span className="font-medium">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <Card className="border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-gradient-primary text-primary-foreground px-3 py-1">
                    Fun Fact
                  </Badge>
                  <p className="text-muted-foreground italic">
                    "I've personally tested over 200+ tech products in the last 2 years, 
                    from ₹500 earphones to ₹2 lakh gaming laptops!"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;