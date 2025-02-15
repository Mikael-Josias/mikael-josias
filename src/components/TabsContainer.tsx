import { useState } from "react"
import FoxLogo from "../assets/logos/fox-logo.png"
import CITLogo from "../assets/logos/cit-logo.png"
import UnivespLogo from "../assets/logos/univesp-logo.png"
import DrivenLogo from "../assets/logos/driven-logo.png"

type TABS_NAMES = "experience" | "education"

const experiences = [
  {
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
    ]
  },
  {
    imgUrl: CITLogo,
    joinedAt: "january 2019",
    terminatedAt: "december 2019",
    enterpriseName: "CIT de Barueri",
    role: "intern",
    description: [
      "Assist in the development of an application for inventory management for the Barueri City warehouse"
    ]
  }
]
const educations = [
  {
    imgUrl: UnivespLogo,
    joinedAt: "july 2024",
    terminatedAt: "today",
    enterpriseName: "Univesp",
    role: "computer engineering",
    description: [
      "Currently in the 2nd ~ 3rd semester."
    ]
  },
  {
    imgUrl: DrivenLogo,
    joinedAt: "september 2022",
    terminatedAt: "july 2023",
    enterpriseName: "Driven Education",
    role: "full-stack developer",
    description: [
      "Intensive training of +1,200 hours focused on practical projects.",
      "+25 projects using: HTML, CSS, Javascript, React, Node.js, MongoDB, SQL, Prisma, Typescript, Docker, AWS.",
      "Development of behavioral competencies and professional skills."
    ]
  },
]

function TabsContainer() {
  const [selectedTab, setSelectedTab] = useState<TABS_NAMES>("education")

  return (
    <section className="flex flex-col gap-6 md:gap-8 px-5 md:px-0 py-5 md:py-10 w-full md:w-3xl" >
      {/* TABS OPTIONS */}
      <div className="flex border-[1px] border-black/25 dark:border-white/25 rounded-md w-full overflow-hidden">
        <label htmlFor="experience" className="flex items-center justify-center w-full py-3 text-cement-600 dark:text-white relative cursor-pointer font-medium text-base hover:bg-black/5 dark:hover:bg-white/2">
          <input type="radio" id="experience" name="tab_option" className="invisible" value={"experience"} onChange={(e) => setSelectedTab(e.target.value as TABS_NAMES)} checked={selectedTab === "experience"} />
          <span className="z-10">
            experience
          </span>
          {selectedTab === "experience" ?
            <div className="h-full w-full absolute bg-black/25 dark:bg-white/25 z-0"></div> :
            <></>
          }
        </label>
        <label htmlFor="education" className="flex items-center justify-center w-full py-3 text-cement-600 dark:text-white relative cursor-pointer font-medium text-base hover:bg-black/5 dark:hover:bg-white/2">
          <input type="radio" id="education" name="tab_option" className="invisible" value={"education"} onChange={(e) => setSelectedTab(e.target.value as TABS_NAMES)} checked={selectedTab === "education"} />
          <span className="z-10">
            education
          </span>
          {selectedTab === "education" ?
            <div className="h-full w-full absolute bg-black/25 dark:bg-white/25 z-0"></div> :
            <></>
          }
        </label>
      </div>
      <div className="flex flex-col gap-6 w-full">
        {selectedTab === "experience" ?
          <>
            {experiences.map((e, i) => {
              return (
                <div key={i} className="flex gap-3 pb-6 border-b-[1px] border-b-black/25 dark:border-b-white/25">
                  <img src={e.imgUrl} alt={e.enterpriseName + " logo"} className="h-16 w-16 rounded-md select-none pointer-events-none" />
                  <div className="flex flex-col">
                    <span className="text-cement-500 dark:text-white/50 text-xs font-medium">
                      {e.joinedAt + " - " + e.terminatedAt}
                    </span>
                    <span className="text-cement-600 dark:text-white font-bold">
                      {e.enterpriseName}
                    </span>
                    <span className="text-cement-500 dark:text-white/50 text-xs font-medium capitalize">
                      {e.role}
                    </span>
                    <ul className="list-disc pl-6 pt-1.5">
                      {e.description.map((d, i) => <li key={i} className="text-cement-400 dark:text-white text-sm font-light">{d}</li>)}
                    </ul>
                  </div>
                </div>
              )
            })}
          </> :
          <>
            {educations.map((e, i) => {
              return (
                <div key={i} className="flex gap-3 pb-6 border-b-[1px] border-b-black/25 dark:border-b-white/25">
                  <img src={e.imgUrl} alt={e.enterpriseName + " logo"} className="h-16 w-16 rounded-md select-none pointer-events-none" />
                  <div className="flex flex-col">
                    <span className="text-cement-400 dark:text-white/50 text-xs font-medium">
                      {e.joinedAt + " - " + e.terminatedAt}
                    </span>
                    <span className="text-cement-600 dark:text-white font-bold">
                      {e.enterpriseName}
                    </span>
                    <span className="text-cement-400 dark:text-white/50 text-xs font-medium capitalize">
                      {e.role}
                    </span>
                    <ul className="list-disc pl-6 pt-1.5">
                      {e.description.map((d, i) => <li key={i} className="text-cement-400 dark:text-white text-sm font-light">{d}</li>)}
                    </ul>
                  </div>
                </div>
              )
            })}
          </>
        }
      </div>
    </section>
  )
}

export default TabsContainer