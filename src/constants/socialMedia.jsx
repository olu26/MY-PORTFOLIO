import { MdOutlineWhatsapp } from "react-icons/md";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
const socialMediaLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/aRu6DZwh56w18RxR/",
    icon: <CiFacebook size={24} />,
  },
  {
    name: "whatsapp",
    url: "https://wa.me/+22959929187",
    icon: <MdOutlineWhatsapp size={24} />,
  },
  {
    name: "LinkedIn",
    url: "www.linkedin.com/in/oluchukwu-ordiah-347861332",
    icon: <CiLinkedin size={24} />,
  },
  {
    name: "GitHub",
    url: "https://github.com/AmineCoder30",
    icon: <IoLogoGithub size={24} />,
  },
];
export default socialMediaLinks;
