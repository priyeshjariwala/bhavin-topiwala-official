import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ArrowLeft } from "lucide-react";
import event1 from "@/assets/gallery/events/1.jpg";
import event2 from "@/assets/gallery/events/2.jpg";
import event3 from "@/assets/gallery/events/3.jpg";
import event4 from "@/assets/gallery/events/4.jpg";
import event5 from "@/assets/gallery/events/5.jpg";
import event6 from "@/assets/gallery/events/6.jpg";
import event7 from "@/assets/gallery/events/7.jpg";
import event8 from "@/assets/gallery/events/8.jpg";
import event9 from "@/assets/gallery/events/9.jpg";
import event10 from "@/assets/gallery/events/10.jpg";
import event11 from "@/assets/gallery/events/11.jpg";
import event12 from "@/assets/gallery/events/12.jpg";
import event13 from "@/assets/gallery/events/13.jpg";
import event14 from "@/assets/gallery/events/14.jpg";
import event15 from "@/assets/gallery/events/15.jpg";
import event16 from "@/assets/gallery/events/16.jpg";
import event17 from "@/assets/gallery/events/17.jpg";
import event18 from "@/assets/gallery/events/18.jpg";
import event19 from "@/assets/gallery/events/19.jpg";
import event20 from "@/assets/gallery/events/20.jpg";
import event21 from "@/assets/gallery/events/21.jpg";
import event22 from "@/assets/gallery/events/22.jpg";
import event23 from "@/assets/gallery/events/23.jpg";
import event24 from "@/assets/gallery/events/24.jpg";
import event25 from "@/assets/gallery/events/25.jpg";
import event26 from "@/assets/gallery/events/26.jpg";
import event27 from "@/assets/gallery/events/27.jpg";
import event28 from "@/assets/gallery/events/28.jpg";
import event29 from "@/assets/gallery/events/29.jpg";
import event30 from "@/assets/gallery/events/30.jpg";
import event31 from "@/assets/gallery/events/31.jpg";
import event32 from "@/assets/gallery/events/32.jpg";
import event33 from "@/assets/gallery/events/33.jpg";
import event34 from "@/assets/gallery/events/34.jpg";
import event35 from "@/assets/gallery/events/35.jpg";
import event36 from "@/assets/gallery/events/36.jpg";
import event37 from "@/assets/gallery/events/37.jpg";
import event38 from "@/assets/gallery/events/38.jpg";
import event39 from "@/assets/gallery/events/39.jpg";
import event40 from "@/assets/gallery/events/40.jpg";
import event41 from "@/assets/gallery/events/41.jpg";
import event42 from "@/assets/gallery/events/42.jpg";
import event43 from "@/assets/gallery/events/43.jpg";
import event44 from "@/assets/gallery/events/44.jpg";
import event45 from "@/assets/gallery/events/45.jpg";
import event46 from "@/assets/gallery/events/46.jpg";
import event47 from "@/assets/gallery/events/47.jpg";
import event48 from "@/assets/gallery/events/48.jpg";
import event49 from "@/assets/gallery/events/49.jpg";
import event50 from "@/assets/gallery/events/50.jpg";
import event51 from "@/assets/gallery/events/51.jpg";
import event52 from "@/assets/gallery/events/52.jpg";
import event53 from "@/assets/gallery/events/53.jpg";
import event54 from "@/assets/gallery/events/54.jpg";
import meetings1 from "@/assets/gallery/meetings/1.jpg";
import meetings2 from "@/assets/gallery/meetings/2.jpg";
import meetings3 from "@/assets/gallery/meetings/3.jpg";
import meetings4 from "@/assets/gallery/meetings/4.jpg";
import meetings5 from "@/assets/gallery/meetings/5.jpg";
import meetings6 from "@/assets/gallery/meetings/6.jpg";
import meetings7 from "@/assets/gallery/meetings/7.jpg";
import meetings8 from "@/assets/gallery/meetings/8.jpg";
import meetings9 from "@/assets/gallery/meetings/9.jpg";
import meetings10 from "@/assets/gallery/meetings/10.jpg";
import meetings11 from "@/assets/gallery/meetings/11.jpg";
import meetings12 from "@/assets/gallery/meetings/12.jpg";
import meetings13 from "@/assets/gallery/meetings/13.jpg";
import meetings14 from "@/assets/gallery/meetings/14.jpg";
import meetings15 from "@/assets/gallery/meetings/15.jpg";
import meetings16 from "@/assets/gallery/meetings/16.jpg";
import meetings17 from "@/assets/gallery/meetings/17.jpg";
import meetings18 from "@/assets/gallery/meetings/18.jpg";
import meetings19 from "@/assets/gallery/meetings/19.jpg";
import meetings20 from "@/assets/gallery/meetings/20.jpg";
import meetings21 from "@/assets/gallery/meetings/21.jpg";
import meetings22 from "@/assets/gallery/meetings/22.jpg";
import meetings23 from "@/assets/gallery/meetings/23.jpg";
import meetings24 from "@/assets/gallery/meetings/24.jpg";
import meetings25 from "@/assets/gallery/meetings/25.jpg";
import meetings26 from "@/assets/gallery/meetings/26.jpg";
import meetings27 from "@/assets/gallery/meetings/27.jpg";
import meetings28 from "@/assets/gallery/meetings/28.jpg";
import meetings29 from "@/assets/gallery/meetings/29.jpg";
import meetings30 from "@/assets/gallery/meetings/30.jpg";
import meetings31 from "@/assets/gallery/meetings/31.jpg";
import meetings32 from "@/assets/gallery/meetings/32.jpg";
import meetings33 from "@/assets/gallery/meetings/33.jpg";
import meetings34 from "@/assets/gallery/meetings/34.jpg";
import meetings35 from "@/assets/gallery/meetings/35.jpg";
import meetings36 from "@/assets/gallery/meetings/36.jpg";
import meetings37 from "@/assets/gallery/meetings/37.jpg";
import meetings38 from "@/assets/gallery/meetings/38.jpg";
import meetings39 from "@/assets/gallery/meetings/39.jpg";
import meetings40 from "@/assets/gallery/meetings/40.jpg";
import meetings41 from "@/assets/gallery/meetings/41.jpg";
import meetings42 from "@/assets/gallery/meetings/42.jpg";

const GalleryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery events with multiple images
  const galleryEvents = [
    {
      id: "1",
      title: "All Events",
      category: "Events",
      description:
        "Massive youth rally organized in Surat with over 10000 participants, cleanliness drive, NAMO YUVA RUN, Election Campaign, etc.",
      date: "2025",
      location: "Gujarat",
      images: [
        event1,
        event2,
        event3,
        event4,
        event5,
        event6,
        event7,
        event8,
        event9,
        event10,
        event11,
        event12,
        event13,
        event14,
        event15,
        event16,
        event17,
        event18,
        event19,
        event20,
        event21,
        event22,
        event23,
        event24,
        event25,
        event26,
        event27,
        event28,
        event29,
        event30,
        event31,
        event32,
        event33,
        event34,
        event35,
        event36,
        event37,
        event38,
        event39,
        event40,
        event41,
        event42,
        event43,
        event44,
        event45,
        event46,
        event47,
        event48,
        event49,
        event50,
        event51,
        event52,
        event53,
        event54,
      ],
    },

    {
      id: "2",
      title: "Strategic Planning Meeting",
      category: "Meetings",
      description:
        "Important policy discussions and strategic planning session with party leaders, Meeting with Yuva Morcha Members, Ward Meetings etc.",
      date: "2025",
      location: "Gujarat",
      images: [
        meetings1,
        meetings2,
        meetings3,
        meetings4,
        meetings5,
        meetings6,
        meetings7,
        meetings8,
        meetings9,
        meetings10,
        meetings11,
        meetings12,
        meetings13,
        meetings14,
        meetings15,
        meetings16,
        meetings17,
        meetings18,
        meetings19,
        meetings20,
        meetings21,
        meetings22,
        meetings23,
        meetings24,
        meetings25,
        meetings26,
        meetings27,
        meetings28,
        meetings29,
        meetings30,
        meetings31,
        meetings32,
        meetings33,
        meetings34,
        meetings35,
        meetings36,
        meetings37,
        meetings38,
        meetings39,
        meetings40,
        meetings41,
        meetings42,
      ],
    },
    // {
    //   id: "3",
    //   title: "Cultural Event",
    //   category: "Events",
    //   description:
    //     "Cultural celebration promoting local traditions and showcasing the rich heritage of Gujarat.",
    //   date: "February 14, 2024",
    //   location: "Surat Cultural Complex",
    //   images: [
    //     event1,
    //     event2,
    //     event3,
    //     event4,
    //     event5,
    //     event6,
    //     event7,
    //     event8,
    //     event9,
    //     event10,
    //     event11,
    //     event12,
    //     event13,
    //     event14,
    //     event15,
    //     event16,
    //     event17,
    //     event18,
    //     event19,
    //     event20,
    //     event21,
    //     event22,
    //     event23,
    //     event24,
    //     event25,
    //     event26,
    //     event27,
    //     event28,
    //     event29,
    //     event30,
    //     event31,
    //     event32,
    //     event33,
    //     event34,
    //     event35,
    //     event36,
    //     event37,
    //     event38,
    //     event39,
    //     event40,
    //     event41,
    //     event42,
    //     event43,
    //     event44,
    //     event45,
    //     event46,
    //     event47,
    //     event48,
    //     event49,
    //     event50,
    //     event51,
    //     event52,
    //     event53,
    //     event54,
    //   ],
    // },
    // {
    //   id: "4",
    //   title: "Community Service Drive",
    //   category: "Community",
    //   description:
    //     "Volunteers working together for community development. Our team organized various activities including cleanliness drives and awareness campaigns.",
    //   date: "February 20, 2024",
    //   location: "Various locations in Surat",
    //   images: [community1, rally1, meeting1],
    // },
    // {
    //   id: "5",
    //   title: "Educational Workshop",
    //   category: "Education",
    //   description:
    //     "Skill development workshop for local youth focusing on career guidance and entrepreneurship opportunities.",
    //   date: "April 5, 2024",
    //   location: "Surat Youth Center",
    //   images: [community1, meeting1, rally1],
    // },
    // {
    //   id: "6",
    //   title: "Health Camp",
    //   category: "Healthcare",
    //   description:
    //     "Free health checkup camp organized for underprivileged communities with medical professionals volunteering their services.",
    //   date: "March 28, 2024",
    //   location: "Community Health Center",
    //   images: [rally1, community1, meeting1],
    // },
  ];

  const event = galleryEvents.find((e) => e.id === id);

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
