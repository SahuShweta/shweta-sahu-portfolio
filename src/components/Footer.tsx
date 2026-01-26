import { motion } from "framer-motion";
import { Heart, Linkedin, Github, Code2, FileCode, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/shweta-sahu-b239a3307", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/SahuShweta", label: "GitHub" },
  { icon: Code2, href: "https://leetcode.com/u/Shweta_Sahu10/", label: "LeetCode" },
  { icon: FileCode, href: "https://www.geeksforgeeks.org/profile/shwetasan7ie", label: "GFG" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 rounded-full bg-gradient-to-r from-purple to-pink shadow-lg shadow-purple/20"
      >
        <ArrowUp className="w-5 h-5 text-foreground" />
      </motion.button>

      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Main content - simple and clean */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold gradient-text mb-4">
              Shweta Sahu
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Computer Science student passionate about building meaningful digital experiences.
            </p>
          </div>

          {/* Navigation links - horizontal */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-3 rounded-lg bg-secondary/30 hover:bg-primary/10 transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Shweta Sahu</p>
            <p className="flex items-center gap-1.5">
              Made with <Heart className="w-3.5 h-3.5 text-pink fill-pink" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
