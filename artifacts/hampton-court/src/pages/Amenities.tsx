import { FadeIn } from "@/components/animations/FadeIn";
import { Card, CardContent } from "@/components/ui/card";

export default function Amenities() {
  const amenities = [
    {
      title: "Comfortable Rooms",
      desc: "Private and semi-private rooms designed with comfort, safety, and a homelike aesthetic in mind. Featuring natural light and accessible en-suite facilities.",
      // cozy nursing home bedroom
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80"
    },
    {
      title: "Rehabilitation Therapy Spaces",
      desc: "Bright, spacious therapy gyms equipped with tools and technology to support physical and occupational therapy goals.",
      // physical therapy equipment in bright room
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
    },
    {
      title: "Dining Experience",
      desc: "Nutritious, chef-prepared meals served in our welcoming dining room. We cater to specialized dietary needs while ensuring a delightful culinary experience.",
      // elegant dining area setup
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80"
    },
    {
      title: "Relaxing Common Areas",
      desc: "Cozy lounges where residents can read, socialize with peers, or spend quality time visiting with family members.",
      // cozy living room lounge area
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    },
    {
      title: "Outdoor Courtyards",
      desc: "Beautifully landscaped, secure outdoor spaces to enjoy the Florida sunshine, fresh air, and moments of quiet reflection.",
      // landscaped garden path
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4ce88?w=800&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-24 w-full bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-display font-bold text-foreground mb-6">Facility Amenities</h1>
          <p className="text-xl text-muted-foreground">
            We've created a safe, welcoming environment that promotes healing and enhances the quality of daily life.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="overflow-hidden border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                <div className="h-60 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white/80 text-[10px] px-2 py-1 rounded backdrop-blur-sm z-20 font-mono">
                    [Placeholder Image]
                  </div>
                </div>
                <CardContent className="p-8 flex-grow flex flex-col bg-white">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground flex-grow">{item.desc}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}
