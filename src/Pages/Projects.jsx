import Navbar from "../Components/Navbar";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "PureDrop – Water Delivery App",
      duration: "June – Aug 2025",
      tech: ["React", "Node.js", "Express", "MongoDB", "Leaflet.js"],
      github: "https://github.com/Sathwik-45/Aqua",
      live: "", // ← you can add later
      points: [
        "Built a web platform to order water from nearby plants within 10km, serving 50+ test users.",
        "Integrated Leaflet.js and OpenStreetMap for dynamic geolocation filtering.",
        "Implemented secure APIs and real-time order handling.",
      ],
    },
    {
      title: "Digital Lab Management System",
      duration: "May – Jun 2025",
      tech: ["TypeScript", "Next.js", "Prisma", "Tailwind"],
      github: "https://github.com/CharanSala/HamaraLabs-self-hosted",
      live: "", // ← you can add later
      points: [
        "Developed a digital lab management platform used in 10+ tinkering labs.",
        "Enabled activity tracking, role-based access, and form submissions.",
        "Designed a responsive and clean UI using Tailwind CSS.",
      ],
    },
    {
      title: "CodeMoji – Gamified Coding",
      duration: "Feb – Mar 2025",
      tech: ["React", "Node.js", "Express", "MongoDB", "Compilex"],
      github: "https://github.com/CharanSala/Codemoji",
      live: "https://codemoji-challenge.vercel.app/", // ← YOUR URL ADDED HERE
      points: [
        "Built a full-stack gamified coding platform used by 50+ students.",
        "Integrated real-time code execution using Compilex.",
        "Implemented interactive challenges, scoring, and leaderboard.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f9ff] relative overflow-hidden">
      <Navbar />

      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none"></div>

      <section className="px-6 md:px-10 py-32 max-w-6xl mx-auto relative z-10">
        <div className="mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            Projects
          </h2>
          <div className="h-1.5 w-16 bg-[#3b3df2] mt-2 rounded-full"></div>
          <p className="text-[#64748b] mt-6 text-lg max-w-2xl">
            A selection of my recent work, ranging from full-stack applications
            to specialized tools for education and logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-100 transition-all transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a]">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-[#3b3df2] mt-1">
                    {project.duration}
                  </p>
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-gray-50 rounded-lg text-gray-600 hover:text-[#3b3df2] hover:bg-blue-50 transition-all"
                    title="View Source Code"
                  >
                    <FaGithub size={20} />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-gray-50 rounded-lg text-gray-600 hover:text-[#3b3df2] hover:bg-blue-50 transition-all"
                      title="Live Project"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold bg-[#f1f3ff] text-[#3b3df2] px-3 py-1.5 rounded-lg uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-3">
                {project.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#64748b] text-sm leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3b3df2] shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0f172a] hover:text-[#3b3df2] transition-colors"
                >
                  View Case Study <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
