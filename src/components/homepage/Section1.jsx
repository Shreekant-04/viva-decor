import image1 from "../../assets/home/section1/1.png";
import image2 from "../../assets/home/section1/2.png";

const Section1 = () => {
  const stats = [
    { num: "400+", text: "Project Complete" },
    { num: "600+", text: "Satisfied Clients" },
    { num: "100+", text: "Unique Styles" },
  ];
  return (
    <section className="mx-auto  w-full p-1 sm-p-2  max-h-[500px] h-[32vh] sm:h-[45vh]  lg:h-[60vh] xl:h-[90vh] 2xl:h-[100vh] flex justify-center items-center relative">
      <div className=" w-[50%] h-full  flex flex-col justify-center items-start p-4 gap-4 translate-x-4 sm:translate-x-6 md:translate-x-8 lg:translate-x-14 xl:translate-x-20 2xl:translate-x-32 z-10 ">
        <h1
          className="w-full text-xl sm:text-4xl  md:text-5xl lg:text-7xl xl:text-[5rem] 2xl:text-8xl  font-medium tracking-wider md:tracking-tight


 "
        >
          Interior Design
        </h1>
        <p className="w-11/12 leading-none sm:w-4/5 text-[#545454] text-[8px] md:text-xs xl:text-base ">
          Step into a world where the art of Interior Design is meticulously
          crafted to bring together timeless elegance and cutting-edge modern
          Innovation, Allowing you to transform your living spaces into the
          epitome of luxury and sophistication
        </p>
        <button className="bg-black text-white text-[8px] md:text-xs lg:font-sm w-max px-2 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-4 md:mt-8">
          Start Project
        </button>
        <div className=" flex  justify-between items-center sm:p-2 mt-auto w-full md:w-5/6 lg:w-3/4 mb-4 ">
          {stats.map((stat, i) => (
            <div
              key={i + "24651"}
              className="flex flex-col justify-center items-center text-[#545454] "
            >
              <p className="text-sm md:text-3xl font-semibold">{stat.num}</p>
              <p className="text-[6px] sm:text-[10px] lg:text-[12px] xl:text-base">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[40%] h-full  flex flex-col justify-evenly items-center gap-4 -translate-x-4 sm:-translate-x-6 md:-translate-x-8 lg:-translate-x-14 xl:-translate-x-20 2xl:-translate-x-32 ">
        <div className="w-2/3 h-[40%] ml-auto relative px-2">
          <img src={image1} alt="image1" className="w-full h-full" />
        </div>
        <div className="w-2/3 h-[40%] relative">
          <div className="absolute -top-3 -left-3 w-12 h-12 md:h-16 md:w-16 xl:h-24 xl:w-24  -z-10  border-2 border-black"></div>
          <img src={image2} alt="image2" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
