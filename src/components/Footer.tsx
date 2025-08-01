import capitalize from "lodash/capitalize";
import { LucideGithub, LucideLinkedin, LucideTwitter } from "lucide-react";

export function Footer() {
  const socialLinks = {
    github: "https://github.com/kwconrad",
    linkedin: "https://linkedin.com/in/kylewconrad",
    twitter: "https://x.com/history_of_kyle",
  };

  const socialIconMap: Record<string, JSX.Element> = {
    github: <LucideGithub />,
    linkedin: <LucideLinkedin />,
    twitter: <LucideTwitter />,
  };

  return (
    <footer className="bg-black border-t border-white/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="col-span-6">
            <div className="text-sm uppercase tracking-wider text-white/60">
              © 2025 Kyle Conrad
            </div>
          </div>
          <div className="col-span-6">
            <div className="grid grid-cols-3 gap-4 text-right">
              {Object.entries(socialLinks).map(([label, value]) => (
                <a
                  key={label}
                  href={value}
                  className="text-sm flex gap-2 items-center text-white/60 hover:text-white transition-colors uppercase tracking-wide"
                >
                  <div className="block">{socialIconMap[label]}</div>
                  <span className="hidden md:block">{capitalize(label)}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
