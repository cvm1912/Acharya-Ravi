import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { Button } from "@/components/ui/button";
import { Gem, Scroll, Leaf, Bell, Flame, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    icon: Gem,
    title: "Gemstones",
    description: "Authentic, energized gemstones based on your horoscope for planetary strengthening.",
    image: "https://images.unsplash.com/photo-1551751299-1b51cab2694c?w=400&h=300&fit=crop",
  },
  {
    icon: Scroll,
    title: "Yantras",
    description: "Sacred geometric diagrams energized with mantras for specific life improvements.",
    image: "https://images.unsplash.com/photo-1609619385002-f40f4b4af7eb?w=400&h=300&fit=crop",
  },
  {
    icon: Leaf,
    title: "Vastu Items",
    description: "Pyramids, crystals, and energy tools for Vastu corrections without structural changes.",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=300&fit=crop",
  },
  {
    icon: Bell,
    title: "Puja Items",
    description: "Authentic puja materials, incense, and spiritual accessories for daily worship.",
    image: "https://images.unsplash.com/photo-1606819813653-3ce6b3e8e3f0?w=400&h=300&fit=crop",
  },
  {
    icon: Flame,
    title: "Rudraksha",
    description: "Genuine Rudraksha beads of various mukhis for spiritual and health benefits.",
    image: "https://images.unsplash.com/photo-1629019738284-ce34c8d9b5a0?w=400&h=300&fit=crop",
  },
];

const horoscopeServices = [
  {
    title: "Detailed Birth Chart",
    description: "Complete Kundali preparation with planetary positions and predictions.",
    price: "₹1,100",
  },
  {
    title: "Yearly Predictions",
    description: "Month-by-month predictions for the coming year.",
    price: "₹2,100",
  },
  {
    title: "Compatibility Report",
    description: "Marriage compatibility analysis with remedies.",
    price: "₹1,500",
  },
  {
    title: "Career Report",
    description: "Detailed career guidance based on your chart.",
    price: "₹1,500",
  },
];

const Remedies = () => {
  return (
    <Layout>
      <PageHeader
        subtitle="Solutions & Products"
        title="Remedies & Products"
        description="Authentic Vastu and astrological remedies to enhance positive energy and overcome life's challenges."
        backgroundImage="https://images.unsplash.com/photo-1609619385002-f40f4b4af7eb?w=1920&h=600&fit=crop"
      />

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Vastu & Spiritual Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-6">
              Our Products
            </h2>
            <p className="text-muted-foreground">
              Carefully selected and energized products for Vastu corrections and spiritual 
              enhancement. All items are authentic and blessed before delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.title}
                className="glass-card overflow-hidden hover-lift group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/contact">
                      <ShoppingBag className="w-4 h-4" />
                      Enquire Now
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horoscope Reports */}
      <section className="section-padding bg-muted/50">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Written Reports
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-6">
              Horoscope Reports
            </h2>
            <p className="text-muted-foreground">
              Detailed written reports prepared by Acharaya Ravi with personalized 
              predictions and remedies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {horoscopeServices.map((service) => (
              <div key={service.title} className="glass-card p-6 hover-lift text-center">
                <h3 className="font-display text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <p className="font-display text-2xl font-bold text-primary mb-4">{service.price}</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/contact">Order Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationForm />
    </Layout>
  );
};

export default Remedies;
