import image1 from "../../assets/home/section5/1.png";
import left from "../../assets/home/section5/left-arrow.png";
import profile1 from "../../assets/home/section5/p1.png";
import profile2 from "../../assets/home/section5/p2.png";
import right from "../../assets/home/section5/right-arrow.png";

export const Section5 = () => {
  const data = [
    {
      feedback:
        "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations.  Thank you for making my home beautiful!",
      name: "Sophie Carter",
      address: "New York, USA",
      profile: profile1,
    },
    {
      feedback:
        "Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!",
      name: "James Bennett",
      address: "Toronto, Canada",
      profile: profile2,
    },
  ];
  return (
    <section className="w-full py-10 px-6 sm:px-16 flex flex-col justify-center items-center lg:items-start   gap-4 md:gap-6 lg:gap-8 lg:flex-row">
      <div className="w-full sm:max-w-[300px] md:max-w-[400px] flex flex-col gap-4">
        <img src={image1} alt="image1" className="w-full h-auto" />
        <div className="flex gap-2 justify-center lg:justify-start  items-center ">
            <img src={left} alt="left" className="rounded-full h-12 w-12" />
            <img src={right} alt="right" className="rounded-full h-12 w-12 " />
        </div>
      </div>
      <div className="w-full lg:max-w-[500px] py-4  relative ">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-center lg:text-left">
          What Our Customers Say About Us
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center p-3  mt-4 rounded-lg gap-4  bg-white text-black w-full lg:min-w-[700px]  lg:-translate-x-1/3">
          {data.map((people, index) => (
            <div
              key={index + 5451}
              className="h-auto w-full md:w-1/2 p-4 bg-black text-white rounded-lg"
            >
              <h2 className="text-8xl italic font-bold">{'"'}</h2>
              <p>{people.feedback}</p>
              <div className="flex items-center gap-4 mt-4">
                <div>
                  <img
                    src={people.profile}
                    alt="Sophie Carter"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3>{people.name}</h3>
                  <p>{people.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
