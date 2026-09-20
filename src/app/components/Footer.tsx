import { personalData } from "@/../utils/Data/PersonalData";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NAV_ITEMS } from "./nav-items";

const socials = [
  { href: personalData.github, Icon: FaGithub, label: "GitHub" },
  { href: personalData.linkedIn, Icon: FaLinkedin, label: "LinkedIn" },
  { href: personalData.twitter, Icon: FaTwitter, label: "Twitter" },
  { href: personalData.Instagram, Icon: FaInstagram, label: "Instagram" },
].filter((social) => Boolean(social.href));

const Footer = () => (
  <footer className="bg-[#030014] border-t border-white/5 text-gray-200">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
        <div className="flex flex-col gap-6">
          <Link href="/" className="w-fit">
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent">
              Harsh<span className="text-red-500"> Dubey</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Professional Full Stack Developer dedicated to crafting immersive,
            high-performance digital experiences with cutting-edge technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-50">
            Navigation
          </h3>
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  href={`/#${item.to}`}
                  className="text-gray-400 hover:text-red-500 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-50">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalData.email}`}
                className="text-gray-400 hover:text-red-500 transition-colors font-medium"
              >
                {personalData.email}
              </a>
              <a
                href={`tel:${personalData.phone}`}
                className="text-gray-400 hover:text-red-500 transition-colors font-medium"
              >
                {personalData.phone}
              </a>
            </div>
          </div>

          {socials.length > 0 && (
            <div className="flex space-x-4">
              {socials.map(({ href, Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg bg-white/5 hover:bg-red-500/10 hover:text-red-500 transition-colors border border-white/5"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Harsh Dubey. All rights reserved.
        </p>
        <p className="flex items-center gap-2">
          Made with <span className="text-red-600">❤️</span> by Harsh
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
