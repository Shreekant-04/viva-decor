import image1 from "../../assets/home/section3/1.png";

export const Section3 = () => {
  return (
    <section className="w-full py-10 px-6 sm:px-16 flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 lg:flex-row">
      <div className="w-full sm:max-w-[300px] md:max-w-[450px] ">
        <img src={image1} alt="image1" className="w-full h-auto" />
      </div>
      <div className="w-full  lg:max-w-[500px]   flex flex-col justify-center items-start gap-4 md:gap-6  py-4 ">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium">
          Designing Your Dream With Brilliance
        </h2>
        <p className="text-sm md:text-base lg:text-lg">
          Elevate your spaces with bespoke interior designs that reflect your
          unique style and aspirations, crafted with precision and brilliance
          for an unforgettable living experience
        </p>
        <h4 className="text-base md:text-lg lg:text-xl font-medium">
          Living Room Interior Design
        </h4>
        <h4 className="text-base md:text-lg lg:text-xl font-medium">
          Commercial Office Room Interior Design
        </h4>
        <button
          type="button"
          className="mt-4 px-4 py-2 bg-black text-white rounded-lg  ml-auto mr-4"
        >
          Learn more
        </button>
      </div>
    </section>
  );
};
