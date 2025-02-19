export const Section6 = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 mt-4">
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-center w-full sm:w-2/3 lg:w-1/2">
        Subscribe to Our Newsletter for Design Insights
      </h2>
      <p className="text-center w-full sm:w-2/3 lg:w-1/2">
        Be the first to discover trends, inspirations, and special offers as we
        bring the world of design directly to your inbox
      </p>
      <div className="w-full  flex flex-col justify-center items-center gap-4 bg-[#1F1F1F] p-4 mt-12 sm:mt-8 ">
        <form className="flex sm:flex-row gap-1  sm:w-2/3 lg:w-1/2 bg-white p-2  -translate-y-2/3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 p-2 rounded-md"
          />
          <button className="bg-[#1F1F1F] text-white p-2 px-4  "
          disabled>Subscribe</button>
        </form>
      </div>
    </section>
  );
};
