import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import TiltCard from "@/components/TiltCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with cart, payments, and admin dashboard. Built with modern technologies for optimal performance.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full-Stack",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive visualization tool for sorting and pathfinding algorithms. Helps understand complex algorithms through visual representation.",
    tech: ["React", "TypeScript", "Framer Motion"],
    category: "Frontend",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team features, and productivity analytics.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
    category: "Full-Stack",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and historical data visualization.",
    tech: ["React", "OpenWeather API", "Chart.js"],
    category: "Frontend",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Code Snippet Manager",
    description: "Personal code snippet organizer with syntax highlighting, tags, and quick search functionality.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    category: "Frontend",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description: "Modern, animated portfolio website showcasing projects and skills with smooth interactions.",
    tech: ["Next.js", "Framer Motion", "Three.js"],
    category: "Frontend",
    github: "#",
    live: "#",
    featured: false,
  },
];

const categories = ["All", "Full-Stack", "Frontend"];

const Projects = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink/5 rounded-full blur-[150px]" />

      <div className="container px-4 md:px-6 relative" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple to-pink text-white shadow-lg shadow-purple/25"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with 3D Tilt */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <TiltCard glowColor={index % 2 === 0 ? "purple" : "pink"}>
                <div className={`glass-card p-6 group hover:border-primary/40 transition-all duration-300 h-full ${
                  project.featured ? "ring-1 ring-primary/30" : ""
                }`}>
                  {/* Project Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Folder className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.2, y: -2 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.2, y: -2 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div 
                      className="mt-4 pt-4 border-t border-border"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-xs text-primary font-medium flex items-center gap-1">
                        <motion.span
                          animate={{ rotate: [0, 20, -20, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                        >
                          ⭐
                        </motion.span>
                        Featured Project
                      </span>
                    </motion.div>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            className="border-primary/50 hover:bg-primary/10 group"
            asChild
          >
            <a href="https://github.com/SahuShweta" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;