import { Globe } from "lucide-react";
import PortfolioThumb from "../assets/projects/portfolio.png";
import FerramentasAppThumb from "../assets/projects/ferramentas-app.png";
import AtmosThumb from "../assets/projects/atmos.png";
import GitHubLight from "../assets/github-light.svg";

const projects = [
  {
    imgUrl: FerramentasAppThumb,
    name: "Ferramentas App",
    descrition:
      "This project is a toolbox with different's types of web tools to facilitate the day to day work.",
    tags: ["React", "TypeScript", "TailWindCSS", "NextJS", "GitHub", "Vercel"],
    siteUrl: "https://ferramentas-app.vercel.app/",
    githubUrl: "https://github.com/Mikael-Josias/ferramentas-app",
  },
  {
    imgUrl: AtmosThumb,
    name: "Atmos: Weather Forecast",
    descrition:
      "An app to search the Weather Forecast in any city in the World!",
    tags: ["React", "TypeScript", "TailWindCSS", "NextJS", "GitHub", "Vercel"],
    siteUrl: "https://atmos-pi.vercel.app/",
    githubUrl: "https://github.com/Mikael-Josias/atmos",
  },
  {
    imgUrl: PortfolioThumb,
    name: "Portfolio",
    descrition:
      "this website seeks showcase my works, skills and experience as a developer.",
    tags: ["React", "TypeScript", "TailWindCSS", "ViteJS", "GitHub"],
    siteUrl: "https://mikael-josias.github.io/mikael-josias/",
    githubUrl: "https://github.com/Mikael-Josias/Mikael-Josias",
  },
];

function Projects() {
  return (
    <>
      <section className="w-full md:w-[720px] py-12 px-6 md:px-0 flex flex-col gap-8">
        <h2 className="font-amaranth text-3xl text-cement-600 dark:text-white group">
          Projects{" "}
          <span className="relative">
            <div className="absolute opacity-0 group-hover:opacity-100 group-hover:animate-ping duration-100 size-6 bg-yellow-500/60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            🌟
          </span>
        </h2>
        <div className="flex flex-wrap gap-6 md:gap-10 w-full">
          {projects.map((p, i) => (
            <div
              key={i}
              className="w-full md:w-[calc(50%-20px)] flex flex-col gap-4 border-b-1 border-b-black/20 dark:border-b-white/20 last:border-none md:nth-last-[2n]:border-none pb-6 md:pb-10"
            >
              <img
                src={p.imgUrl}
                alt={p.name}
                className="object-left-top object-cover aspect-video rounded-lg shadow"
              />
              <div className="flex flex-col gap-1">
                <span className="text-cement-600 dark:text-white text-xl font-medium">
                  {p.name}
                </span>
                <span className="text-cement-600 dark:text-white/80 text-sm font-normal">
                  {p.descrition}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {p.tags.map((t, i) => (
                  <span
                    key={i}
                    className="py-1 px-2 bg-moss-500 rounded-md text-white text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                {p.siteUrl !== "" && (
                  <a
                    href={p.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-1 px-2 rounded-md bg-white text-xs"
                  >
                    <Globe size={14} color="black" />
                    website
                  </a>
                )}
                {p.githubUrl !== "" && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-1 px-2 rounded-md bg-black text-white text-xs"
                  >
                    <img
                      src={GitHubLight}
                      alt="white github logo"
                      className="size-3.5"
                    />
                    repo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
