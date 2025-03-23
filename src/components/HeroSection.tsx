import Photo1 from "../assets/Photo1.png";
import SocialBar from "./SocialBar";

function HeroSection() {
  return (
    <section className="w-full md:w-[720px] py-12 px-6 md:px-0 flex flex-col-reverse md:flex-row gap-4">
      <div className="flex flex-col gap-4 md:w-full transition-all">
        <h2 className="font-amaranth text-4xl font-bold text-cement-600 dark:text-white">
          Hello!{" "}
          <span className="hover:animate-waving origin-[70%_70%] inline-block">
            👋
          </span>
        </h2>
        <span className="font-ubuntu font-light text-base text-cement-500 dark:text-white">
          <p>I’m a 23-year-old software developer from Brazil 🇧🇷.</p>
          <p>
            I like playing video games, take care of my plants and develop
            awesome applications.
          </p>
        </span>
        <SocialBar />
      </div>
      <img
        src={Photo1}
        className="h-32 md:h-52 object-center object-cover rounded-2xl transition-all"
      />
    </section>
  );
}

export default HeroSection;
