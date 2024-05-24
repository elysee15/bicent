import PageLayout from "~/components/layout/page-layout";

function InnovationOnDemandPage() {
  return (
    <PageLayout noFooter>
      <article className="h-full space-y-10">
        <h1 className="after:hidden text-2xl md:text-4xl">
          Innovation on demand
        </h1>
        <section className="p-10 flex flex-col md:flex-row bg-darkGray gap-10">
          <div className="w-full md:w-2/3 pt-8">
            <p className="text-balance">
              In the face of an ever-evolving economic landscape, marked by the
              pervasive threat of disruption, innovation becomes the essential
              foundation guaranteeing the sustainability and success of
              businesses. In this context of intense competition and rapid
              changes, technological innovation emerges as the strategic pivot
              to maintain a leading position in the market.
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

export default InnovationOnDemandPage;
