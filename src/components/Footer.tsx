import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "../data";

export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-gray-500 dark:text-gray-400">
        <div className="flex space-x-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="hover:text-brand transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Elijah Usih.</p>
      </div>
    </footer>
  );
}
