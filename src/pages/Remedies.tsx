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
  image: "https://cpimg.tistatic.com/05634809/b/4/Aluminium-Strips.jpg",
},
{
  icon: Shield,
  title: "Steel Strip",
  description: "Removes strong negative energies and adds stability to the space.",
  image: "https://5.imimg.com/data5/RO/FM/MY-38783368/metal-strip.jpg",
},
{
  icon: Zap,
  title: "Copper Strip",
  description: "Attracts prosperity, health and positive vibrations.",
  image: "https://m.media-amazon.com/images/I/51rGyXGpr1L._AC_UF1000,1000_QL80_.jpg",
},
{
  icon: Badge,
  title: "Brass Strip",
  description: "Brings harmony, balance and improves emotional energy.",
  image: "https://m.media-amazon.com/images/I/61ZMqR47r8L.jpg",
},
{
  icon: Hammer,
  title: "Iron Strip",
  description: "Grounds energy, removes obstacles and strengthens Vastu stability.",
  image: "https://images.jdmagicbox.com/quickquotes/images_main/iron-strip-372609457-fi6wh.jpg",
},
 {
    icon: Hammer,
    title: "Blue Tape (Iron)",
    description: "Used for grounding and stabilizing weak Vastu directions.",
    image: "https://www.parthpooja.com/cdn/shop/files/41XUQIHzUnL._SL1200_700x700.jpg?v=1715250732",
  },
   {
    icon: Shield,
    title: "Green Tape (Steel)",
    description: "Enhances growth, career and smooth energy movement.",
    image: "https://m.media-amazon.com/images/I/71ta9LBavML.jpg",
  },
  {
    icon: Zap,
    title: "Red Tape (Copper)",
    description: "Activates prosperity, health and fire-related energies.",
    image: "https://www.parthpooja.com/cdn/shop/files/3-1000x1000_2fa4eb18-f2f2-410d-8e8f-931c0fe79d5b_1024x1024.jpg?v=1715250885",
  },
  {
    icon: Badge,
    title: "Yellow Tape (Brass)",
    description: "Balances relationships, harmony and emotional peace",
    image: "https://www.parthpooja.com/cdn/shop/files/51aH-Y154PL._SX522_512x512.jpg?v=1715250304",
  },
  {
    icon: Hammer,
    title: "White Tape (Iron)",
    description: "Neutralizes negativity and strengthens the home’s foundation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDC9ozpSWc5pBqgqSj5lamb5qKeJ9Z8yfIKA&s",
  },
   {
    icon: Hammer,
    title: "Iron Stud",
    description: "Provides strong grounding and fixes major Vastu defects.",
    image: "https://www.jiomart.com/images/product/original/rvon02dk6r/treemaison-vastu-round-iron-stud-for-vastu-dosh-remedy-for-correction-balancing-space-element-1-5-inch-pack-of-06-product-images-orvon02dk6r-p612177876-0-202508141652.jpg?im=Resize=(420,420)",
  },
  {
    icon: Square,
    title: "Aluminium Stud",
    description: "Balances corner energies and reduces Vastu imbalance.",
    image: "https://images-eu.ssl-images-amazon.com/images/I/41Ney1LfWHL._AC_UL210_SR210,210_.jpg",
  },
  {
    icon: Badge,
    title: "Brass Stud",
    description: "Improves harmony and corrects relationship-related Vastu issues.",
    image: "https://m.media-amazon.com/images/I/41dXvoS3HFL.jpg",
  },
  {
    icon: Zap,
    title: "Copper Stud",
    description: "Attracts positivity, prosperity and beneficial energies.",
    image: "https://m.media-amazon.com/images/I/71s4NjmUzGL.jpg",
  },
  {
    icon: Shield,
    title: "Steel Stud",
    description: "Adds strength and protection in Vastu corrections.",
    image: "https://m.media-amazon.com/images/I/61CFGsVzEFL._SX679_.jpg",
  },
   {
    icon: Aperture,
    title: "Gomti Chakra",
    description: "Brings good luck, prosperity and removes negative energy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoh_yQ6zW0gO4OAH4C-sd4Q5O8ciNobAXfkA&s",
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
