import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gradient">AT</span>
              <span className="text-xl font-semibold">Abhay Tiwari</span>
            </div>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating innovative solutions 
              with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <a
                href="mailto:abhay.tiwari.dev@gmail.com"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                abhay.tiwari.dev@gmail.com
              </a>
              <p className="text-muted-foreground">Noida, India</p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/CodeWithAT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhay-tiwari-93b412290/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:abhay.tiwari.dev@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground flex items-center"
          >
            © {currentYear} Abhay Tiwari. Made with{' '}
            <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
            and lots of coffee ☕
          </motion.p>
          
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground">
              Built with React.js, Three.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}