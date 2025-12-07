import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { WhatIsVastu } from "@/components/sections/WhatIsVastu";
import { WhyVastu } from "@/components/sections/WhyVastu";
import { Benefits } from "@/components/sections/Benefits";
import { About } from "@/components/sections/About";
import { History } from "@/components/sections/History";
import { ConsultationForm } from "@/components/sections/ConsultationForm";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhatIsVastu />
      <WhyVastu />
      <Benefits />
      <About />
      <History />
      <ConsultationForm />
    </Layout>
  );
};

export default Index;
