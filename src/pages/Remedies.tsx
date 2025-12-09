import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { Button } from "@/components/ui/button";
import { Zap, Aperture, Square, Shield, Badge, Hammer, ShoppingBag, RefreshCw, Sun, Flame, Dot, Sparkles, Box, Infinity } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
  icon: Aperture,
  title: "Shaktichakra",
  description: "Provides protection, balances energy and brings peace to the home",
  image: "/assets/image/shaktichakra.png",
},
{
  icon: Square,
  title: "Aluminium Strip",
  description: "Used to correct Vastu doshas and improve energy flow in walls.",
  image: "/assets/image/AluminiumStripe.png",
},
{
  icon: Shield,
  title: "Steel Strip",
  description: "Removes strong negative energies and adds stability to the space.",
  image: "/assets/image/strealStripe.png",
},
{
  icon: Zap,
  title: "Copper Strip",
  description: "Attracts prosperity, health and positive vibrations.",
  image: "/assets/image/copperStripe.png",
},
{
  icon: Badge,
  title: "Brass Strip",
  description: "Brings harmony, balance and improves emotional energy.",
  image: "/assets/image/BrassStripe.png",
},
{
  icon: Hammer,
  title: "Iron Strip",
  description: "Grounds energy, removes obstacles and strengthens Vastu stability.",
  image: "/assets/image/IronStripe.png",
},
 {
    icon: Hammer,
    title: "Blue Tape (Iron)",
    description: "Used for grounding and stabilizing weak Vastu directions.",
    image: "/assets/image/BlueTape.png",
  },
   {
    icon: Shield,
    title: "Green Tape (Steel)",
    description: "Enhances growth, career and smooth energy movement.",
    image: "/assets/image/GreenTape.png",
  },
  {
    icon: Zap,
    title: "Red Tape (Copper)",
    description: "Activates prosperity, health and fire-related energies.",
    image: "/assets/image/RedTape.png",
  },
  {
    icon: Badge,
    title: "Yellow Tape (Brass)",
    description: "Balances relationships, harmony and emotional peace",
    image: "/assets/image/YellowTape.png",
  },
  {
    icon: Hammer,
    title: "White Tape (Iron)",
    description: "Neutralizes negativity and strengthens the home's foundation.",
    image: "/assets/image/WhiteTape.png",
  },
  {
    icon: Hammer,
    title: "Iron Stud",
    description: "Provides strong grounding and fixes major Vastu defects.",
    image: "/assets/image/IronStud.png",
  },
  {
    icon: Square,
    title: "Aluminium Stud",
    description: "Balances corner energies and reduces Vastu imbalance.",
    image: "/assets/image/AluminiumStud.png",
  },
  {
    icon: Badge,
    title: "Brass Stud",
    description: "Improves harmony and corrects relationship-related Vastu issues.",
    image: "/assets/image/BrassStud.png",
  },
  {
    icon: Zap,
    title: "Copper Stud",
    description: "Attracts positivity, prosperity and beneficial energies.",
    image: "/assets/image/CopperStud.png",
  },
  {
    icon: Shield,
    title: "Steel Stud",
    description: "Adds strength and protection in Vastu corrections.",
    image: "/assets/image/StealRods.png",
  },
   {
    icon: Aperture,
    title: "Gomti Chakra",
    description: "Brings good luck, prosperity and removes negative energy.",
    image: "/assets/image/Gomtichakra.png",
  },
  {
  icon: RefreshCw, 
  title: "Karmic Wheel",
  description: "Symbolizes life's cyclical motion and spiritual evolution.",
  image: "/assets/image/KarmicWheel.png",
},
{
  icon: Infinity,
  title: "Endless Knot",
  description: "Represents interconnectedness, harmony and flow of divine energy.",
  image: "/assets/image/EndlessKnotWater.png", // water-based blue tone
},
{
  icon: Sun,
  title: "Spotlight",
  description: "Enhances focus, clarity and illuminates inner strength.",
  image: "https://static1.industrybuying.com/products/led-lights/led-spot-light/LED.LED.27702331_1672379380820.webp",
},
{
  icon: Flame,
  title: "Sindoor",
  description: "Radiates fiery energy, activating confidence and vitality.",
  image: "/assets/image/Sindoor.png",
},
{
  icon: Dot,
  title: "White Mustard",
  description: "Used for protection and purification from negative energies.",
  image: "/assets/image/WhiteMustard.png",
},
{
  icon: Box,
  title: "Pyramids",
  description: "Traditional sacred element used for spiritual grounding.",
  image: "/assets/image/Primiands.png",
},
{
  icon: Sparkles,
  title: "Bhimseni Kapoor",
  description: "Purifies spaces, enhances positivity and spiritual clarity.",
  image: "/assets/image/BhimseniKapoor.png",
},
];



const Remedies = () => {
  return (
    <Layout>
      <PageHeader
        subtitle="Solutions & Products"
        title="Remedies & Products"
        backgroundImage="assets/image/Footer.png"
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
             Explore our carefully selected and energetically blessed items designed for Vastu correction and spiritual upliftment. Each product is authentic, traditional, and sanctified before reaching you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="w-12 h-4 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
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

      

      <ConsultationForm />
    </Layout>
  );
};

export default Remedies;
