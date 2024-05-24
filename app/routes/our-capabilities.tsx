import { Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import PageLayout from "~/components/layout/page-layout";
import { Button } from "~/components/ui/button";
import { slugify } from "~/lib/slugify";

const DATA = [
  {
    title: "Services",
    items: ["User experience research", "Innovation on demand", "Marketing"],
  },
  {
    title: "Industries",
    items: [
      "Health",
      "Education",
      "Public service",
      "Transport",
      "Communication & Media",
      "Commerce",
    ],
  },
  {
    title: "Advisoring",
    items: ["Startups", "Gouv", "Business"],
  },
];

function OurCapabilitiesPage() {
  return (
    <PageLayout>
      <h1 className="mb-10 md:mb-14">Our capabilities</h1>
      <div>
        <ul className="flex flex-col md:flex-row gap-10 md:gap-20">
          {DATA.map((section, idx) => (
            <ul className="space-y-[30px]" key={section.title + "__" + idx}>
              <h2 className="text-2xl text-[#BBC3C3]">{section.title}</h2>
              <ul className="flex flex-col gap-4">
                {section.items.map((item, idx) => (
                  <li className="text-sm" key={`${item}__${idx}`}>
                    <Link to={slugify(item)}>
                      <Button className="bg-darkGray text-white hover:bg-purple relative after:content-[''] after:absolute after:w-full after:h-full after:bg-darkGray after:transition-all after:hover:translate-x-5 after:duration-300 after:hover:bg-purple transition-all duration-300 group">
                        <span className="z-[2] flex items-center relative">
                          <span className="block">{item}</span>
                          <ChevronRight className="w-4 h-4 ml-1 block opacity-0 absolute -right-5 transition-opacity duration-200 group-hover:opacity-100" />
                        </span>
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </ul>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}

export default OurCapabilitiesPage;
