import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { User, Home, Building2, Factory, MapPin } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Personal Client Visit",
    description: "A detailed in-person vastu evaluation to analyse layout, direction alignment, energy blocks and provide effective corrections for long-term wellbeing.",
    image: "https://i.pinimg.com/736x/0f/f3/f3/0ff3f312e765766d6f751cf9e63d07e0.jpg",
  },
  {
    icon: Home,
    title: "Home/Flat Visit",
    description: "Comprehensive Vastu analysis of your residential space. We examine every corner to ensure positive energy flow and harmony.",
    image: "https://i.pinimg.com/1200x/70/d2/7f/70d27f2e8527b15a231236f756aec13e.jpg",
  },
  {
    icon: Building2,
    title: "Office Visit",
    description: "Optimize your workplace for success and productivity. Create an environment that fosters growth and positive professional relationships.",
    image: "https://i.pinimg.com/1200x/c0/cc/64/c0cc64f9978f64be1236bde48b58e0c0.jpg",
  },
   {
    icon: Factory,
    title: "Factory Visit",
    description: "Direction-wise industrial vastu analysis to improve productivity, workflow and financial growth with practical remedies.",
    image: "https://i.pinimg.com/1200x/35/8c/97/358c97db7d752bed6f30c790d02eb30f.jpg",
   },
  {
    icon: MapPin,
    title: "Developing Site Visit",
    description: "We inspect the site during development to ensure the layout, directions and structure follow vastu principles before walls and rooms are finalized.",
    image: "https://i.pinimg.com/736x/97/1f/b3/971fb3f45f8fe0d1c36972b95de89e0d.jpg",
  },
];

const Consultancy = () => {
  return (
    <Layout>
      <PageHeader
        subtitle=" "
        title="Vastu Consultancy"
        description="Comprehensive Vastu solutions for homes, offices, factories, and development projects. Transform your spaces with ancient wisdom."
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=600&fit=crop"
      />

      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      <ConsultationForm />
    </Layout>
  );
};

export default Consultancy;
