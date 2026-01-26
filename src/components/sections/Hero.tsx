import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Code2, FileCode, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";
import ProfilePhoto from "@/components/ProfilePhoto";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "Competitive Programmer", 
  "Problem Solver",
  "Tech Enthusiast"
];

const TypewriterText = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(role.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <span className="text-primary">
      {displayText}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  );
};

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <ParticleBackground />
      
      {/* Asymmetric gradient orbs - positioned differently for visual interest */}
      <motion.div 
        className="absolute top-[15%] -left-20 w-[400px] h-[400px] bg-purple/20 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] bg-pink/15 rounded-full blur-[100px]"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[40%] right-[20%] w-[200px] h-[200px] bg-cyan/10 rounded-full blur-[80px]"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 px-4 md:px-6 lg:px-8">
        {/* Asymmetric layout - photo offset to create visual interest */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center max-w-7xl mx-auto">
          
          {/* Content - Takes more space, left aligned */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 order-2 lg:order-1">
            
            {/* Personal greeting - adds human touch */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Hey there! I'm
            </motion.p>

            {/* Main heading with asymmetric styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1]">
                <span className="gradient-text-animated">Shweta</span>
                <br />
                <span className="text-foreground">Sahu</span>
              </h1>
            </motion.div>

            {/* Dynamic role with typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <span className="w-12 h-[2px] bg-gradient-to-r from-purple to-pink" />
              <p className="text-xl md:text-2xl font-display">
                <TypewriterText />
              </p>
            </motion.div>

            {/* Personal description - conversational tone */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-lg max-w-xl leading-relaxed"
            >
              I craft digital experiences that blend creativity with clean code. 
              Currently diving deep into competitive programming while building 
              full-stack applications that actually matter.
            </motion.p>

            {/* CTA Buttons - varied sizes for visual hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple via-pink to-purple bg-[length:200%_100%] hover:bg-right transition-all duration-500 text-lg px-8 h-14 rounded-xl shadow-lg shadow-purple/20"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/5 hover:border-primary/60 text-lg px-6 h-14 rounded-xl group"
                asChild
              >
                <a href="/Shweta_Sahu_Resume.pdf" download="Shweta_Sahu_Resume.pdf">
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social links - horizontal with subtle hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-2 pt-6"
            >
              <span className="text-sm text-muted-foreground mr-2">Find me on</span>
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/shweta-sahu-b239a3307", label: "LinkedIn", hoverColor: "hover:text-[#0A66C2]" },
                { icon: Github, href: "https://github.com/SahuShweta", label: "GitHub", hoverColor: "hover:text-foreground" },
                { icon: Code2, href: "https://leetcode.com/u/Shweta_Sahu10/", label: "LeetCode", hoverColor: "hover:text-[#FFA116]" },
                { icon: FileCode, href: "https://www.geeksforgeeks.org/profile/shwetasan7ie", label: "GeeksforGeeks", hoverColor: "hover:text-[#2F8D46]" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-secondary/30 hover:bg-secondary/60 transition-all duration-300 ${social.hoverColor}`}
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Photo - Offset position for asymmetry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 relative"
          >
            {/* Decorative elements around photo */}
            <div className="relative">
              {/* Floating accent shapes */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 border-2 border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink/20 to-cyan/20 rounded-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <ProfilePhoto size="lg" />
              
              {/* Status indicator - personal touch */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-card px-4 py-2 flex items-center gap-2 whitespace-nowrap"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Open to opportunities</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - subtle and personal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-primary/80 transition-colors group"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
