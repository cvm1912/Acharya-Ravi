import { LucideIcon } from "lucide-react";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  image?: string;
}

export const ServiceCard = ({ icon: Icon, title, description, link, image }: ServiceCardProps) => {
  return (
    <div className="glass-card overflow-hidden hover-lift group">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 space-y-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-display text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        {link && (
          <Button variant="ghost" size="sm" asChild className="group/btn">
            <Link to={link}>
              Learn More
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
