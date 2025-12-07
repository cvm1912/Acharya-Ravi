import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { Ruler, Palette, Lightbulb, Sofa, Grid3X3, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const planningFeatures = [
  {
    icon: Grid3X3,
    title: "Space Layout",
    description: "Optimal room placement and spatial arrangement based on Vastu directions.",
  },
  {
    icon: Ruler,
    title: "Proportions & Dimensions",
    description: "Mathematically aligned dimensions for harmonious energy flow.",
  },
  {
    icon: Lightbulb,
    title: "Natural Elements",
    description: "Strategic placement of light, air, and water elements.",
  },
];

const interiorFeatures = [
  {
    icon: Palette,
    title: "Color Psychology",
    description: "Vastu-aligned color schemes for each room and direction.",
  },
  {
    icon: Sofa,
    title: "Furniture Placement",
    description: "Optimal positioning of furniture for positive energy.",
  },
  {
    icon: TrendingUp,
    title: "Growth Zones",
    description: "Activating prosperity corners for wealth and success.",
  },
];

const Design = () => {
  return (
    <Layout>
      <PageHeader
        subtitle="Design Services"
        title="Vastu-Aligned Design"
        description="Create spaces that are not only beautiful but also energetically balanced for prosperity and well-being."
        backgroundImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=600&fit=crop"
      />

      {/* Planning Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Architectural Planning
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold">
                Vastu-Based Planning
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our planning services ensure your building is designed from the ground up 
                with Vastu principles. From plot selection to final layout, every aspect 
                is carefully considered for maximum positive energy.
              </p>

              <div className="space-y-6 pt-4">
                {planningFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=750&fit=crop"
                  alt="Vastu planning blueprint"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6">
                <p className="font-display text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Vastu Compliant Designs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=750&fit=crop"
                  alt="Vastu interior design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-6">
                <p className="font-display text-2xl font-bold text-primary">5000+</p>
                <p className="text-sm text-muted-foreground">Spaces Transformed</p>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Interior Design
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold">
                Interior Concepts for Growth
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Transform your existing spaces with Vastu-aligned interior design. Our 
                concepts focus on creating environments that promote growth, prosperity, 
                and positive energy in your daily life.
              </p>

              <div className="space-y-6 pt-4">
                {interiorFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Get Design Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationForm />
    </Layout>
  );
};

export default Design;
