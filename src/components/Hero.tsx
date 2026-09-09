import heroImg from "../assets/background-2.jpg";
import ribbonDark from "../assets/hero-ribbon-dark.svg";
import ribbonLight from "../assets/hero-ribbon-light.svg";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "../data";

interface HeroProps {
  visible: boolean;
  onNavigate: (section: string) => void;
}

export default function Hero({ visible, onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <img
          src={ribbonLight}
          alt=""
          className="absolute inset-0 w-full h-full object-cover dark:hidden"
        />
        <img
          src={ribbonDark}
          alt=""
          className="absolute inset-0 w-full h-full object-cover hidden dark:block"
        />
        <div className="absolute inset-0 bg-white/50 dark:bg-black/45" />
      </div>

      <div
        className={`relative max-w-3xl mx-auto flex flex-col items-center text-center gap-6 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-brand blur-2xl opacity-30 animate-pulse" />
          <img
            src={heroImg}
            alt="Elijah Usih"
            className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover object-[50%_18%] border-4 border-white dark:border-gray-900 shadow-2xl"
          />
        </div>

        <div className="inline-block px-4 py-2 bg-brand/10 text-brand dark:bg-brand/20 rounded-full text-sm font-medium">
          Software Engineer
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="text-brand">
            Elijah
          </span>
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
          I build scalable, high-performance backend systems with Go, Java,
          Python, and TypeScript. APIs, event-driven services, and distributed
          workloads engineered for reliability and performance.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => onNavigate("projects")}
            className="group px-8 py-4 bg-brand hover:brightness-90 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
          >
            <span>View My Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="px-8 py-4 border-2 border-brand text-brand rounded-lg font-semibold hover:bg-brand/10 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex space-x-4 pt-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white rounded-full hover:bg-brand/10 dark:hover:bg-brand/20 hover:text-brand transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white rounded-full hover:bg-brand/10 dark:hover:bg-brand/20 hover:text-brand transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white rounded-full hover:bg-brand/10 dark:hover:bg-brand/20 hover:text-brand transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
