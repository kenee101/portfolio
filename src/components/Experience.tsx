import { Briefcase, GraduationCap } from "lucide-react";
import { timeline } from "../data";

interface ExperienceProps {
  visible: boolean;
}

export default function Experience({ visible }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Where I've put these skills to work
          </p>
        </div>

        <div className="relative">
          {/* Timeline line: left-aligned on mobile, centered on desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((entry, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={entry.title}
                  className={`relative md:flex md:items-start md:gap-8 transition-all duration-500 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <span className="absolute left-4 md:left-1/2 top-0 flex items-center justify-center w-9 h-9 rounded-full bg-brand text-white ring-4 ring-white dark:ring-black -translate-x-1/2 z-10">
                    {entry.kind === "work" ? (
                      <Briefcase className="w-4 h-4" />
                    ) : (
                      <GraduationCap className="w-4 h-4" />
                    )}
                  </span>

                  <div className="pl-12 md:pl-0 md:w-1/2">
                    <div
                      className={`p-6 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl ${
                        isLeft ? "md:mr-2" : "md:ml-2"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                        <h3 className="text-xl font-bold">{entry.title}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {entry.period}
                        </span>
                      </div>
                      <p className="text-brand font-medium mb-3">
                        {entry.org}
                      </p>
                      <ul className="space-y-2">
                        {entry.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="text-gray-600 dark:text-gray-300 leading-relaxed list-disc ml-4 marker:text-brand"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
