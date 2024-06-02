import PageLayout from "~/components/layout/page-layout";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

function WhatNextPage() {
  return (
    <PageLayout>
      <h1 className="mb-10">What&apos;s next ?</h1>
      <div className="flex gap-2.5">
        <WhatNextCard
          projectName="Blurd"
          projectYear={2024}
          projectType="web"
          imgSrc={"/imgs/what-next/vr.svg"}
        />
        <WhatNextCard
          projectName="Blurd"
          projectYear={2024}
          projectType="mobile"
          imgSrc={"/imgs/what-next/vr.svg"}
        />{" "}
        <WhatNextCard
          projectName="Blurd"
          projectYear={2024}
          projectType="web"
          imgSrc={"/imgs/what-next/vr.svg"}
        />
      </div>
    </PageLayout>
  );
}

export default WhatNextPage;

type WhatNextCardProps = {
  imgSrc: string;
  projectName: string;
  projectType: "web" | "mobile";
  projectYear: number;
};

function WhatNextCard({
  imgSrc,
  projectName,
  projectType,
  projectYear,
}: WhatNextCardProps) {
  return (
    <article className="w-96 h-auto relative group">
      <img src={imgSrc} alt="" loading="lazy" />
      <div className="absolute w-full h-full inset-0">
        <section className="relative h-full px-4 py-5 flex flex-col justify-between transition-colors duration-300 hover:bg-black/60 *:z-[1] after:transition-all after:duration-300 after:hover:opacity-0 after:opacity-100 after:bg-gradient-to-b after:to-[82%] after:from-black/[0.52] after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full">
          <h2 className="font-bold text-lg">{projectName}</h2>
          <div className="text-center">
            <Button
              className={cn("h-16 w-[70%]", {
                "bg-[#3AD1A4] bg-[#3AD1A4]/90": projectType === "mobile",
                "bg-purple-500 hover:bg-purple-500/90": projectType === "web",
              })}
            >
              {projectName}
            </Button>
          </div>
          <div className="flex justify-between">
            <div>
              <p>{projectType === "mobile" && "Application mobile"}</p>
              <p>{projectType === "web" && "Site Web"}</p>
            </div>
            <p>{projectYear}</p>
          </div>
        </section>
      </div>
    </article>
  );
}
