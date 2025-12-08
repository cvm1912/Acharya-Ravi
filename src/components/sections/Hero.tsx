import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-1 md:opacity-100 ">
        <div className="opacity-3 absolute inset-0 bg-[url('https://res.cloudinary.com/drjwxsvvb/image/upload/v1765234727/Wallpaper_iw42jk.jpg')]" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent"></div>

      <div className="container-max section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-up">
              <Sparkles className="w-4 h-4" />
              Ancient Wisdom for Modern Living
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight animate-fade-up stagger-1 text-white">
              Transform Your Space with{" "}
              <span className="gradient-text">Vastu Ravi</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl animate-fade-up stagger-2 text-white">
              Unlock prosperity, health, and harmony in your life through the
              ancient science of Vastu. Expert consultation by RRavi Kumar
              Kumar with over 18 years of experience.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up stagger-3">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Book Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/consultancy">Our Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border animate-fade-up stagger-4">
              <div>
                <p className="text-3xl font-display font-bold text-primary">
                  18+
                </p>
                <p className="text-sm text-muted-foreground text-black">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">
                  4500+
                </p>
                <p className="text-sm text-muted-foreground text-black">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">
                  100%
                </p>
                <p className="text-sm text-muted-foreground text-black">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up stagger-3">
            <div className="relative max-w-lg mx-auto">
              <img
                src="https://i.postimg.cc/Fs10yhkZ/Chat-GPT-Image-Dec-8-2025-03-17-32-PM-1-removebg-preview.png"
                alt="Vastu Chakra"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
