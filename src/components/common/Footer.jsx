import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import linkedin from "../../assets/icons/linkedin.png";
import insta from "../../assets/icons/insta.png";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <section className="flex flex-row flex-wrap justify-evenly gap-8 p-4 bg-[#1F1F1F] text-white w-full ">
      <div className="w-full flex justify-center items-center p-2 font-medium border-b border-white ">
        <p
          className="hover:text-[--primary-color] cursor-pointer transition-all duration-150 px-8 "
          onClick={() => window.scrollTo(0, 0)}
        >
          Back To Top
        </p>
      </div>
      {/* First Column */}
      <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/4">
        <div className="flex justify-center md:justify-start items-center  h-[10vmin] md:h-[8vmin]">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        <p className="w-full  text-center md:text-left text-sm sm:text-base">
          VivaDecor your premier destination for luxury and modern interior
          design
        </p>
        <div className="flex justify-center md:justify-start items-center gap-4">
          <a to={"#"} target="_blank">
            <img src={facebook} alt="" />
          </a>
          <a to={"#"} target="_blank">
            <img src={twitter} alt="" />
          </a>
          <a to={"#"} target="_blank">
            <img src={linkedin} alt="" />
          </a>
          <a to={"#"} target="_blank">
            <img src={insta} alt="" />
          </a>
        </div>
      </div>

      {/* Pages Column */}
      <div className="flex flex-col font-medium gap-2 ">
        <h3 className="text-[length:--heading3-font-size] font-medium  text-center md:text-left">
          Our Services
        </h3>
        <div className="flex flex-col items-center md:items-start">
          <a to={"/about"} className="hover:text-gray-600">
            Interior design{" "}
          </a>
          <a to={"/projects"} className="hover:text-gray-600">
            Outdoor design{" "}
          </a>
          <a to={"/team"} className="hover:text-gray-600">
            Lightning design{" "}
          </a>
          <a to={"#"} className="hover:text-gray-600">
            Office design{" "}
          </a>
        </div>
      </div>

      <div className="flex flex-col font-medium gap-2  ">
        <h3 className="text-[length:--heading3-font-size] font-medium text-center md:text-left">
          Information
        </h3>
        <div className="flex flex-col items-center md:items-start">
          <a to={"/services/kitchen"} className="hover:text-gray-600">
            Reviews
          </a>
          <a href="tel:+"></a>
          <a to={"/services/living-area"} className="hover:text-gray-600">
            Careers
          </a>
          <a to={"/services/bathroom"} className="hover:text-gray-600">
            Pricing
          </a>
          <a to={"/services/dinning-hall"} className="hover:text-gray-600">
            Press inquires{" "}
          </a>
        </div>
      </div>

      {/* Contact Column */}
      <div className="flex flex-col font-medium gap-2 w-full md:w-1/4">
        <h3 className="text-[length:--heading3-font-size] font-medium text-center md:text-left">
          Contact
        </h3>
        <div className="flex flex-col items-center md:items-start text-sm sm:text-base">
          <p>Design Avenue Cityville, CA 90210 United States</p>
          <a href="mailto:info@vivadecor.com">info@vivadecor.com</a>
          <a href="tel:+123 456 7890">(123) 456 - 7890</a>
        </div>
      </div>

      <div className="w-full text-center">Copyright &copy; 2025 Viva Decor</div>
    </section>
  );
};

export default Footer;
