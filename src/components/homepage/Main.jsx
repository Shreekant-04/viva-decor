import Footer from "../common/Footer";
import Section1 from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";

const Main = () => {
  return (
    <main className=" font-Inter mt-[50px] md:mt-[60px]">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </main>
  );
};

export default Main;
