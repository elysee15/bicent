import HomeHeader from "./header";
import Footer from "./footer";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import HeroText from "./hero-text";
import { cn } from "~/lib/utils";
import HomeAccordionContent from "./accordion-content";
import { useSearchParams } from "@remix-run/react";
import { PATHS } from "~/lib/paths";

const ACCORDION_ITEMS = [
  {
    label: "Our capabilities",
    content: (
      <HomeAccordionContent
        exploreHref={PATHS.ourCapabilities}
        content="Bicents is an Internet technology company that develops various
    solutions and provides professional services."
      />
    ),
  },
  {
    label: "Our definition",
    content: (
      <HomeAccordionContent
        exploreHref={PATHS.ourDefinition}
        content="We're convinced that human ingenuity, together with technology, has the potential to create great things."
      />
    ),
  },
  {
    label: "Our partners",
    content: (
      <HomeAccordionContent
        exploreHref={PATHS.ourPartners}
        content="Our partners are the primary collaborators in crafting our solutions and programs."
      />
    ),
  },
  {
    label: "What's next ?",
    content: (
      <HomeAccordionContent
        exploreHref={PATHS.whatsNews}
        content="We are building the Century Technologies, for us, each of our solutions represents a revolution and a call for change."
      />
    ),
  },
  {
    label: "Bicent accelerators",
    content: (
      <HomeAccordionContent
        exploreHref={PATHS.accelerators}
        content="Together, let's shape the future of entrepreneurship."
      />
    ),
  },
];

function Home() {
  const [, setSearchParams] = useSearchParams();

  const handleAccordionItemClick = (label: string) => {
    const params = new URLSearchParams();

    params.set("item", label.toLowerCase());
    setSearchParams(params);
  };

  return (
    <div className="min-h-dvh bg-background flex flex-col">
      <HomeHeader />
      <div className="container grow flex w-full pt-8">
        <div className="flex w-full">
          <section className="lg:w-3/5 flex items-center">
            <HeroText />
          </section>
          <section className="lg:w-full lg:max-w-[400px] font-sans text-lg flex items-start pt-14 justify-end md:ml-auto">
            <Accordion
              type="single"
              collapsible
              className="w-full bg-[#1A1A1A]"
            >
              {ACCORDION_ITEMS.map((item, idx) => (
                <AccordionItem
                  value={`${item.label}-${idx}`}
                  key={item.label}
                  onClick={() => handleAccordionItemClick(item.label)}
                  className={cn(
                    "px-6 data-[state=open]:bg-[#BBC3C3] transition-[background-color] duration-200 data-[state=open]:text-[#1A1A1A] py-3 border-none relative after:absolute after:content-['\0a0'] after:inline-block after:h-[1px] after:bottom-0 after:w-[88%] after:mx-auto after:bg-[#BBC3C31A]/10 after:-translate-x-1/2 after:left-1/2",
                    {
                      "after:h-0": idx === ACCORDION_ITEMS.length - 1,
                    }
                  )}
                >
                  <AccordionTrigger className="!no-underline">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
