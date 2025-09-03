import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'Mphasis',
    location: 'India',
    period: '2022 - Present',
    description: [
      'Developed and maintained robust applications using React.js, JavaScript (ES6+), and Java',
      'Applied Object-Oriented Programming concepts for scalable software solutions',
      'Worked with MySQL databases for efficient data management and retrieval',
      'Implemented Data Structures & Algorithms knowledge to optimize application performance',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Built responsive web interfaces using HTML5 and CSS3'
    ],
    technologies: ['React.js', 'JavaScript (ES6+)', 'Java', 'HTML5', 'CSS3', 'MySQL', 'DSA', 'OOP'],
    current: true
  },
  {
    id: 2,
    title: 'Junior Developer',
    company: 'Learning & Development',
    location: 'India',
    period: '2021 - 2022',
    description: [
      'Built web applications using frontend technologies',
      'Gained experience in HTML5, CSS3, and JavaScript fundamentals',
      'Learned and applied Object-Oriented Programming principles',
      'Developed problem-solving and analytical thinking skills',
      'Built foundation in Data Structures and Algorithms'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Java', 'OOP Concepts', 'DSA'],
    current: false
  },
  {
    id: 3,
    title: 'Computer Science Student',
    company: 'University',
    location: 'India',
    period: '2018 - 2022',
    description: [
      'Studied Computer Science with focus on Data Structures and Algorithms',
      'Developed multiple academic projects using various programming languages',
      'Participated in coding competitions and technical events',
      'Learned software engineering principles and best practices',
      'Built a strong foundation in programming and problem-solving'
    ],
    technologies: ['Java', 'C++', 'Python', 'DSA', 'DBMS'],
    current: false
  }
];

interface ExperienceCardProps {
  experience: typeof experiences[0];
  index: number;
  inView: boolean;
}

function ExperienceCard({ experience, index, inView }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30" />
      
      {/* Timeline Dot */}
      <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-glow" />
      
      {/* Content */}
      <div className="ml-20 card-glow p-6 group">
        {experience.current && (
          <div className="absolute top-4 right-4">
            <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
              Current
            </span>
          </div>
        )}
        
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
            {experience.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Building2 className="h-4 w-4" />
              <span className="font-medium">{experience.company}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{experience.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{experience.period}</span>
            </div>
          </div>
        </div>
        
        <ul className="space-y-2 mb-6">
          {experience.description.map((item, i) => (
            <li key={i} className="text-muted-foreground flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here's my professional journey and the experiences that have shaped 
            my career as a developer. Each role has contributed to my growth and expertise.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 card-glow p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gradient">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Years of Professional Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Successful Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Programming Languages</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}