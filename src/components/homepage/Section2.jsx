import image1 from "../../assets/home/section2/1.png";
import image2 from "../../assets/home/section2/2.png";
import image3 from "../../assets/home/section2/3.png";

export const Section2 = () => {
  const data = [
    {
      title: "Lighting Design",
      text: "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere",
      image: image1,
    },
    {
      title: "Interior Design",
      text: "From concept to completion, we oversee every detail to bring your vision to life efficiently",
      image: image2,
    },
    {
      title: "Outdoor Design",
      text: "Celebrate the changing seasons with our seasonal outdoor decor services",
      image: image3,
    },
  ];
  return (
    <section className="w-full py-10 px-6 sm:px-16 flex flex-col justify-center items-start gap-4 md:gap-6 lg:gap-8">
      <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
        - Our Services
      </h2>
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-6">
        {data.map((service, i) => (
          <div
            key={i + 1561561}
            className="bg-white p-4 rounded-lg shadow-md flex flex-row w-full md:max-w-[300px] lg:max-w-[350px]  lg:min-h-[150px]  justify-center items-center gap-2"
          >
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto  "
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-4">
              <h3 className="text-base lg:text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-600">
                {service.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
