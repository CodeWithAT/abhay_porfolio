import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React.js and Node.js. Features include user authentication, product management, shopping cart, and payment integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tech: ['React.js', 'Node.js', 'MySQL', 'Express'],
    github: 'https://github.com/CodeWithAT',
    live: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tech: ['React.js', 'Firebase', 'Material-UI'],
    github: 'https://github.com/CodeWithAT',
    live: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather application that provides real-time weather data, forecasts, and beautiful visualizations using modern APIs.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    tech: ['React.js', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/CodeWithAT',
    live: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website with 3D animations, smooth transitions, and optimized performance.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    tech: ['React.js', 'Three.js', 'Tailwind CSS'],
    github: 'https://github.com/CodeWithAT',
    live: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Banking System',
    description: 'A secure banking application with account management, transaction history, and real-time balance updates built with Java.',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop',
    tech: ['Java', 'MySQL', 'Spring Boot'],
    github: 'https://github.com/CodeWithAT',
    live: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Real-time chat application with private messaging, group chats, and emoji support using WebSocket technology.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
    tech: ['React.js', 'Socket.io', 'Node.js'],
    github: 'https://github.com/CodeWithAT',
    live: '#',
    featured: false
  }
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  inView: boolean;
}

function ProjectCard({ project, index, inView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`card-glow group relative overflow-hidden ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 bg-gradient-primary px-3 py-1 rounded-full text-primary-foreground text-sm font-medium">
            <Zap className="h-4 w-4" />
            Featured
          </div>
        </div>
      )}
      
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            className="btn-hero"
            onClick={() => window.open(project.live, '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm"
            onClick={() => window.open(project.github, '_blank')}
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 pt-4 border-t border-border/50">
          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:text-primary-foreground hover:bg-primary"
            onClick={() => window.open(project.live, '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View Live
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
            onClick={() => window.open(project.github, '_blank')}
          >
            <Github className="h-4 w-4 mr-2" />
            Source Code
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development. 
            Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button
            className="btn-hero"
            onClick={() => window.open('https://github.com/CodeWithAT', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}