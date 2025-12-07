import { Award, BookOpen, Users, Calendar } from "lucide-react";

const achievements = [
  { icon: Calendar, value: "25+", label: "Years of Experience" },
  { icon: Users, value: "5000+", label: "Clients Served" },
  { icon: BookOpen, value: "100+", label: "Workshops Conducted" },
  { icon: Award, value: "15+", label: "Awards Received" },
];

export const About = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                alt="Acharaya Ravi - Vastu Expert"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 glass-card p-6">
              <p className="font-display text-3xl font-bold text-primary">25+</p>
              <p className="text-sm text-muted-foreground">Years of Dedicated Service</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Meet Your Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              About Acharaya Ravi
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Acharaya Ravi is a renowned Vastu Shastra expert with over 25 years of 
              experience in transforming spaces and lives. Born into a family of traditional 
              Vastu practitioners, he inherited the ancient wisdom and combined it with 
              modern architectural understanding.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Having studied under revered gurus and mastered the intricate aspects of 
              Vastu, Jyotish (Astrology), and Numerology, Acharaya Ravi has helped 
              thousands of families and businesses achieve prosperity and harmony.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              His unique approach combines traditional Vastu principles with practical 
              solutions that fit modern lifestyles, making ancient wisdom accessible 
              and actionable for everyone.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {achievements.map((achievement) => (
                <div key={achievement.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold">{achievement.value}</p>
                    <p className="text-xs text-muted-foreground">{achievement.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
