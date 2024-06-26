import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import type { MenuItem } from "~/types";

const MenuItems: MenuItem[] = [
  {
    href: "/contact-us",
    label: "Contact Us",
  },
  {
    href: "/blog",
    label: "Blog",
    icon: <ArrowUpRight className="w-4 h-4 text-white" />,
  },
  {
    href: "/join-us",
    label: "Join Us",
  },
  {
    href: "/privacy",
    label: "Privacy",
  },
  {
    href: "/legal",
    label: "Legal",
  },
];

function Footer() {
  return (
    <footer className="">
      <ul className="flex justify-center flex-wrap md:flex-nowrap items-center gap-5 py-4 md:gap-20 text-sm">
        {MenuItems.map((item) => (
          <li key={item.label} className="text-[#BBC3C3]">
            <Link to={item.href} className="flex items-center gap-1">
              {item.label}
              <span>{item?.icon && item.icon}</span>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
