const skills = [
  {
    category: "Engineering",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "WebGL"],
  },
  {
    category: "Design",
    items: ["Design Systems", "Figma", "Rapid Prototyping", "User Testing"],
  },
  {
    category: "Strategy",
    items: [
      "Product Strategy",
      "A/B Testing",
      "Analytics",
      "Accessibility",
      "Systems Thinking",
    ],
  },
];

const experience = [
  {
    company: "Pario Health",
    role: "Senior React Engineer",
    period: "2025-Present",
    description:
      "Created user centered components and implemented design system standards",
  },
  {
    company: "Wise Systems",
    role: "Senior Frontend Engineer",
    period: "2022-2025",
    description:
      "Led frontend architecture and performance optimization for logistics platform",
  },
  {
    company: "Bonfire",
    role: "UX Engineer",
    period: "2022-2022",
    description:
      "Collaborated with design to develop user flows and wireframes for Web3 NFT gallery product",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-black border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              About
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="text-lg md:text-xl text-white leading-relaxed">
              Creative Design Engineer with 8 years background working across
              design and frontend engineering. I craft digital experiences that
              are both beautiful and impactful, with a focus on measurable
              business outcomes.
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Skills */}
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {skills.map((skill) => (
                <div key={skill.category}>
                  <div className="text-sm uppercase tracking-wider text-white/60 mb-4">
                    {skill.category}
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="text-white text-lg md:text-base"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="mt-16">
              <div className="text-sm uppercase tracking-wider text-white/60 mb-4">
                Philosophy
              </div>
              <div className="text-white leading-relaxed text-xl md:text-lg">
                I try to take a subtractive approach to design, removing
                friction points and enhancing usability. With a deep expertise
                in frontend engineering, I design with constraints in mind and
                treat limitations as creative tools.
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="col-span-12 md:col-span-4">
            <div className="text-sm uppercase tracking-wider text-white/60 mb-8">
              Experience
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-white/20 pl-6">
                  <div className="text-white font-medium">{exp.role}</div>
                  <div className="text-white/80 text-sm">{exp.company}</div>
                  <div className="text-white/60 text-sm mb-2">{exp.period}</div>
                  <div className="text-white/80 text-sm">{exp.description}</div>
                </div>
              ))}
            </div>

            {/* Status */}
            <div className="mt-12 p-6 border border-white/20">
              <div className="text-sm uppercase tracking-wider text-white/60 mb-2">
                Current Status
              </div>
              <div className="text-white mb-4">Available for new projects</div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
