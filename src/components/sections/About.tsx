import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Download, MapPin, GraduationCap, Heart, Zap, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "DSA Problems", value: 500, suffix: "+", icon: Zap },
  { label: "Projects Built", value: 15, suffix: "+", icon: Coffee },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Asymmetric background elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple/5 rounded-full blur-[150px] -translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink/5 rounded-full blur-[100px]" />

      <div className="container px-4 md:px-6 relative" ref={containerRef}>
        {/* Section header - left aligned for personality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="hidden sm:block flex-1 h-[1px] bg-gradient-to-r from-border to-transparent max-w-xs" />
          </div>
          <p className="text-muted-foreground max-w-xl">
            A glimpse into who I am beyond the code
          </p>
        </motion.div>

        {/* Asymmetric content layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Main content - larger column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Personal narrative - conversational */}
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">Hey!</span> I'm Shweta, a Computer Science 
                student who fell in love with the art of problem-solving. There's something magical 
                about turning an idea into working code that people can actually use.
              </p>
              <p>
                My journey started with curiosity about how things work, and now I spend my days 
                building full-stack applications and nights conquering DSA problems. 
                <span className="text-primary"> Competitive programming</span> taught me to think 
                faster and code smarter.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source, or mentoring fellow learners. I believe in 
                <span className="text-foreground font-medium"> building things that matter</span>.
              </p>
            </div>

            {/* What I'm into - personal touches */}
            <div className="flex flex-wrap gap-3">
              {["Clean Code", "Problem Solving", "UI/UX", "Learning", "Open Source"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="px-4 py-2 rounded-full bg-secondary/50 text-sm text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground transition-all cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Education highlight - visual card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-card p-6 flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">
                  B.Tech in Computer Science
                </h4>
                <p className="text-sm text-muted-foreground">
                  Currently pursuing my degree with focus on algorithms, 
                  data structures, and software development
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple to-pink hover:opacity-90 transition-opacity rounded-xl"
              >
                <a href="/Shweta_Sahu_Resume.pdf" download="Shweta_Sahu_Resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats sidebar - smaller, offset */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Stats cards - stacked asymmetrically */}
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className={`glass-card p-6 hover:border-primary/40 transition-all ${
                    index === 0 ? 'lg:ml-8' : 'lg:mr-8'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-primary/10">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card p-5 flex items-center gap-4 lg:ml-4"
            >
              <div className="p-2 rounded-lg bg-secondary/50">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Based in</p>
                <p className="font-medium text-foreground">Patna, Bihar, India</p>
              </div>
            </motion.div>

            {/* Fun personal note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass-card p-5 lg:mr-4"
            >
              <div className="flex items-start gap-3">
                <Heart className="w-4 h-4 text-pink shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Currently obsessed with optimizing algorithms and building 
                  intuitive user interfaces
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
