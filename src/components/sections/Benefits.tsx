import { Heart, TrendingUp, Users, Brain, Shield, Star } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Financial Prosperity",
    description: "Attract wealth and abundance by aligning your space with prosperity directions.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Create an environment that promotes physical health and mental well-being.",
  },
  {
    icon: Users,
    title: "Family Harmony",
    description: "Foster stronger relationships and peaceful coexistence among family members.",
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    description: "Reduce stress and anxiety with balanced energy flow in your surroundings.",
  },
  {
    icon: Shield,
    title: "Protection",
    description: "Shield your home from negative energies and create a safe sanctuary.",
  },
  {
    icon: Star,
    title: "Success & Growth",
    description: "Unlock opportunities for personal and professional growth in all areas of life.",
  },
];

export const Benefits = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Transform Your Life
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-6">
            Benefits of Vastu Shastra
          </h2>
          <p className="text-muted-foreground">
            Experience the transformative power of Vastu in every aspect of your life, 
            from health and wealth to relationships and spiritual growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="glass-card p-8 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
