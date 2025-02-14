import { FileDown } from "lucide-react"
import CV from "../assets/files/mikael_cv.pdf"
import GitHub from "../assets/github.svg"
import LinkedIn from "../assets/linkedin.svg"
import Mail from "../assets/mail.svg"
import GitHubLight from "../assets/github-light.svg"
import LinkedInLight from "../assets/linkedin-light.svg"
import MailLight from "../assets/mail-light.svg"

function SocialBar() {
  return (
    <div className="flex gap-3 items-center">
      <a href={CV} download={"Mikael_Josias_CV"} className="flex gap-1.5 items-center bg-moss-500 text-white font-medium text-sm p-2.5 rounded-md w-min text-nowrap">
        Download CV
        <FileDown size={16} color="white" />
      </a>
      <a href="https://github.com/Mikael-Josias" target="_blank">
        <img src={GitHub} alt="visit github profile" className="w-5 dark:hidden" />
        <img src={GitHubLight} alt="visit github profile" className="w-5 hidden dark:block" />
      </a>
      <a href="https://www.linkedin.com/in/mikael-josias/" target="_blank">
        <img src={LinkedIn} alt="visit linkedin profile" className="w-5 dark:hidden" />
        <img src={LinkedInLight} alt="visit linkedin profile" className="w-5 hidden dark:block" />
      </a>
      <a href="mailto:mikaeljosias@protonmail.com">
        <img src={Mail} alt="send me a email" className="w-5 dark:hidden" />
        <img src={MailLight} alt="send me a email" className="w-5 hidden dark:block text-white" />
      </a>
    </div>
  )
}

export default SocialBar