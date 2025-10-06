import Navigation from "@/components/Navigation";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar } from "lucide-react";

const Mentors = () => {
  const mentors = [
    {
      id: 1,
      name: "Rajesh Kumar",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
      experience: "15+ years",
      rating: 4.9,
      bio: "Experienced pilgrimage guide specializing in Himalayan routes. Have personally completed Char Dham Yatra 12 times and helped over 500 families...",
      specializations: ["Char Dham Yatra", "Himalayan Pilgrimages", "North India"],
    },
    {
      id: 2,
      name: "Lakshmi Devi",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lakshmi",
      experience: "10+ years",
      rating: 4.8,
      bio: "Passionate about South Indian temple traditions and helping families experience the divine beauty of Dravidian architecture. Specialized in women-friendly...",
      specializations: ["South Indian Temples", "Festival Tourism", "Women-led Groups"],
    },
    {
      id: 3,
      name: "Amit Sharma",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
      experience: "12+ years",
      rating: 4.7,
      bio: "Helping seniors and budget-conscious pilgrims visit sacred sites comfortably. Expert in accessible routes and affordable accommodation across Gujarat and...",
      specializations: ["Budget Pilgrimages", "Western India"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Expert Pilgrimage Mentors</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Connect with experienced pilgrims for personalized guidance
          </p>

          <Card className="bg-secondary/30 border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-2">How Mentorship Works</h2>
              <p className="text-muted-foreground">
                Our experienced mentors offer personalized advice for your pilgrimage journey. 
                Book a session to discuss route planning, accommodation, local customs, and get 
                insider tips from someone who has walked the path before you.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={mentor.avatar} />
                    <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{mentor.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm font-semibold">{mentor.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">•</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{mentor.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {mentor.bio}
                </p>
                <div>
                  <p className="text-xs font-semibold mb-2">Specialization:</p>
                  <div className="flex flex-wrap gap-2">
                    {mentor.specializations.map((spec) => (
                      <Badge key={spec} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="border-t pt-4">
                <Button className="w-full">Request Consultation</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Mentors;
