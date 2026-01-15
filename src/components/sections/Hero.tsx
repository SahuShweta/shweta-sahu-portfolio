import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Code2, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";
import ProfilePhoto from "@/components/ProfilePhoto";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pink/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "0.5s" }} />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Content - Left Side */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card px-4 py-2 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Open to opportunities</span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
                {" "}
                <span className="gradient-text">Shweta Sahu</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl"
              >
                Computer Science Engineer | Full-Stack Developer | Problem Solver
              </motion.p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl"
            >
              Building digital experiences with modern technologies. Passionate about 
              competitive programming and crafting elegant solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple to-pink hover:opacity-90 transition-opacity text-lg px-8 shadow-lg shadow-purple/25"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 hover:bg-primary/10 text-lg px-8"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4 pt-2"
            >
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/shweta-sahu-b239a3307", label: "LinkedIn", color: "hover:text-[#0A66C2]" },
                { icon: Github, href: "https://github.com/SahuShweta", label: "GitHub", color: "hover:text-foreground" },
                { icon: Code2, href: "https://leetcode.com/u/Shweta_Sahu10/", label: "LeetCode", color: "hover:text-[#FFA116]" },
                { icon: FileCode, href: "https://www.geeksforgeeks.org/profile/shwetasan7ie", label: "GeeksforGeeks", color: "hover:text-[#2F8D46]" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 glass-card hover:border-primary/60 transition-all duration-300 group ${social.color}`}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-inherit transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Photo - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="flex-shrink-0"
          >
            <ProfilePhoto size="lg" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
