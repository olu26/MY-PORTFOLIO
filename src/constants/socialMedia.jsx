import { MdOutlineWhatsapp } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
const socialMediaLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/journey_with_olu/",
    icon: <FaInstagram size={24}/>,
  },
  {
    name: "whatsapp",
    url: "https://wa.me/+22959929187",
    icon: <MdOutlineWhatsapp size={24} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/oluchukwu-ordiah-347861332/",
    icon: <CiLinkedin size={24} />,
  },
  {
    name: "GitHub",
    url: "https://github.com/olu26",
    icon: <IoLogoGithub size={24} />,
  },
];
export default socialMediaLinks;
