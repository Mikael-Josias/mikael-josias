import { useState } from "react";
import FoxLogo from "../assets/logos/fox-logo.png";
import CITLogo from "../assets/logos/cit-logo.png";
import UnivespLogo from "../assets/logos/univesp-logo.png";
import DrivenLogo from "../assets/logos/driven-logo.png";

type TABS_NAMES = "experience" | "education";

const experience = [
  {
    type: "experience",
    imgUrl: FoxLogo,
    joinedAt: "july 2023",
    terminatedAt: "july 2024",
    enterpriseName: "Fox Marketing Digital",
    role: "front-end developer",
    description: [
      "Participate in meetings with clients and understand the needs of the project.",
      "Develop intuitive and modern websites.",
      "Host, configure and assist in the maintenance of sites.",
      "Create and present prototypes.",
    ],
  },
  {
    type: "experience",
    imgUrl: CITLogo,
    joinedAt: "january 2019",
    terminatedAt: "december 2019",
    enterpriseName: "CIT de Barueri",
    role: "intern",
    description: [
      "Assist in the development of an application for inventory management for the Barueri City warehouse",
    ],
  },
  {
    type: "education",
    imgUrl: UnivespLogo,
    joinedAt: "july 2024",
    terminatedAt: "today",
    enterpriseName: "Univesp",
    role: "computer engineering",
    description: ["Currently in the 2nd ~ 3rd semester."],
  },
  {
    type: "education",
    imgUrl: DrivenLogo,
    joinedAt: "september 2022",
    terminatedAt: "july 2023",
    enterpriseName: "Driven Education",
    role: "full-stack developer",
    description: [
      "Intensive training of +1,200 hours focused on practical projects.",
      "+25 projects using: HTML, CSS, Javascript, React, Node.js, MongoDB, SQL, Prisma, Typescript, Docker, AWS.",
      "Development of behavioral competencies and professional skills.",
    ],
  },
];

function TabsContainer() {
  const [selectedTab, setSelectedTab] = useState<TABS_NAMES>("education");

  return (
    <>
      <section className="w-full md:w-[720px] px-6 md:px-0 flex flex-col gap-4 relative">
        <div className="w-min flex flex-nowrap border-1 border-black/20 dark:border-white/20 rounded-full overflow-hidden relative text-cement-600 dark:text-white font-medium">
          <div
            className="py-2 px-8 flex items-center justify-center rounded-full cursor-pointer z-10"
            onClick={() => setSelectedTab("experience")}
          >
            experience
          </div>
          <div
            className="py-2 px-8 flex items-center justify-center rounded-full cursor-pointer z-10"
            onClick={() => setSelectedTab("education")}
          >
            education
          </div>
          <div
            className={`${selectedTab === "experience" ? "-translate-x-1/2" : "translate-x-1/2"} absolute w-full h-full bg-black/20 dark:bg-white/20 rounded-full duration-500 transition-all`}
          ></div>
        </div>
        <div className="flex flex-col">
          {experience.map((e, i) => (
            <div
              key={i}
              className={`${selectedTab !== e.type && "hidden"} w-full p-6 flex gap-4 border-b-1 border-b-black/20 dark:border-b-white/20`}
            >
              <img
                src={e.imgUrl}
                alt={e.enterpriseName}
                className="size-14 md:size-16 rounded-lg pointer-events-none select-none"
              />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <span className="text-cement-400 dark:text-white/50 text-xs font-medium">
                    {e.joinedAt} - {e.terminatedAt}
                  </span>
                  <span className="text-cement-600 dark:text-white text-lg font-bold">
                    {e.enterpriseName}
                  </span>
                  <span className="text-cement-400 dark:text-white/50 text-xs font-medium capitalize">
                    {e.role}
                  </span>
                </div>
                <ul className="pl-6 text-cement-400 dark:text-white/80 text-sm font-normal list-disc">
                  {e.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default TabsContainer;
