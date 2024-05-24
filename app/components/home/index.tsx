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

const ACCORDION_ITEMS = [
  {
    label: "Our capabilities",
  },
  {
    label: "Our definition",
  },
  {
    label: "Our partners",
  },
  {
    label: "What's next ?",
  },
  {
    label: "Bicent accelerators",
  },
];

function Home() {
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
                  className={cn(
                    "px-6 py-3 border-none relative after:absolute after:content-['\0a0'] after:inline-block after:h-[1px] after:bottom-0 after:w-[88%] after:mx-auto after:bg-[#BBC3C31A]/10 after:-translate-x-1/2 after:left-1/2",
                    {
                      "after:h-0": idx === ACCORDION_ITEMS.length - 1,
                    }
                  )}
                >
                  <AccordionTrigger>{item.label}</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
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
