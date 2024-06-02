import { NavLink } from "@remix-run/react";
import GoBackButton from "../misc/go-back-button";
import { cn } from "~/lib/utils";

const NAV_ITEMS = [
  { title: "Our Why" },
  { title: "Our Mission" },
  { title: "Our Values" },
  { title: "Our Commitments" },
  { title: "Join Us" },
];

function OurDefinitionHeader() {
  return (
    <header className="flex justify-between">
      <GoBackButton />
      <nav>
        <ul className="flex h-full">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.title}
              className="h-full flex items-center justify-center text-sm"
            >
              <NavLink
                to={"/#"}
                className={({ isActive }) =>
                  cn({ "bg-darkGray": isActive }, "px-7")
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div></div>
    </header>
  );
}

export default OurDefinitionHeader;
