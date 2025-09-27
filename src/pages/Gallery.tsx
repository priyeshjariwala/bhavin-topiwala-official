import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import rally1 from "@/assets/rally-1.jpg";
import community1 from "@/assets/community-1.jpg";
import meeting1 from "@/assets/meeting-1.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const galleryItems = [
    {
      id: 1,
      title: "Youth Rally 2024",
      category: "Events",
      image: rally1,
      description: "Massive youth rally organized in Surat with over 5000 participants"
    },
    {
      id: 2,
      title: "Community Service Drive",
      category: "Community",
      image: community1,
      description: "Volunteers working together for community development"
    },
    {
      id: 3,
      title: "Strategic Planning Meeting",
      category: "Meetings",
      image: meeting1,
      description: "Important policy discussions and strategic planning session"
    },
    {
      id: 4,
      title: "Educational Workshop",
      category: "Education",
      image: community1,
      description: "Skill development workshop for local youth"
    },
    {
      id: 5,
      title: "Health Camp",
      category: "Healthcare",
      image: rally1,
      description: "Free health checkup camp organized for underprivileged"
    },
    {
      id: 6,
      title: "Cultural Event",
      category: "Events",
      image: meeting1,
      description: "Cultural celebration promoting local traditions"
    }
  ];

  const categories = ["all", "Events", "Community", "Meetings", "Education", "Healthcare"];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="container-max section-padding">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Event <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Capturing moments from various events, community services, and initiatives 
              that showcase our commitment to Surat's development.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "hero-gradient text-white" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all" ? "All" : category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="card-shadow hover:shadow-lg smooth-transition cursor-pointer group"
                onClick={() => setSelectedImage(item.image)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 smooth-transition"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 text-white">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <img
              src={selectedImage}
              alt="Gallery item"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;