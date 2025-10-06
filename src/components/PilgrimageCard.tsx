import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, CloudRain, Hotel } from "lucide-react";

interface PilgrimageCardProps {
  name: string;
  location: string;
  deity: string;
  image: string;
  weather: string;
  hotels: string;
  transportCost: string;
  bestMonths?: string[];
  description?: string;
  score?: "Very High" | "High" | "Medium";
}

const PilgrimageCard = ({
  name,
  location,
  deity,
  image,
  weather,
  hotels,
  transportCost,
  bestMonths,
  description,
  score,
}: PilgrimageCardProps) => {
  const getScoreBadgeColor = (scoreValue?: string) => {
    switch (scoreValue) {
      case "Very High":
        return "bg-primary text-primary-foreground";
      case "High":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {score && (
          <Badge className={`absolute top-4 right-4 ${getScoreBadgeColor(score)}`}>
            {score}
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">Deity:</span>
            <span className="text-sm text-muted-foreground">{deity}</span>
          </div>
          
          {bestMonths && bestMonths.length > 0 && (
            <div className="flex items-start gap-2">
              <Calendar className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div className="flex flex-wrap gap-1">
                {bestMonths.slice(0, 3).map((month) => (
                  <Badge key={month} variant="secondary" className="text-xs">
                    {month}
                  </Badge>
                ))}
                {bestMonths.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{bestMonths.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>

        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {description}
          </p>
        )}

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <CloudRain className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{weather}</span>
          </div>
          <div className="flex items-center gap-2">
            <Hotel className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{hotels}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default PilgrimageCard;
