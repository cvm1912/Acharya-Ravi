import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { User, Home, Building2, Factory, MapPin } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Personal Client Visit",
    description: "One-on-one consultation at your preferred location. Get personalized Vastu guidance tailored to your specific needs and life goals.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
  },
  {
    icon: Home,
    title: "Home/Flat Visit",
    description: "Comprehensive Vastu analysis of your residential space. We examine every corner to ensure positive energy flow and harmony.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  },
  {
    icon: Building2,
    title: "Office Visit",
    description: "Optimize your workplace for success and productivity. Create an environment that fosters growth and positive professional relationships.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    icon: Factory,
    title: "Factory Visit",
    description: "Industrial Vastu consultation for manufacturing units. Ensure smooth operations, employee well-being, and business prosperity.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
  },
  {
    icon: MapPin,
    title: "Developing Project (Site)",
    description: "Vastu guidance from the ground up. Get expert advice on plot selection, building orientation, and layout planning for new constructions.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
  },
];

const Consultancy = () => {
  return (
    <Layout>
      <PageHeader
        subtitle="Our Services"
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
