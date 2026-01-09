import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Code, Target, Flame, Award, Star } from "lucide-react";

const achievements = [
  {
    icon: Code,
    title: "500+ Problems Solved",
    description: "Across LeetCode, GeeksforGeeks, and other platforms",
    color: "from-purple to-pink",
  },
  {
    icon: Trophy,
    title: "Contest Participant",
    description: "Regular participation in weekly coding contests",
    color: "from-pink to-cyan",
  },
  {
    icon: Target,
    title: "Strong DSA Foundation",
    description: "Expertise in DP, Graphs, Trees & Advanced Algorithms",
    color: "from-cyan to-purple",
  },
  {
    icon: Flame,
    title: "Consistent Coder",
    description: "90+ day coding streak maintained",
    color: "from-purple to-pink",
  },
];

const platforms = [
  {
    name: "LeetCode",
    username: "Shweta_Sahu10",
    link: "https://leetcode.com/u/Shweta_Sahu10/",
    stats: [
      { label: "Problems", value: 300 },
      { label: "Easy", value: 120 },
      { label: "Medium", value: 150 },
      { label: "Hard", value: 30 },
    ],
    color: "#FFA116",
  },
  {
    name: "GeeksforGeeks",
    username: "shwetasan7ie",
    link: "https://www.geeksforgeeks.org/profile/shwetasan7ie",
    stats: [
      { label: "Problems", value: 200 },
      { label: "Score", value: 500 },
      { label: "Rank", value: "Top 10%" },
    ],
    color: "#2F8D46",
  },
];

const AnimatedCounter = ({ value, suffix = "" }: { value: number | string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (typeof value === "string" || !isInView) {
      return;
    }
    
    const duration = 1500;
    const steps = 40;
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
  }, [isInView, value]);

  if (typeof value === "string") {
    return <span ref={ref}>{value}</span>;
  }

  return <span ref={ref}>{count}{suffix}</span>;
};

const Achievements = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple/5 rounded-full blur-[150px]" />

      <div className="container px-4 md:px-6 relative" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Coding <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in competitive programming and problem-solving
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center group hover:border-primary/40 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${achievement.color} mb-4`}>
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-semibold mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Platform Stats */}
        <div className="grid md:grid-cols-2 gap-6">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 md:p-8 group hover:border-primary/40 transition-all duration-300 block"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">@{platform.username}</p>
                </div>
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${platform.color}20` }}
                >
                  <Star className="w-6 h-6" style={{ color: platform.color }} />
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {platform.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold gradient-text">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-sm text-muted-foreground">View Profile →</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{ color: platform.color }}
                      fill={platform.color}
                    />
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;