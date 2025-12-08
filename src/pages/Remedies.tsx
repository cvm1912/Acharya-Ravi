import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { Button } from "@/components/ui/button";
import { Zap,Aperture, Square, Shield,Badge,Hammer, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
  icon: Aperture,
  title: "Shaktichakra",
  description: "Provides protection, balances energy and brings peace to the home",
  image: "https://pinnaclevastu.in/cdn/shop/files/ProductImages_9.png?v=1748518635",
},
{
  icon: Square,
  title: "Aluminium Strip",
  description: "Used to correct Vastu doshas and improve energy flow in walls.",
  image: "https://i.postimg.cc/q76dxtdg/generated-image.png",
},
{
  icon: Shield,
  title: "Steel Strip",
  description: "Removes strong negative energies and adds stability to the space.",
  image: "https://i.postimg.cc/Fz9q8zwT/generated-image-(1).jpg",
},
{
  icon: Zap,
  title: "Copper Strip",
  description: "Attracts prosperity, health and positive vibrations.",
  image: "https://i.postimg.cc/vZkBWgNh/Chat-GPT-Image-Dec-8-2025-10-17-54-AM.png",
},
{
  icon: Badge,
  title: "Brass Strip",
  description: "Brings harmony, balance and improves emotional energy.",
  image: "https://i.postimg.cc/Ls0Lr85C/Chat-GPT-Image-Dec-8-2025-10-54-25-AM.png",
},
{
  icon: Hammer,
  title: "Iron Strip",
  description: "Grounds energy, removes obstacles and strengthens Vastu stability.",
  image: "https://i.postimg.cc/4NdZ343X/Chat-GPT-Image-Dec-8-2025-11-05-55-AM.png",
},
 {
    icon: Hammer,
    title: "Blue Tape (Iron)",
    description: "Used for grounding and stabilizing weak Vastu directions.",
    image: "https://i.postimg.cc/hjXm1RDv/Chat-GPT-Image-Dec-8-2025-11-37-21-AM.png",
  },
   {
    icon: Shield,
    title: "Green Tape (Steel)",
    description: "Enhances growth, career and smooth energy movement.",
    image: "https://i.postimg.cc/g2MrStB8/Green-Adhesive-Tape-on-White-Background.png",
  },
  {
    icon: Zap,
    title: "Red Tape (Copper)",
    description: "Activates prosperity, health and fire-related energies.",
    image: "https://i.postimg.cc/NjQrPHs4/Chat-GPT-Image-Dec-8-2025-11-38-18-AM.png",
  },
  {
    icon: Badge,
    title: "Yellow Tape (Brass)",
    description: "Balances relationships, harmony and emotional peace",
    image: "https://i.postimg.cc/Y0Ss394x/Chat-GPT-Image-Dec-8-2025-11-44-10-AM.png",
  },
  {
    icon: Hammer,
    title: "White Tape (Iron)",
    description: "Neutralizes negativity and strengthens the home’s foundation.",
    image: "https://i.postimg.cc/63b0Bh3W/Chat-GPT-Image-Dec-8-2025-11-46-15-AM.png",
  },
   {
    icon: Hammer,
    title: "Iron Stud",
    description: "Provides strong grounding and fixes major Vastu defects.",
    image: "https://i.postimg.cc/90mQYvHt/Chat-GPT-Image-Dec-8-2025-12-15-15-PM.png",
  },
  {
    icon: Square,
    title: "Aluminium Stud",
    description: "Balances corner energies and reduces Vastu imbalance.",
    image: "https://i.postimg.cc/Bv3bv87V/Aligned-Aluminum-Cylinders-on-White-Background.png",
  },
  {
    icon: Badge,
    title: "Brass Stud",
    description: "Improves harmony and corrects relationship-related Vastu issues.",
    image: "https://i.postimg.cc/k5ZnbBT5/Golden-Brass-Rods-in-Orderly-Alignment.png",
  },
  {
    icon: Zap,
    title: "Copper Stud",
    description: "Attracts positivity, prosperity and beneficial energies.",
    image: "https://i.postimg.cc/FRQB8vRk/Chat-GPT-Image-Dec-8-2025-12-29-47-PM.png",
  },
  {
    icon: Shield,
    title: "Steel Stud",
    description: "Adds strength and protection in Vastu corrections.",
    image: "https://i.postimg.cc/DwpWxfxt/Steel-Rods-in-Precision-Alignment.png",
  },
   {
    icon: Aperture,
    title: "Gomti Chakra",
    description: "Brings good luck, prosperity and removes negative energy.",
    image: "https://i.postimg.cc/63cTG94H/Cluster-of-Gomti-Chakras.png",
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

      

      <ConsultationForm />
    </Layout>
  );
};

export default Remedies;
