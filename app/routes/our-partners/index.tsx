import PageLayout from "~/components/layout/page-layout";

function OurPartnersPage() {
  return (
    <PageLayout>
      <section className="flex flex-col md:gap-8">
        <h1>Our partners</h1>
        <div className="flex items-center gap-10">
          <img
            src="/imgs/our-partners/microsoft.svg"
            alt="Microsoft logo"
            width={200}
            height={200}
            className="w-28 h-28 md:h-auto md:w-80"
          />
          <img
            src="/imgs/our-partners/open-ai.svg"
            alt="Open AI logo"
            width={200}
            height={200}
            className="w-28 h-28 md:h-auto md:w-80"
          />
        </div>
      </section>
    </PageLayout>
  );
}

export default OurPartnersPage;
