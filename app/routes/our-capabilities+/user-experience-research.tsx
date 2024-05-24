import PageLayout from "~/components/layout/page-layout";

function UserExperienceResearchPage() {
  return (
    <PageLayout noFooter>
      <article className="h-full space-y-10">
        <h1 className="after:hidden text-2xl md:text-4xl">UX / UI research</h1>
        <section className="p-10 flex flex-col md:flex-row bg-darkGray gap-10">
          <div className="w-full md:w-2/3 pt-8">
            <p>
              It&apos;s an essential step in all the projects we work on,
              because it&apos;s the heart of the interaction between your
              company and your users. User experience (UX) and user interface
              (UI) are the pillars on which the relationship between your
              products or services and those who use them rests.
            </p>
            <p>
              By deeply understanding your users&apos; needs, behaviors and
              expectations, we design fluid, intuitive and enjoyable experiences
              that guarantee greater satisfaction, increased loyalty and
              positive recommendations.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="/imgs/our-capabilities/ux-research.png"
              height={200}
              width={200}
              className="w-96 h-96 object-cover"
              loading="lazy"
              alt=""
            />
          </div>
        </section>
      </article>
    </PageLayout>
  );
}

export default UserExperienceResearchPage;
