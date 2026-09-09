import { Mail, MapPin, Download } from "lucide-react";
import { GithubIcon } from "./icons";
import { EMAIL, GITHUB_URL } from "../data";

interface ContactProps {
  visible: boolean;
}

export default function Contact({ visible }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-4">
      <div
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have a project in mind? I'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-brand/10 dark:bg-brand/20 rounded-lg">
                <Mail className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-brand"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-brand/10 dark:bg-brand/20 rounded-lg">
                <GithubIcon className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">GitHub</h3>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-brand"
                >
                  github.com/kenee101
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-brand/10 dark:bg-brand/20 rounded-lg">
                <MapPin className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Lagos, Nigeria &middot; Open to remote work
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                title="Download Resume"
                aria-label="Download Resume"
                href="/Elijah_Usih_Updated_CV.pdf"
                download="Elijah_Usih_Resume.pdf"
                className="w-full px-8 py-4 bg-brand hover:brightness-90 cursor-pointer text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          <div className="space-y-6 md:space-y-0 md:flex md:items-center md:justify-center">
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Feel free to reach out to me directly at:
              </p>
              <a
                href={`mailto:${EMAIL}?subject=Job%20Inquiry&body=Hello%20Elijah,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch%20about...`}
                className="inline-block px-8 py-4 bg-brand hover:brightness-90 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
              >
                Send me an Email
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Opens in your default email service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
