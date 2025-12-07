import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9263218599", "+91 9263218599"],
    action: "tel:+919263218599",
    actionLabel: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+91 9263218599"],
    action: "https://wa.me/919263218599",
    actionLabel: "Chat Now",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@vastubyravikumar.com", "info@vastubyravikumar.com"],
    action: "mailto:contact@vastubyravikumar.com",
    actionLabel: "Send Email",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Vastu Bhavan, Spiritual Lane", "Hyderabad, Telangana 500001"],
    action: "https://maps.google.com",
    actionLabel: "Get Directions",
  },
];

const timings = [
  { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
  { day: "Saturday", time: "10:00 AM - 5:00 PM" },
  { day: "Sunday", time: "By Appointment Only" },
];

const Contact = () => {
  return (
    <Layout>

      <PageHeader
        subtitle="Get in Touch"
        title="Contact Us"
        description="Have questions or ready to transform your space? Reach out to us for personalized Vastu consultation."
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=600&fit=crop"
      />

      <section className="section-padding">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="glass-card p-6 hover-lift text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail) => (
                      <p key={detail} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href={info.action} 
                      {...(info.action.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {info.actionLabel}
                    </a>
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="font-display text-xl font-semibold">Working Hours</h3>
            </div>
            <div className="space-y-4">
              {timings.map((timing) => (
                <div
                  key={timing.day}
                  className="flex justify-between items-center py-3 border-b border-border last:border-0"
                >
                  <span className="font-medium">{timing.day}</span>
                  <span className="text-muted-foreground">{timing.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our team is ready to help you. Choose your preferred way to connect with us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="call" size="xl" asChild>
                <a href="tel:+919263218599">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </Button>
              <Button variant="whatsapp" size="xl" asChild>
                <a href="https://wa.me/919263218599" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationForm />
    </Layout>
  );
};

export default Contact;
