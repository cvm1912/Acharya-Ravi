import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { Star, GraduationCap, Wallet, Users, Heart, Briefcase, Shield, Sparkles } from "lucide-react";

const services = [
  {
    icon: Star,
    title: "Kundli (Birth Chart)",
    description: "Get a clear understanding of your life path, strengths and challenges. Includes dosha detection with simple, practical remedies.",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: GraduationCap,
    title: "Educational Remedies",
    description: "Astrological guidance for students and learners. Enhance concentration, memory, and academic success with targeted remedies.",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: Wallet,
    title: "Financial Remedies",
    description: "Unlock prosperity and wealth through planetary remedies. Address financial blocks and attract abundance.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Users,
    title: "Family Remedies",
    description: "Restore harmony in family relationships. Address conflicts, improve understanding, and strengthen family bonds.",
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    icon: Heart,
    title: "Marriage & Relationship",
    description: "Compatibility analysis, matchmaking, and remedies for marital harmony and relationship success.",
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Navigate career choices with astrological insights. Find your ideal profession and timing for career moves.",
    color: "from-purple-500/20 to-violet-500/20",
  },
  {
    icon: Shield,
    title: "Health Remedies",
    description: "Astrological analysis of health indicators and preventive remedies for physical and mental well-being.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Sparkles,
    title: "Muhurta Selection",
    description: "Auspicious timing for important events like marriage, house warming, business launch, and more.",
    color: "from-yellow-500/20 to-amber-500/20",
  },
];

const Horoscope = () => {
  return (
    <Layout>
      <PageHeader
        subtitle="Jyotish Services"
        title="Vastu & Kundali"
        description="Ancient Vedic astrology combined with Vastu for comprehensive life guidance and remedies."
        backgroundImage="https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=1920&h=600&fit=crop"
      />

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Our vastu Services
            </h2>
            <p className="text-muted-foreground">
              Combining the wisdom of Vedic astrology with Vastu Shastra for holistic 
              life solutions. Each service is personalized based on your birth chart.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-card p-6 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 ">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted/50">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Simple process to get your personalized horoscope analysis and remedies.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Share Details", description: "Provide your birth date, time, and place" },
              { step: "02", title: "Analysis", description: "Expert analysis of your birth chart" },
              { step: "03", title: "Consultation", description: "Detailed discussion of findings" },
              { step: "04", title: "Remedies", description: "Personalized solutions and guidance" },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute right-0 top-8 w-full h-0.5 bg-border -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationForm />
    </Layout>
  );
};

export default Horoscope;
