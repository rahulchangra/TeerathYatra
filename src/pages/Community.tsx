import Navigation from "@/components/Navigation";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import templeKedarnath from "@/assets/temple-kedarnath.jpg";

const Community = () => {
  const posts = [
    {
      id: 1,
      author: "Meera Patel",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
      timeAgo: "2 days ago",
      content: "Just completed my Kedarnath Yatra! The trek was challenging but absolutely worth it. The divine energy at the temple is indescribable. Pro tip: Start your trek early morning to avoid afternoon rains. Carried warm clothes which were essential at night.",
      image: templeKedarnath,
      tags: ["Kedarnath", "Himalayan Pilgrimage", "Trek"],
      likes: 245,
      comments: 34,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Community Feed</h1>
          <p className="text-xl text-muted-foreground">
            Share and discover pilgrimage experiences
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={post.avatar} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-sm text-muted-foreground">{post.timeAgo}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">{post.content}</p>
                
                {post.image && (
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="Post image"
                      className="w-full h-80 object-cover"
                    />
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex items-center gap-6 border-t pt-4">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Heart className="h-4 w-4" />
                  <span>{post.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.comments} Comments</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 ml-auto">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Community;
