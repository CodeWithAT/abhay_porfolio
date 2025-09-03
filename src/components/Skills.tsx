import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 90, color: 'hsl(217 91% 60%)' },
      { name: 'JavaScript (ES6+)', level: 88, color: 'hsl(189 94% 43%)' },
      { name: 'HTML5', level: 95, color: 'hsl(259 94% 51%)' },
      { name: 'CSS3', level: 90, color: 'hsl(217 91% 60%)' },
      { name: 'Responsive Design', level: 85, color: 'hsl(189 94% 43%)' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', level: 90, color: 'hsl(259 94% 51%)' },
      { name: 'MySQL', level: 85, color: 'hsl(217 91% 60%)' },
      { name: 'Data Structures & Algorithms', level: 80, color: 'hsl(189 94% 43%)' },
      { name: 'Object-Oriented Programming', level: 88, color: 'hsl(259 94% 51%)' }
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 85, color: 'hsl(217 91% 60%)' },
      { name: 'VS Code', level: 90, color: 'hsl(189 94% 43%)' },
      { name: 'Problem Solving', level: 85, color: 'hsl(259 94% 51%)' },
      { name: 'Analytical Thinking', level: 88, color: 'hsl(217 91% 60%)' }
    ]
  }
];

interface SkillBarProps {
  skill: { name: string; level: number; color: string };
  index: number;
  inView: boolean;
}

function SkillBar({ skill, index, inView }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-primary font-semibold">{skill.level}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{ backgroundColor: skill.color }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life. 
            I'm always learning and expanding my skill set.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="card-glow p-8"
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-gradient">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name}
                    skill={skill} 
                    index={index} 
                    inView={inView} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React.js', 'JavaScript (ES6+)', 'Java', 'HTML5', 'CSS3', 'MySQL', 
              'Git', 'GitHub', 'VS Code', 'Data Structures & Algorithms', 
              'Object-Oriented Programming', 'Problem Solving', 'Analytical Thinking'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-full text-sm font-medium hover:scale-110 transition-transform cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}