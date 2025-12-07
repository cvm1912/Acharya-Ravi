const timeline = [
  {
    year: "1998",
    title: "Journey Begins",
    description: "Started learning Vastu Shastra under the guidance of traditional gurus.",
  },
  {
    year: "2003",
    title: "First Consultation",
    description: "Conducted first professional Vastu consultation for a residential project.",
  },
  {
    year: "2010",
    title: "Expanded Services",
    description: "Extended expertise to commercial spaces, factories, and large-scale projects.",
  },
  {
    year: "2015",
    title: "Recognition",
    description: "Received national recognition for contributions to Vastu science.",
  },
  {
    year: "2020",
    title: "Digital Presence",
    description: "Launched online consultations to serve clients worldwide.",
  },
  {
    year: "Present",
    title: "Continuing Legacy",
    description: "Serving thousands of clients with personalized Vastu solutions.",
  },
];

export const History = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-6">
            Our History
          </h2>
          <p className="text-muted-foreground">
            A journey of dedication, learning, and service spanning over two decades 
            of transforming spaces and lives through Vastu wisdom.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                  <div className="glass-card p-6 inline-block hover-lift">
                    <span className="text-primary font-display text-2xl font-bold">{item.year}</span>
                    <h3 className="font-display text-lg font-semibold mt-2 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-2 mt-2" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
