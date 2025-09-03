import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following best practices.'
  },
  {
    icon: Palette,
    title: 'UI/UX Focus',
    description: 'Creating beautiful, intuitive interfaces that enhance user experience.'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Rapid development and deployment without compromising on quality.'
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborative approach with excellent communication and problem-solving skills.'
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                Full Stack Developer from{' '}
                <span className="text-gradient">Noida, India</span>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer with 2+ years of experience creating 
                digital solutions that make a difference. Currently working at Mphasis, 
                I specialize in modern web technologies and have a strong foundation in 
                both front-end and back-end development.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey began with a deep dive into Data Structures and Algorithms, 
                which laid the foundation for my problem-solving approach. I've evolved 
                from building complex projects in college to developing enterprise-level 
                applications that serve thousands of users.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. I believe in continuous learning and staying 
                updated with the latest industry trends.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="card-glow p-6 group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary mr-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}