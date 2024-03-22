export const Portfolio: React.FC = () => {
  return (
    <section className="flex justify-center w-full">
      <div className="container flex flex-col my-24 2xl:gap-x-7 2xl:flex-row px-7 lg:px-28 xl:my-52 gap-y-7">
        <h2 className="text-xl 2xl:translate-y-4 basis-1/6">Our Portfolio</h2>
        <div className="flex flex-col w-full gap-y-28">
          <h2 className="text-4xl font-medium leading-relaxed lg:font-semibold lg:tracking-wide lg:max-w-5xl">
            We envision a world where every idea, product, or service is brought to life through
            exceptional design.
          </h2>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2">
            {Array.from(new Array(6)).map((_, i) => (
              <div key={i} className="space-y-6">
                <img
                  src={`/assets/portfolio-${i + 1}.png`}
                  alt="Portfolio's Image"
                  className="w-full"
                />
                <p className="text-[28px] text-black/70">
                  <strong>Daily App</strong> - Increasing your productivity
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
