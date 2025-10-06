import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-temple.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sacred temple at sunset"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Sacred Journey <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Begins Here
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover divine destinations, connect with experienced pilgrims, and plan
            your spiritual journey across India&apos;s most sacred sites.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-lg" asChild>
              <Link to="/planner">
                <Calendar className="mr-2 h-5 w-5" />
                Start Your Journey
              </Link>
            </Button>
            <Button size="lg" className="text-lg bg-custom-brown text-white hover:brightness-90" asChild>
              <Link to="/explore">
                <MapPin className="mr-2 h-5 w-5" />
                Explore Sites
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Feature
              icon={<Calendar className="h-5 w-5 text-primary" />}
              title="Smart Planning"
              text="Interactive map with crowd forecasts and festival dates"
            />
            <Feature
              icon={<Users className="h-5 w-5 text-accent" />}
              title="Expert Guidance"
              text="Connect with experienced pilgrims for personalized advice"
            />
            <Feature
              icon={<MapPin className="h-5 w-5 text-primary" />}
              title="Share Experiences"
              text="A vibrant community sharing stories and helpful tips"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Feature Component
const Feature = ({ icon, title, text }) => (
  <div className="flex items-start gap-3">
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-white">{text}</p>
    </div>
  </div>
);

export default Hero;
