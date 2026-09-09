import { ServerCog, Database, Brain } from "lucide-react";
import type { ReactNode } from "react";
import { pillars } from "../data";
import { TECH_ICONS } from "./tech-icons";

interface ExpertiseProps {
  visible: boolean;
}

const PILLAR_ICONS: ReactNode[] = [
  <ServerCog className="w-9 h-9" />,
  <Database className="w-9 h-9" />,
  <Brain className="w-9 h-9" />,
];

export default function Expertise({ visible }: ExpertiseProps) {
  return (
    <section id="expertise" className="py-20 px-4 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Backend-focused engineering with a strong emphasis on
            reliability, performance, security, and maintainability
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`text-left transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-brand mb-4">
                {PILLAR_ICONS[index]}
              </div>
              <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                {pillar.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((tag) => {
                  const Icon = TECH_ICONS[tag];
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-full text-xs font-medium"
                    >
                      {Icon && <Icon className="w-3.5 h-3.5" />}
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
