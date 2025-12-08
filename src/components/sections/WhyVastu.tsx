import { Check } from "lucide-react";

const reasons = [
  "Attracts positive cosmic energy into your living space",
  "Improves mental peace and reduces stress",
  "Enhances financial growth and career opportunities",
  "Promotes better health and well-being",
  "Strengthens family relationships and harmony",
  "Increases productivity in workplace environments",
  "Creates a balanced and peaceful atmosphere",
  "Helps in making better life decisions",
];

export const WhyVastu = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Importance of Vastu
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-6">
            Why is Vastu Important for Livelihood?
          </h2>
          <p className="text-muted-foreground">
            Vastu Shastra is not just about architecture; it's about creating environments 
            that nurture success, health, and happiness in every aspect of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-video md:aspect-auto rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop"
              alt="Prosperous home with Vastu principles"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-8">
              <div>
                <p className="text-background font-display text-2xl font-semibold">
                  "A Vastu-compliant space is the foundation of a prosperous life."
                </p>
                <p className="text-background/80 mt-2">— RRavi Kumar</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
