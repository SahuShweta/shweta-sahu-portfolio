import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple to-pink text-white"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-6 group hover:border-primary/40 transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Project Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
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
                    className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs text-primary font-medium">⭐ Featured Project</span>
                </div>
              )}
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
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
            <Github className="w-4 h-4 mr-2" />
            View All on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;