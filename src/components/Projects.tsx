import { Globe } from "lucide-react";
import PortfolioThumb from "../assets/projects/portfolio.png";
import FerramentasAppThumb from "../assets/projects/ferramentas-app.png";
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
    imgUrl: PortfolioThumb,
    name: "Portfolio",
    descrition:
      "this website seeks showcase my works, skills and experience as a developer.",
    tags: ["React", "TypeScript", "TailWindCSS", "ViteJS", "GitHub"],
    siteUrl: "https://mikael-josias.github.io/Mikael-Josias/",
    githubUrl: "https://github.com/Mikael-Josias/Mikael-Josias",
  },
];

function Projects() {
  return (
    <section className="flex flex-col gap-6 md:gap-10 w-full md:max-w-3xl px-5 md:px-0 pt-5 pb-10">
      <h2 className="font-amaranth text-2xl md:text-3xl text-cement-600 dark:text-white ">
        Projects 🌟
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-10">
        {projects?.map((p, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-2 w-full md:w-[calc(50%-20px)] pb-5 border-b-[1px] border-b-black/25 dark:border-b-white/25 nth-last-[-n+1]:border-0 md:nth-last-[-n+2]:border-0"
            >
              <img
                src={p.imgUrl}
                alt={p.name + " project thumbnail"}
                className="shadow-2xl rounded-md"
              />
              <span className="text-base md:text-lg font-medium text-cement-600 dark:text-white">
                {p.name}
              </span>
              <span className="text-sm text-cement-400 dark:text-white font-light">
                {p.descrition}
              </span>
              <div className="flex gap-1.5 mb-3 flex-wrap">
                {p.tags?.map((t, i) => {
                  return (
                    <span
                      key={i}
                      className="p-1.5 text-white bg-moss-500 text-xs font-normal rounded-md"
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
              {p.siteUrl !== "" && p.githubUrl !== "" ? (
                <div className="flex gap-1.5 w-full">
                  {p.siteUrl !== "" ? (
                    <a
                      href={p.siteUrl}
                      target="_blank"
                      className="flex items-center justify-center gap-1.5 p-1.5 rounded-md bg-white text-black text-xs font-normal"
                    >
                      <Globe size={14} color="black" />
                      website
                    </a>
                  ) : (
                    <></>
                  )}
                  {p.githubUrl !== "" ? (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      className="flex items-center justify-center gap-1.5 p-1.5 rounded-md bg-black text-white text-xs font-normal"
                    >
                      <img
                        src={GitHubLight}
                        alt="white github logo"
                        className="size-3.5"
                      />
                      repo
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
