import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      year: "2024",
      title: "Youth Skill Development Program",
      description: "Launched comprehensive skill development initiative reaching over 2000 youth",
      category: "Education",
      impact: "2000+ beneficiaries"
    },
    {
      year: "2023",
      title: "Digital Literacy Drive",
      description: "Conducted digital literacy programs in 15 communities across Surat",
      category: "Technology",
      impact: "15 communities"
    },
    {
      year: "2023",
      title: "Healthcare Awareness Campaign",
      description: "Organized health camps and awareness programs during COVID-19",
      category: "Healthcare",
      impact: "5000+ people reached"
    },
    {
      year: "2022",
      title: "Educational Infrastructure Support",
      description: "Facilitated improvement of school infrastructure in rural areas",
      category: "Infrastructure",
      impact: "12 schools upgraded"
    },
    {
      year: "2022",
      title: "Youth Employment Initiative",
      description: "Created job opportunities through local business partnerships",
      category: "Employment",
      impact: "500+ jobs created"
    },
    {
      year: "2021",
      title: "Community Clean-up Drive",
      description: "Led environmental conservation efforts across Surat districts",
      category: "Environment",
      impact: "25 areas cleaned"
    }
  ];

  const stats = [
    { label: "Programs Launched", value: "25+", icon: Calendar },
    { label: "Communities Served", value: "50+", icon: MapPin },
    { label: "People Impacted", value: "10,000+", icon: Users }
  ];

  return (
    <section className="py-20">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Significant milestones and impactful initiatives that have made a difference 
            in the lives of people across Surat.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center card-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 hero-gradient rounded-full mb-4 mx-auto">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-shadow hover:shadow-lg smooth-transition">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {achievement.year}
                      </Badge>
                      <Badge variant="outline">
                        {achievement.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground mb-3">{achievement.description}</p>
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      <Users className="w-4 h-4" />
                      {achievement.impact}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;