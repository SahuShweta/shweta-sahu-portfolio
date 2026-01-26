import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with cart functionality, secure payments, and admin dashboard for product management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive tool to visualize sorting and pathfinding algorithms. Perfect for understanding how algorithms work step by step.",
    tech: ["React", "TypeScript", "Framer Motion"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates and team features.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts and data visualization.",
    tech: ["React", "OpenWeather API", "Chart.js"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Code Snippet Manager",
    description: "Personal snippet organizer with syntax highlighting and quick search.",
    tech: ["React", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description: "This portfolio - built with modern animations and smooth interactions.",
    tech: ["React", "Framer Motion", "Tailwind"],
    github: "#",
    live: "#",
    featured: false,
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-pink/5 rounded-full blur-[100px]" />

      <div className="container px-4 md:px-6 relative" ref={containerRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="hidden sm:block flex-1 h-[1px] bg-gradient-to-r from-border to-transparent max-w-xs" />
          </div>
          <p className="text-muted-foreground max-w-xl">
            A selection of projects that showcase my skills and passion
          </p>
        </motion.div>

        {/* Featured Projects - Large cards with more detail */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`glass-card p-8 md:p-10 group hover:border-primary/40 transition-all duration-300 relative overflow-hidden ${
                index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
              }`}
            >
              {/* Hover gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    {/* Project label */}
                    <span className="text-primary text-sm font-mono mb-2 block">Featured Project</span>
                    
                    {/* Title with arrow */}
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 flex items-center gap-3 group-hover:text-primary transition-colors">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-secondary/60 rounded-md text-sm text-foreground font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className="flex items-center gap-4 md:flex-col md:items-end">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-xl font-display font-semibold mb-8 text-center">Other Noteworthy Projects</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/60 rounded-xl group"
            asChild
          >
            <a href="https://github.com/SahuShweta" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
