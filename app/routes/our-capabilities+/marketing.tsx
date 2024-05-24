import PageLayout from "~/components/layout/page-layout";

function MarketingPage() {
  return (
    <PageLayout noFooter>
      <article className="h-full space-y-10">
        <h1 className="after:hidden text-2xl md:text-4xl">Marketing</h1>
        <section className="p-10 flex flex-col md:flex-row bg-darkGray gap-10">
          <div className="w-full md:w-2/3 pt-8">
            <p className="text-balance">
              Preparing to launch a product or service can be a real challenge,
              but at Bicents, we&apos;re here to turn those challenges into
              opportunities. We&apos;re with you every step of the way, helping
              you lay the foundations for a sensational market entry.From naming
              and competitive analysis to brand platform development and
              go-to-market strategy, our experienced team provides expert
              guidance to ensure you make the most of your launch.
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

export default MarketingPage;
