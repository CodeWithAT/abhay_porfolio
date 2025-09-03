import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene3D from './3DScene';
import heroBackground from '@/assets/hero-bg.jpg';
import profilePhoto from '@/assets/profile-photo.jpg';

const typewriterTexts = [
  'Full Stack Developer',
  'React.js Specialist', 
  'Java Developer',
  'Problem Solver',
  'UI/UX Enthusiast'
];

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = typewriterTexts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % typewriterTexts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
      </div>

      {/* 3D Scene Overlay */}
      <Scene3D />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Abhay Tiwari"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/30 shadow-glow float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse-glow" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Abhay Tiwari</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground"
            >
              I'm a{' '}
              <span className="text-primary font-semibold">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative solutions with modern technologies. 
            Specialized in React.js, Java, and full-stack development with 2+ years of experience 
            building robust applications that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button
              className="btn-hero group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center text-muted-foreground cursor-pointer"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}