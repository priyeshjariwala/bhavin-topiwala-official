import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, Users2, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Service to Society",
      description: "Dedicated to serving the community with passion and commitment."
    },
    {
      icon: Globe,
      title: "National Development",
      description: "Contributing to India's progress through youth empowerment."
    },
    {
      icon: Users2,
      title: "Youth Leadership",
      description: "Mentoring and guiding the next generation of leaders."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Bringing fresh ideas and modern solutions to traditional challenges."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Bhavin Topiwala</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A dedicated leader working towards the development of gujarat and empowerment of youth 
            through the Bharatiya Janata party.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Vision & Mission</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                As the Surat Mahanagar Adhyakash of Bharatiya Janata Yuva Morcha, I am committed 
                to creating opportunities for youth development, promoting educational initiatives, 
                and fostering community growth in Surat.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My focus is on building a stronger, more prosperous Surat through innovative 
                policies, youth engagement, and sustainable development programs that benefit 
                all sections of society.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Key Focus Areas</h3>
            <ul className="space-y-3">
              {[
                "Youth Employment & Skill Development",
                "Educational Infrastructure Improvement",
                "Healthcare Accessibility",
                "Digital Literacy Programs",
                "Environmental Conservation",
                "Women Empowerment Initiatives"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 hero-gradient rounded-full"></div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="card-shadow hover:shadow-lg smooth-transition">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 hero-gradient rounded-full mb-4 mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;