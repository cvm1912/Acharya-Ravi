import { Award, BookOpen, Users, Calendar } from "lucide-react";

const achievements = [
  { icon: Calendar, value: "12+", label: "Years of Experience" },
  { icon: Users, value: "4500+", label: "Clients Served" },
  { icon: BookOpen, value: "210+", label: "Workshops Conducted" },
  { icon: Award, value: "16+", label: "Awards Received" },
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
                src="https://res.cloudinary.com/drjwxsvvb/image/upload/v1765228317/ChatGPT_Image_Dec_8_2025_04_20_17_PM_vhwrtw.png"
                alt="RRavi Kumar - Vastu Expert"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 glass-card p-6">
              <p className="font-display text-3xl font-bold text-primary">12+</p>
              <p className="text-sm text-muted-foreground">Years of Dedicated Service</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Meet Your Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              About Vastu Ravi
            </h2>
            <p className="text-muted-foreground leading-relaxed">
             RRavi Kumar has more than 12+ of experience in helping people improve their homes and lives through Vastu. He comes from a family that has been practicing Vastu for generations, and he combines traditional knowledge with modern ideas to give practical solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
             Having studied under revered gurus and mastered the intricate aspects of Vastu, Kundi, and Numerology, RRavi Kumar has helped thousands of families and businesses achieve prosperity and harmony.
            </p>
            <p className="text-muted-foreground leading-relaxed">
             He combines traditional Vastu knowledge with practical, modern ideas, so anyone can easily use these ancient principles in their daily life
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
