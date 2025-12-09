import { Compass, Sun, Wind, Droplets, Flame, Earth } from "lucide-react";

const elements = [
  {
    icon: Droplets,
    title: "Water ( जल )",
    description: "Represents Flow, clarity, emotions",
  },

   {
    icon: Wind,
    title: "Air ( वायु )",
    description: "Brings movement, freshness, and positive energy flow",
  },

  {
    icon: Flame,
    title: "Fire ( अग्नि )",
    description: "Represents Energy, passion, transformation",
  },
   {
    icon: Earth,
    title: "Earth ( पृथ्वी )",
    description: "Represents Stability, balance, growth, and grounding",
  },
  
 
  {
    icon: Compass,
    title: "Space ( आकाश )",
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
             It teaches how the five elements should be balanced in a home or office, giving clear rules for directions and placement to improve energy, comfort, and positivity.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Vastu is practical and logical and with the right guidance and remedies, it can remove obstacles and bring peace, health, and prosperity into your life.
              In Vastu Shastra, our home and workplace are divided into 16 directions, and each direction represents an important part of our life and these directions are connected with the five natural elements — Water, Air, Fire, Earth and Space. Most people know only about the common 8 directions, but every direction has its own special energy.
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
