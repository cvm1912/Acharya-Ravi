import { Compass, Sun, Wind, Droplets } from "lucide-react";

const elements = [
  {
    icon: Sun,
    title: "Fire (Agni)",
    description: "Represents energy, enthusiasm, and passion in your space",
  },
  {
    icon: Droplets,
    title: "Water (Jal)",
    description: "Symbolizes fluidity, purity, and emotional well-being",
  },
  {
    icon: Wind,
    title: "Air (Vayu)",
    description: "Brings movement, freshness, and positive energy flow",
  },
  {
    icon: Compass,
    title: "Space (Akash)",
    description: "Creates expansion, clarity, and spiritual growth",
  },
];

export const WhatIsVastu = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Understanding Vastu
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              What is Vastu Shastra?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Vastu Shastra is an ancient Indian science of architecture and design that 
              harmonizes the five elements of nature — Earth, Water, Fire, Air, and Space — 
              to create balanced living and working environments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dating back over 5,000 years, Vastu principles guide the placement, layout, 
              and design of buildings to enhance positive energy flow, bringing prosperity, 
              health, and happiness to the occupants.
            </p>

            {/* Elements Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {elements.map((element, index) => (
                <div
                  key={element.title}
                  className="glass-card p-4 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <element.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-sm mb-1">{element.title}</h4>
                  <p className="text-xs text-muted-foreground">{element.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=750&fit=crop"
                alt="Vastu-compliant architecture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
