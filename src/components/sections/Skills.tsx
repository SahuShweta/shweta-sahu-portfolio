import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layout, Server, Database, Cpu, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "C++", "JavaScript", "TypeScript", "Java"],
    featured: true,
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
    featured: false,
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
    featured: false,
  },
  {
    title: "Database & Tools",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Git", "Docker"],
    featured: false,
  },
];

const dsaTopics = [
  "Arrays & Strings",
  "Linked Lists",
  "Trees & Graphs",
  "Dynamic Programming",
  "Sorting & Searching",
  "Stack & Queue",
  "Greedy Algorithms",
  "Backtracking",
];

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-pink/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-purple/5 rounded-full blur-[100px]" />

      <div className="container px-4 md:px-6 relative" ref={containerRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="hidden sm:block flex-1 h-[1px] bg-gradient-to-r from-border to-transparent max-w-xs" />
          </div>
          <p className="text-muted-foreground max-w-xl">
            Technologies and tools I work with daily
          </p>
        </motion.div>

        {/* Skills grid - asymmetric bento-style layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`glass-card p-6 group hover:border-primary/40 transition-all duration-300 ${
                category.featured ? 'lg:row-span-2' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold">{category.title}</h3>
              </div>

              {/* Skills as tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-lg bg-secondary/50 text-sm text-foreground border border-transparent hover:border-primary/30 hover:bg-primary/10 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Extra content for featured card */}
              {category.featured && (
                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">
                    Primary languages I use for building applications and solving problems
                  </p>
                  <div className="flex items-center gap-2 text-xs text-primary">
                    <Sparkles className="w-3 h-3" />
                    <span>Python & C++ for competitive programming</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* DSA Section - distinctive styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="glass-card p-8 md:p-10 overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-pink/20">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold">Data Structures & Algorithms</h3>
                  <p className="text-sm text-muted-foreground">500+ problems solved across platforms</p>
                </div>
              </div>

              {/* DSA topics in a flowing layout */}
              <div className="flex flex-wrap gap-3">
                {dsaTopics.map((topic, index) => (
                  <motion.span
                    key={topic}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-5 py-2.5 bg-gradient-to-r from-secondary/80 to-secondary/40 rounded-full text-sm text-foreground border border-primary/10 hover:border-primary/40 hover:from-primary/20 hover:to-pink/10 transition-all duration-300 cursor-default"
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
