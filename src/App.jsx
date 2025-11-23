import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Code, Palette, Zap, Award, Book, Briefcase, ExternalLink, Terminal, Database, Brain } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "FoodSync – Food Waste Management",
      description: "Full-stack MERN platform connecting NGOs, surplus food providers, and upcycling industries with role-based authentication and real-time dashboards.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      achievement: "🏆 2nd Runner-Up at REGEN Hackathon 2025 (Pan-India)",
      link: "https://food-sync-sigma.vercel.app/"
    },
    {
      title: "Neural Network Text & Sentiment Analysis",
      description: "Deep learning models using LSTM, GRU, and RNN for next-word prediction and movie review sentiment classification.",
      tech: ["Python", "TensorFlow", "LSTM", "GRU", "RNN", "NLP"],
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      achievement: "Advanced ML/AI Implementation",
      link: "https://github.com/Utkarsh-Singh-u/Sentiment-Analysis-on-Movie-Review"
    }
  ];

  const skills = [
    { 
      name: "Full-Stack Development", 
      icon: <Code className="w-6 h-6" />, 
      items: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB"],
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Machine Learning & AI", 
      icon: <Brain className="w-6 h-6" />, 
      items: ["Deep Learning", "Neural Networks", "NLP", "LSTM/GRU/RNN"],
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "Programming & DSA", 
      icon: <Terminal className="w-6 h-6" />, 
      items: ["C++", "C", "Python", "400+ Problems Solved"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    "🏆 2nd Runner-Up at REGEN Hackathon 2025 (Pan-India)",
    "💻 400+ Problems Solved on LeetCode & GeeksforGeeks",
    "🎓 8.71 CGPA at NIT Manipur",
    "🚀 Multiple Full-Stack Projects Deployed"
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen w-screen overflow-x-hidden">
      {/* Cursor Follower */}
      <div 
        className="fixed w-6 h-6 rounded-full border-2 border-purple-500 pointer-events-none z-50 transition-transform duration-100 hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Animated Background with Grid */}
      <div className="fixed inset-0 w-screen h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
        
        <div 
          className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.2}px)`,
            top: '10%',
            left: '10%'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]"
          style={{
            transform: `translate(-${scrollY * 0.15}px, ${scrollY * 0.1}px)`,
            top: '50%',
            right: '10%'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
          style={{
            transform: `translate(${scrollY * 0.05}px, -${scrollY * 0.15}px)`,
            bottom: '10%',
            left: '50%'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 w-full z-40 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              UTKARSH SINGH
            </span>
          </div>
          
          <div className="hidden md:flex gap-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-purple-400 transition-all duration-300 group hover:scale-110 hover:-translate-y-0.5"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                <span className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden w-full overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-80' : 'max-h-0'
          }`}
        >
          <div className="px-4 sm:px-6 py-4 space-y-4 bg-slate-900/95 backdrop-blur-xl">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen w-full flex items-center justify-center relative pt-20">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-8">
            <div 
              className="inline-block mb-6"
              style={{
                animation: 'float 6s ease-in-out infinite'
              }}
            >
              <div className="text-lg md:text-xl text-purple-400 mb-4 font-mono hover:scale-110 hover:text-pink-400 transition-all duration-300 cursor-default">
                &lt;Hello World /&gt;
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-4 hover:scale-105 transition-transform duration-300 cursor-default">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  UTKARSH SINGH
                </span>
              </h1>
              <div className="text-2xl md:text-4xl font-semibold text-slate-300 mb-4 hover:text-purple-400 hover:scale-105 transition-all duration-300 cursor-default">
                Software & Full-Stack Developer & ML Enthusiast
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-4 max-w-3xl mx-auto leading-relaxed hover:text-slate-300 hover:scale-105 transition-all duration-300 cursor-default">
              B.Tech CSE Student at <span className="text-purple-400 font-semibold hover:text-pink-400 transition-colors duration-300">NIT Manipur</span> | Building scalable systems & AI-powered solutions
            </p>
            
            <div className="flex gap-3 justify-center mb-8 text-sm md:text-base flex-wrap">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 cursor-default hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-pink-500/30">
                🎓 CGPA: 8.71
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 cursor-default hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-cyan-500/30">
                💻 400+ DSA Problems
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 cursor-default hover:bg-gradient-to-r hover:from-green-500/30 hover:to-emerald-500/30">
                🏆 Hackathon Winner
              </span>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <button
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-110 hover:-translate-y-1 relative overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Explore My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300" />
              </span>
            </button>
            <a
              href="https://food-sync-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/20 transition-all duration-300 flex items-center gap-2 hover:scale-110 hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Live Project Demo
                <ExternalLink className="w-4 h-4 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
              </span>
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Utkarsh-Singh-u"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 border border-slate-700 rounded-full hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-125 hover:-rotate-12 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-purple-500/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500" />
              <Github className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/utkarsh-singh-275866288/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 border border-slate-700 rounded-full hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-125 hover:rotate-12 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-blue-500/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500" />
              <Linkedin className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:utkarshsingh7104@gmail.com"
              className="group p-4 border border-slate-700 rounded-full hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300 hover:scale-125 hover:-rotate-12 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-pink-500/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500" />
              <Mail className="w-6 h-6 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative z-10 w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center scroll-animate hover:scale-110 transition-transform duration-500 cursor-default">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-center text-slate-400 text-lg mb-16 max-w-3xl mx-auto scroll-animate hover:text-slate-300 hover:scale-105 transition-all duration-300 cursor-default">
            Passionate about building impactful solutions that bridge technology and real-world problems. 
            Currently seeking opportunities to apply my skills in Software Devlopment,  full-stack development and AI.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="scroll-animate group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <Book className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10" />
              <h3 className="text-2xl font-bold mb-3 relative z-10">Education</h3>
              <div className="text-slate-300 relative z-10">
                <div className="font-semibold text-xl mb-2">B.Tech Computer Science</div>
                <div className="text-purple-400">NIT Manipur</div>
                <div className="text-slate-400">Expected Graduation: 2027</div>
                <div className="mt-3 text-lg">
                  <span className="text-green-400 font-semibold group-hover:text-green-300 transition-colors">CGPA: 8.71</span> (over 4 semesters)
                </div>
              </div>
            </div>

            <div className="scroll-animate group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-green-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <Award className="w-12 h-12 text-green-400 mb-4 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300 relative z-10" />
              <h3 className="text-2xl font-bold mb-3 relative z-10">Key Achievements</h3>
              <div className="space-y-3 relative z-10">
                {achievements.map((achievement, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-3 text-slate-300 group-hover:translate-x-2 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <span className="text-xl">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative z-10 bg-slate-900/30 w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center scroll-animate hover:scale-110 transition-transform duration-500 cursor-default">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="scroll-animate group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-transparent transition-all duration-500 hover:scale-110 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-all duration-700 group-hover:scale-150`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-700 shadow-lg group-hover:shadow-2xl`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">{skill.name}</h3>
                  <div className="space-y-2">
                    {skill.items.map((item, j) => (
                      <div 
                        key={j} 
                        className="flex items-center gap-2 text-slate-300 group-hover:translate-x-2 transition-all duration-300"
                        style={{ transitionDelay: `${j * 0.1}s` }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} group-hover:scale-150 transition-transform duration-300`} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-animate mt-16 p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 group">
            <h3 className="text-2xl font-bold mb-6 text-center group-hover:scale-105 transition-transform duration-300">Additional Technologies</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Git", "GitHub", "VS Code", "Postman", "Bootstrap", "Tailwind CSS", "SQL", "Java", "C"].map((tech, i) => (
                <span
                  key={i}
                  className="px-6 py-3 bg-slate-800 rounded-full text-sm border border-slate-600 hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative z-10 w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center scroll-animate hover:scale-110 transition-transform duration-500 cursor-default">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="space-y-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="scroll-animate group relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-transparent transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150`} />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <h3 className="text-3xl md:text-4xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 group-hover:scale-105">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 whitespace-nowrap relative overflow-hidden group/button`}
                      >
                        <span className="absolute inset-0 bg-white opacity-0 group-hover/button:opacity-20 transition-opacity duration-300" />
                        <span className="relative z-10 flex items-center gap-2">
                          Live Demo
                          <ExternalLink className="w-4 h-4 group-hover/button:rotate-45 group-hover/button:scale-125 transition-all duration-300" />
                        </span>
                      </a>
                    )}
                  </div>
                  
                  {project.achievement && (
                    <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300 text-sm font-semibold group-hover:scale-105 group-hover:bg-yellow-500/30 transition-all duration-300">
                      {project.achievement}
                    </div>
                  )}
                  
                  <p className="text-slate-300 mb-6 text-lg leading-relaxed group-hover:text-slate-200 transition-colors duration-300">{project.description}</p>
                  
                  <div className="flex gap-3 flex-wrap">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-4 py-2 bg-slate-800/80 rounded-full text-sm border border-slate-600 group-hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-purple-500/20 hover:shadow-lg cursor-pointer"
                        style={{ transitionDelay: `${j * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative z-10 bg-slate-900/30 w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 scroll-animate hover:scale-110 transition-transform duration-500 cursor-default">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed scroll-animate hover:text-slate-300 hover:scale-105 transition-all duration-300 cursor-default">
            Currently seeking internship opportunities in <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300">Full-Stack Development</span>, 
            <span className="text-pink-400 font-semibold hover:text-pink-300 transition-colors duration-300"> Machine Learning</span>, and <span className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-300">Software Devlopment</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 scroll-animate">
            <a
              href="mailto:utkarshsingh7104@gmail.com"
              className="group px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                Email Me
              </span>
            </a>
            <a
              href="tel:+919889775335"
              className="group px-10 py-5 border-2 border-purple-500 rounded-full font-semibold text-lg hover:bg-purple-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-2 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">📞 +91 9889775335</span>
            </a>
          </div>

          <div className="text-slate-400 scroll-animate">
            <p className="mb-2 hover:text-slate-300 hover:scale-105 transition-all duration-300 cursor-default">📍 Manipur, India</p>
            <p className="hover:text-slate-300 hover:scale-105 transition-all duration-300 cursor-default">Open to remote opportunities and relocation</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 relative z-10 w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 hover:text-slate-300 hover:scale-105 transition-all duration-300 cursor-default">
              © 2025 Utkarsh Singh.
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/Utkarsh-Singh-u" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                GitHub
              </a>
              <a href="https://linkedin.com/in/utkarsh-singh-275866288/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                LinkedIn
              </a>
              <a href="mailto:utkarshsingh7104@gmail.com" className="text-slate-400 hover:text-pink-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s ease infinite;
        }
        
        /* Scroll animations */
        .scroll-animate {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Staggered delays for children */
        .scroll-animate:nth-child(1) { transition-delay: 0s; }
        .scroll-animate:nth-child(2) { transition-delay: 0.1s; }
        .scroll-animate:nth-child(3) { transition-delay: 0.2s; }
        .scroll-animate:nth-child(4) { transition-delay: 0.3s; }
        .scroll-animate:nth-child(5) { transition-delay: 0.4s; }
        .scroll-animate:nth-child(6) { transition-delay: 0.5s; }
      `}</style>
    </div>
  );
}