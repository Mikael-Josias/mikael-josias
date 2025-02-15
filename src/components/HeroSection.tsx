import Photo1 from "../assets/Photo1.png"
import SocialBar from "./SocialBar"

function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-start w-full md:max-w-3xl gap-3 md:gap-10 py-10 px-5 md:px-0">
      <div className="flex flex-col gap-3 md:gap-6">
        <h2 className="font-amaranth text-2xl md:text-5xl text-cement-600 dark:text-white ">Hello! 👋</h2>
        <span className="text-sm md:text-lg font-light text-cement-500 dark:text-white">
          <p className="mb-1.5">
            I’m a 23-year-old software developer from Brazil 🇧🇷.
          </p>
          <p>
            I like playing video games, take care of my plants and develop awesome applications.
          </p>
        </span>
        <div>
          <SocialBar />
        </div>
      </div>
      <img src={Photo1} alt="Mikael Josias photo" className="rounded-3xl max-h-96 md:max-h-60 w-full md:max-w-[300px] md:h-full object-cover select-none pointer-events-none" />
    </section>
  )
}

export default HeroSection