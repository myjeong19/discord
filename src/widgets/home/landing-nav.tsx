import { ChevronDownIcon } from "lucide-react";
import { Link } from "react-router";
import { KakaoLoginButton } from "~/features/auth/login/ui";
import { NAVIGATION_LINKS } from "~shared/constants";
import { mergeClasses } from "~shared/utils";

export default function LandingNav() {
  return (
    <nav className="flex justify-center items-end w-full h-20 px-10">
      <img
        src="/logo.svg"
        alt="discord logo"
        className="fixed top-10 left-9  invert-0 w-full h-full max-w-[146px] max-h-[38px]"
        width={146}
        height={38}
      />

      <ul className="flex gap-0.5">
        {NAVIGATION_LINKS.map((link) => (
          <li
            key={link.href}
            className={mergeClasses(
              "group relative flex items-center justify-center rounded-2xl h-10 py-2.5 px-4 hover:bg-discord hover:text-white",
              link.type === "popover" && "hover:bg-discord hover:text-white",
            )}
          >
            <Link to={link.href} className="flex items-center gap-1 ">
              {link.label}
              {link.type === "popover" && (
                <ChevronDownIcon className="w-4 h-4 group-hover:rotate-180 transition-all duration-300" />
              )}
            </Link>

            {link.type === "popover" && (
              <div
                className={mergeClasses(
                  "group group-hover:flex hidden text-white absolute top-11 -left-1/2 -translate-x-1/4 p-4 rounded-6xl w-fit bg-discord ",
                  link.popoverAlign === "row" ? "flex-row" : "flex-col",
                )}
              >
                {link.popoverSections?.map((section) => (
                  <div
                    key={section.title}
                    className="text-nowrap py-4 px-8 first:border-r first:border-zinc-400/20"
                  >
                    <strong className="block text-zinc-300 font-light p-1">
                      {section.title}
                    </strong>
                    <ul>
                      {section.links.map((link) => (
                        <li className="p-1" key={link.href}>
                          {link.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      <KakaoLoginButton />
    </nav>
  );
}
