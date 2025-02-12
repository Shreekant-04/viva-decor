import image1 from "../../assets/home/section1/1.png";
import image2 from "../../assets/home/section1/2.png";

const Section1 = () => {
  const stats = [
    { num: "400+", text: "Project Complete" },
    { num: "600+", text: "Satisfied Clients" },
    { num: "100+", text: "Unique Styles" },
  ];
  return (
    <section className="border-2 border-red-300 lg:h-[90vh] md:h-[40vh] h-[32vh] flex gap-2 p-2 sm:p-6  ">
      <div className=" w-3/5 p-2 sm:p-8 flex flex-col justify-center  text-start  gap-4 translate-x-4 md:translate-x-12 lg:translate-x-20">
        <h1 className="text-3xl leading-none md:text-[3.45rem] lg:text-7xl xl:text-8xl  font-medium  ">
          Interior Design
        </h1>
        <p className="w-11/12 leading-none sm:w-4/5 text-[#545454] text-[8px] md:text-xs lg:text-lg ">
          Step into a world where the art of Interior Design is meticulously
          crafted to bring together timeless elegance and cutting-edge modern
          Innovation, Allowing you to transform your living spaces into the
          epitome of luxury and sophistication
        </p>
        <button className="bg-black text-white text-[8px] md:text-xs lg:font-sm w-max px-2 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-4 lg:mt-8">
          Start Project
        </button>
        <div className=" flex  justify-between items-center sm:p-2 mt-auto w-11/12  md:w-5/6 lg:w-3/4 ">
          {stats.map((stat, i) => (
            <div
              key={i + "24651"}
              className="flex flex-col justify-center items-center text-[#545454] "
            >
              <p className="text-sm sm:text-3xl font-semibold">{stat.num}</p>
              <p className="text-[7px] md:text-xs lg:text-base">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-2/5 flex flex-col  gap-8 justify-center items-end p-2 -translate-x-4 md:-translate-x-12  lg:-translate-x-20">
        <div className=" h-[20vmin] w-[25vmin] md:h-[20vmin] md:w-[25vmin] lg:h-[35vmin] lg:w-[50vmin] xl:h-[40vmin] xl:w-[60vmin] translate-x-4 md:translate-x-4">
          <img src={image1} alt="image 1" className="w-full h-full" />
        </div>
        <div className="  h-[20vmin] w-[30vmin] md:h-[20vmin] md:w-[30vmin] lg:h-[30vmin] lg:w-[50vmin] xl:h-[30vmin] xl:w-[70vmin] md:-translate-x-3 lg:-translate-x-10 relative">
          <div className="absolute -top-3 -left-2 md:-top-4 lg:-top-5 md:-left-3 lg:-left-4 h-[10vmin] lg:h-[20vmin] lg:w-[20vmin]  w-[10vmin] border md:border-2 lg:border-4 border-black -z-10"></div>
          <img src={image2} alt="image 1" className="w-full h-full z-20" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
