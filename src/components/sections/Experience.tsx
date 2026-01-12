import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award, Calendar, MapPin } from "lucide-react";

interface TimelineItem {
  id: number;
  type: "education" | "experience" | "achievement";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  icon: "education" | "work" | "award";
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: "education",
    title: "Bachelor of Technology in Computer Science Engineering",
    organization: "National Institute of Technology",
    location: "Patna, Bihar, India",
    period: "2022 – May 2026 (Expected)",
    description: [
      "Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks",
      "Web Development, Object-Oriented Programming, AI/ML fundamentals",
      "Active participant in coding clubs and hackathons"
    ],
    icon: "education"
  },
  {
    id: 2,
    type: "experience",
    title: "Technical Lead",
    organization: "College Tech Community",
    location: "University",
    period: "2023 – Present",
    description: [
      "Led 20+ students in organizing hackathons and technical workshops",
      "Conducted workshops on React.js and Git, reaching 500+ participants",
      "Mentored juniors in web development and competitive programming techniques"
    ],
    icon: "work"
  },
  {
    id: 3,
    type: "experience",
    title: "Open Source Contributor",
    organization: "GitHub Open Source Projects",
    location: "Remote",
    period: "2024 – Present",
    description: [
      "Contributed bug fixes, features, and documentation to multiple repositories",
      "Active participation in code reviews and community discussions",
      "Improved codebase quality through consistent contributions"
    ],
    icon: "work"
  },
  {
    id: 4,
    type: "achievement",
    title: "Certifications & Achievements",
    organization: "Various Platforms",
    location: "Online",
    period: "2023 – Present",
    description: [
      "Full-Stack Web Development (Udemy/Coursera)",
      "DSA Specialization Certificate",
      "JavaScript & Data Structures (freeCodeCamp)",
      "React Complete Guide | Git & GitHub Essentials"
    ],
    icon: "award"
  }
];

const getIcon = (iconType: string) => {
  switch (iconType) {
    case "education":
      return <GraduationCap className="w-5 h-5" />;
    case "work":
      return <Briefcase className="w-5 h-5" />;
    case "award":
      return <Award className="w-5 h-5" />;
    default:
      return <Briefcase className="w-5 h-5" />;
  }
};

const TimelineCard = ({ item, index, isInView }: { item: TimelineItem; index: number; isInView: boolean }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}
    >
      {/* Content Card */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div className="glass-card p-6 md:p-8 group hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple/10">
          {/* Header */}
          <div className={`flex items-start gap-3 mb-4 ${isLeft ? "md:flex-row-reverse md:text-right" : ""}`}>
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple/20 to-pink/20 text-primary flex-shrink-0">
              {getIcon(item.icon)}
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-primary font-medium">{item.organization}</p>
            </div>
          </div>

          {/* Meta Info */}
          <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${isLeft ? "md:justify-end" : ""}`}>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{item.location}</span>
            </div>
          </div>

          {/* Description */}
          <ul className={`space-y-2 text-muted-foreground text-sm md:text-base ${isLeft ? "md:text-right" : ""}`}>
            {item.description.map((desc, i) => (
              <li key={i} className={`flex items-start gap-2 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline Node (visible on md+) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-purple to-pink flex items-center justify-center shadow-lg shadow-purple/30"
        >
          {getIcon(item.icon)}
        </motion.div>
      </div>

      {/* Empty space for the other side */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </motion.div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-pink/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-purple/5 rounded-full blur-[150px]" />

      <div className="container px-4 md:px-6 relative" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my educational background, experience, and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple via-pink to-cyan -translate-x-1/2" />
          
          {/* Mobile Line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple via-pink to-cyan" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} isInView={isInView} />
            ))}
          </div>

          {/* End Node */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 -bottom-4"
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan to-purple" />
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="glass-card inline-block p-6 md:p-8">
            <p className="text-muted-foreground mb-2">
              <span className="text-primary font-semibold">Languages:</span> English (Fluent), Hindi (Native)
            </p>
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">Availability:</span> Open to internships and full-time SDE roles
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
