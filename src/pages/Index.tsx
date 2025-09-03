// Simple test version to debug the issue
console.log('Index.tsx file is being loaded');

const Index = () => {
  console.log('Index component is rendering - TEST VERSION');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AT
            </span>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center space-y-8 max-w-4xl">
            {/* Profile Image */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold">
                  AT
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Abhay Tiwari
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer | React.js Specialist | Java Developer
            </p>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions with modern technologies. 
              Currently working at Mphasis with 2+ years of experience building robust applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform">
                View My Work
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-colors">
                Download Resume
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Full Stack Developer from{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Noida, India
                  </span>
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate Full Stack Developer with 2+ years of experience creating 
                  digital solutions that make a difference. Currently working at Mphasis, 
                  I specialize in modern web technologies and have a strong foundation in 
                  both front-end and back-end development.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  My expertise includes React.js, JavaScript, Java, HTML/CSS, and MySQL. 
                  I love solving complex problems and building applications that provide 
                  excellent user experiences.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                  <div className="text-gray-400">Technologies</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://github.com/CodeWithAT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/abhay-tiwari-93b412290/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:abhay.tiwari.dev@gmail.com"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;