import image1 from "../../assets/home/section4/1.png";
import icon1 from "../../assets/home/section4/i1.png";
import icon2 from "../../assets/home/section4/i2.png";
import icon3 from "../../assets/home/section4/i3.png";

export const Section4 = () => {
  const data = [
    {
      heading: "Start Project",
      text: "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience",
      icon: icon1,
    },
    {
      heading: "Craft",
      text: "Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space",
      icon: icon2,
    },
    {
      heading: "Execute",
      text: "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space",
      icon: icon3,
    },
  ];
  return (
    <section className="w-full py-10 px-6 sm:px-16 flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 lg:flex-row">
      <div className="w-full lg:max-w-[600px] flex flex-col justify-center items-start py-4">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium">
          Designing Your Dream in Three Simple Steps
        </h2>
        {data.map((item, index) => (
          <div
            key={index + "154vhv"}
            className="flex flex-col  p-2 w-full sm:w-[95%]"
          >
            <div className="flex items-center gap-4">
              <img src={item.icon} alt="icon1" className="w-12 h-12" />
              <h3 className="font-bold text-xl">{item.heading}</h3>
            </div>
            <p className=" w-[85%] ml-auto mr-2  lg:mr-0 xl:mr-4 ">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full sm:max-w-[300px] md:max-w-[400px]">
        <img src={image1} alt="image1" className="w-full h-auto" />
      </div>
    </section>
  );
};
