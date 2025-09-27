import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/bhavin-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-accent to-background">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Bhavin Topiwala</span>
              </h1>
              <p className="text-xl text-primary font-semibold">
                Surat Mahanagar Adhyakash
              </p>
              <p className="text-lg text-muted-foreground">
                Bharatiya Janata Yuva Morcha, Surat
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Leading Surat's youth towards development, progress, and positive change. 
              Working tirelessly for the betterment of our community and the nation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 hero-gradient rounded-full mb-2 mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Youth Connected</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 hero-gradient rounded-full mb-2 mx-auto">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Initiatives</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 hero-gradient rounded-full mb-2 mx-auto">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Awards</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="hero-gradient text-white elegant-shadow smooth-transition hover:scale-105"
              >
                <Link to="/contact" className="flex items-center">
                  Connect With Me
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Bhavin Topiwala"
                className="w-full h-[500px] object-cover rounded-2xl elegant-shadow"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full hero-gradient rounded-2xl opacity-10 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;