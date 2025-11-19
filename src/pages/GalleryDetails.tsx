import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ArrowLeft } from "lucide-react";
import rally1 from "@/assets/rally-1.jpg";
import community1 from "@/assets/community-1.jpg";
import meeting1 from "@/assets/meeting-1.jpg";

const GalleryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery events with multiple images
  const galleryEvents = [
    {
      id: "1",
      title: "Youth Rally 2024",
      category: "Events",
      description: "Massive youth rally organized in Surat with over 5000 participants. The event showcased the energy and enthusiasm of young leaders committed to nation building.",
      date: "March 15, 2024",
      location: "Surat Convention Center",
      images: [rally1, community1, meeting1, rally1]
    },
    {
      id: "2",
      title: "Community Service Drive",
      category: "Community",
      description: "Volunteers working together for community development. Our team organized various activities including cleanliness drives and awareness campaigns.",
      date: "February 20, 2024",
      location: "Various locations in Surat",
      images: [community1, rally1, meeting1]
    },
    {
      id: "3",
      title: "Strategic Planning Meeting",
      category: "Meetings",
      description: "Important policy discussions and strategic planning session with party leaders and local representatives to chart the future course.",
      date: "January 10, 2024",
      location: "BJP Office, Surat",
      images: [meeting1, community1, rally1]
    },
    {
      id: "4",
      title: "Educational Workshop",
      category: "Education",
      description: "Skill development workshop for local youth focusing on career guidance and entrepreneurship opportunities.",
      date: "April 5, 2024",
      location: "Surat Youth Center",
      images: [community1, meeting1, rally1]
    },
    {
      id: "5",
      title: "Health Camp",
      category: "Healthcare",
      description: "Free health checkup camp organized for underprivileged communities with medical professionals volunteering their services.",
      date: "March 28, 2024",
      location: "Community Health Center",
      images: [rally1, community1, meeting1]
    },
    {
      id: "6",
      title: "Cultural Event",
      category: "Events",
      description: "Cultural celebration promoting local traditions and showcasing the rich heritage of Gujarat.",
      date: "February 14, 2024",
      location: "Surat Cultural Complex",
      images: [meeting1, rally1, community1]
    }
  ];

  const event = galleryEvents.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="py-20">
          <div className="container-max section-padding text-center">
            <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
            <Button onClick={() => navigate("/gallery")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Gallery
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="container-max section-padding">
          {/* Back Button */}
          <Button
            variant="outline"
            className="mb-8"
            onClick={() => navigate("/gallery")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Gallery
          </Button>

          {/* Event Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary/90 text-white">
                {event.category}
              </Badge>
              <span className="text-muted-foreground">{event.date}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {event.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              {event.description}
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold">Location:</span> {event.location}
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.images.map((image, index) => (
              <Card 
                key={index}
                className="card-shadow hover:shadow-lg smooth-transition cursor-pointer group overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={image}
                      alt={`${event.title} - Image ${index + 1}`}
                      className="w-full h-80 object-cover group-hover:scale-105 smooth-transition"
                    />
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

export default GalleryDetails;
