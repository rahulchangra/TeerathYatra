import Navigation from "@/components/Navigation";
import PilgrimageCard from "@/components/PilgrimageCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import templeVaranasi from "@/assets/temple-varanasi.jpg";
import templeTirupati from "@/assets/temple-tirupati.jpg";
import templeKedarnath from "@/assets/temple-kedarnath.jpg";

const Explore = () => {
  const pilgrimageSites = [
    {
      name: "Kashi Vishwanath Temple",
      location: "Varanasi, Uttar Pradesh",
      deity: "Lord Shiva",
      image: templeVaranasi,
      weather: "Pleasant",
      hotels: "Good",
      transportCost: "Medium",
      bestMonths: ["Oct", "Nov", "Dec", "Jan", "Feb"],
      description: "One of the holiest Hindu temples, situated on the banks of the sacred Ganges river.",
    },
    {
      name: "Tirumala Venkateswara Temple",
      location: "Tirupati, Andhra Pradesh",
      deity: "Lord Venkateswara",
      image: templeTirupati,
      weather: "Pleasant",
      hotels: "Excellent",
      transportCost: "Medium",
      bestMonths: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
      description: "The richest and most visited Hindu temple in the world, nestled in the hills.",
    },
    {
      name: "Kedarnath Temple",
      location: "Kedarnath, Uttarakhand",
      deity: "Lord Shiva",
      image: templeKedarnath,
      weather: "Cold",
      hotels: "Basic",
      transportCost: "High",
      bestMonths: ["May", "Jun", "Sep"],
      description: "Ancient temple located in the Himalayas, one of the twelve Jyotirlingas.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Explore Sacred Destinations</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Discover pilgrimage sites across India
          </p>

          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search destinations..." 
              className="pl-10 h-12"
            />
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            Found {pilgrimageSites.length} sacred destinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pilgrimageSites.map((site) => (
            <PilgrimageCard key={site.name} {...site} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Explore;
