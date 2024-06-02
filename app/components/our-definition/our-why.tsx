function OurWhy() {
  return (
    <div>
      <section className="h-[80dvh] flex items-center px-[140px]">
        <p className="text-7xl font-semibold font-graphik">
          <span className="block text-[#BBC3C3]">Do more</span>{" "}
          <span className="block">
            <span className="text-[#BBC3C3]">by</span> <span>connecting</span>{" "}
          </span>
          <span className="block">human creativity</span>{" "}
          <span className="block">
            <span className="text-[#BBC3C3]">to</span>{" "}
            <span className="orange_bar">technology</span>
          </span>
        </p>
      </section>
      <section className="flex items-end min-h-dvh px-[140px]">
        <div className="flex gap-20 w-full">
          <div className="w-full flex pt-20">
            <p className="text-4xl leading-snug max-w-[600px]">
              We go above and beyond to support our clients so that they can
              unleash their full potential.
            </p>
          </div>
          <div className="w-full flex justify-end">
            <img
              src="/imgs/our-definition/our-definition-img1.svg"
              className="h-[70dvh] object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center min-h-dvh relative px-[140px] overflow-hidden">
        <img
          src="/imgs/our-definition/robot-human-hands-moving-handshake.svg"
          className="object-cover absolute -left-12 top-0 w-[380px]"
          alt=""
        />

        <img
          src="/imgs/our-definition/robot-human-hands-moving-handshake-removebg.svg"
          className="object-cover absolute bottom-0 -right-12 w-[380px]"
          alt=""
        />
        <h2 className="text-6xl font-semibold font-graphik">
          <span>Creativity</span> <span className="text-[#BBC3C3]">&</span>{" "}
          <br />
          <span>Technology</span>
        </h2>
      </section>
      <section className="flex items-center justify-center min-h-dvh relative bg-[#E9EBED]">
        lo
      </section>
    </div>
  );
}

export default OurWhy;
