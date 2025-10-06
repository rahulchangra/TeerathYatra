import { useState } from "react";
import Navigation from "@/components/Navigation";
import PilgrimageCard from "@/components/PilgrimageCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import templeVaranasi from "@/assets/temple-varanasi.jpg";
import templeTirupati from "@/assets/temple-tirupati.jpg";
import templeKedarnath from "@/assets/temple-kedarnath.jpg";

const Planner = () => {
  const [selectedMonth, setSelectedMonth] = useState("january");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const pilgrimageSites = [
    {
      name: "Kashi Vishwanath Temple",
      location: "Varanasi, Uttar Pradesh",
      deity: "Lord Shiva",
      image: templeVaranasi,
      weather: "Pleasant",
      hotels: "Good",
      transportCost: "Medium",
      score: "Very High" as const,
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
      score: "Very High" as const,
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
      score: "High" as const,
      description: "Ancient temple located in the Himalayas, one of the twelve Jyotirlingas.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Your Pilgrimage Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Discover the best sacred destinations for your journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Month Selector */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Select Travel Month</h2>
            <p className="text-sm text-muted-foreground mb-4">
              See personalized recommendations based on your selected month
            </p>
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger>
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month} value={month.toLowerCase()}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Card>

          {/* Map Placeholder */}
          <Card className="lg:col-span-2 p-6 bg-gradient-to-br from-secondary/50 to-background">
            <h2 className="text-lg font-semibold mb-4">Interactive India Map</h2>
            <div className="aspect-video rounded-lg bg-muted/50 flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Visual map showing recommended pilgrimage sites</p>
                <p className="text-sm text-muted-foreground">
                  {pilgrimageSites.length} sites recommended for {months[months.findIndex(m => m.toLowerCase() === selectedMonth)]}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Recommended Sites */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">
            Recommended for {months[months.findIndex(m => m.toLowerCase() === selectedMonth)]}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pilgrimageSites.map((site) => (
              <PilgrimageCard key={site.name} {...site} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Planner;
