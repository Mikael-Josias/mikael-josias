import SocialBar from "./SocialBar"

function Footer() {
  return (
    <footer className="w-full bg-wheat-600 dark:bg-black/25 md:bg-transparent dark:md:bg-transparent py-10 px-5 md:px-0 flex flex-col gap-3 md:gap-6 items-center justify-center md:border-t-[1px] md:border-t-black/25 dark:md:border-t-white/25">
      <span className="text-sm md:text-base text-cement-500 dark:text-white font-light">Thank you for stopping by! 😊</span>
      <SocialBar />
    </footer>
  )
}

export default Footer