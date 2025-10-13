import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "./assets/logo-1.png";
import bg from "./assets/background-2.jpg";
import forkifyImg from "./assets/forkify.png";
import travelImg from "./assets/travel.png";
import blogImg from "./assets/blog.png";
import usePopcornImg from "./assets/usePopcorn.png";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code,
  Palette,
  Zap,
  ArrowRight,
  Download,
  MapPin,
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find which section is currently in view
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // If the top of the section is in the viewport
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }

        // For scroll animations
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible((prev) => ({ ...prev, [section.id]: true }));
        }
      });

      // Update active section
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, [activeSection]);

  const projects = [
    {
      title: "Forkify",
      description:
        "Recipe search application with bookmarking, custom recipe creation, and interactive UI. Built with vanilla JavaScript and MVC architecture.",
      image: forkifyImg,
      tags: ["JavaScript", "API", "MVC", "Responsive"],
      link: "https://forkify-usih.netlify.app/",
      github: "https://github.com/kenee101",
    },
    {
      title: "Travel List",
      description:
        "Smart packing list manager with sorting, filtering, and statistics. Helps travelers organize items efficiently with a clean interface.",
      image: travelImg,
      tags: ["React", "State Management", "UI/UX"],
      link: "https://far-away-from-home.netlify.app/",
      github: "https://github.com/kenee101",
    },
    {
      title: "Blog Platform",
      description:
        "Full-featured blog with rich text editor, post management, and responsive design. Demonstrates CRUD operations and modern React patterns.",
      image: blogImg,
      tags: ["React", "Forms", "CRUD"],
      link: "https://post-on-blog.netlify.app/",
      github: "https://github.com/kenee101",
    },
    {
      title: "usePopcorn",
      description:
        "Movie database with search, ratings, and watchlist features. Integrates with external APIs for real-time movie information.",
      image: usePopcornImg,
      tags: ["React", "API Integration", "Hooks"],
      link: "https://usePopcorn.netlify.app/",
      github: "https://github.com/kenee101",
    },
  ];

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Expert in HTML5, CSS3, and modern JavaScript (ES6+). Building responsive, accessible web applications with clean, semantic code.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "React Ecosystem",
      description:
        "Proficient in React, hooks, context API, and component architecture. Creating dynamic, performant user interfaces with modern patterns.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance & UX",
      description:
        "Optimizing web performance, implementing smooth animations, and crafting intuitive user experiences that drive engagement.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen dark:bg-black">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-lg shadow-lg" : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-blue-900 bg-clip-text text-transparent">
              Elijah.dev
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "contact"].map((item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={`cursor-pointer transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item ? "text-blue-600 font-semibold" : ""
                  }`}
                  onSetActive={() => setActiveSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 rounded-lg mt-2 shadow-xl bg-gray-800/95 backdrop-blur-sm">
              {["home", "about", "projects", "contact"].map((item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-700/50 transition-colors duration-200"
                  onClick={() => {
                    setActiveSection(item);
                    setIsMenuOpen(false);
                  }}
                  onSetActive={() => setActiveSection(item)}
                >
                  <span
                    className={`${
                      activeSection === item
                        ? "text-blue-400 font-medium"
                        : "text-gray-300"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 px-4"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 flex flex-col justify-center items-center text-center transition-all duration-1000 ${
              isVisible.home
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium">
              Full Stack Developer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-br from-cyan-200 to-blue-600 bg-clip-text text-transparent">
                Elijah
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              I craft exceptional digital experiences with clean code and
              creative design. Specializing in React, Next.js, Expo, Node.js,
              and modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-gray-950 hover:bg-blue-800 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-900/20 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/kenee101"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-900/30 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-900/30 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:elijah.usih@stu.cu.edu.ng"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-900/30 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div
            className={`relative order-first lg:order-2 transition-all duration-1000 delay-300 ${
              isVisible.home
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-gray-900 shadow-2xl">
                <div className="w-full h-full bg-black flex items-center justify-center text-6xl font-bold text-white">
                  <img
                    src={bg}
                    // src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="Elijah Usih"
                    className="w-full h-full object-contain scale-150 mt-20"
                  />
                  {/* EU */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.about
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I transform ideas into elegant, high-performance mobile and web
              applications that users love to interact with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group p-8 bg-gray-950 rounded-2xl hover:shadow-2xl transition-all duration-500 ${
                  isVisible.about
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center items-center mt-16 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Next.js",
                "Expo",
                "React",
                "Node.js",
                "Golang",
                "FastAPI",
                "Python",
                "Tailwind CSS",
                "Express",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300">
              A selection of my recent work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  isVisible.projects
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-200 to-slate-900 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:z-10 group-hover:backdrop-blur-sm group-hover:backdrop-brightness-50 group-hover:backdrop-saturate-200 transition-all duration-300">
                    <div className="flex space-x-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="w-6 h-6 text-gray-900" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
                      >
                        <Github className="w-6 h-6 text-gray-900" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                      >
                        {tag}
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
      <section id="contact" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300">
              Have a project in mind? I'd love to hear from you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-900/30 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:elijah.usih@stu.cu.edu.ng"
                    className="text-gray-300 hover:text-blue-600"
                  >
                    elijah.usih@stu.cu.edu.ng
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-900/30 rounded-lg">
                  <Github className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">GitHub</h3>
                  <a
                    href="https://github.com/kenee101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-600"
                  >
                    github.com/kenee101
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-900/30 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">Available for remote work</p>
                </div>
              </div>

              <div className="pt-6">
                <button className="w-full px-8 py-4 bg-gray-950 hover:bg-blue-800 cursor-pointer text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gray-950 hover:bg-blue-800 cursor-pointer text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Elijah Usih. Built with passion for the profession</p>
        </div>
      </footer>
    </div>
  );
}
