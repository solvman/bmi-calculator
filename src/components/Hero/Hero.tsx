import logo from "@/assets/images/logo.svg";
import Calculator from "./components/Calculator";

const Hero = () => {
  return (
    <section className="lg:flex lg:flex-row">
      <div className="bg-hero h-[640px] rounded-b-[35px] pt-6 lg:ml-6 lg:w-[978px] lg:rounded-b-[35px]">
        <img
          className="mx-auto block h-10 w-10 lg:mb-[127px] lg:ml-[116px] lg:mt-[75px] lg:h-16 lg:w-16"
          src={logo}
          alt=""
          aria-hidden
        />
        <h1 className="mx-auto my-6 max-w-xs text-center text-5xl font-semibold leading-[1.1] tracking-tighter text-gunmetal sm:max-w-sm lg:mb-[35px] lg:ml-[116px] lg:w-[564px] lg:text-left">
          Body Mass <br /> Index Calculator
        </h1>
        <p className="mx-6 text-center leading-6 text-darkElectricBlue sm:mx-10 lg:ml-[116px] lg:w-[465px] lg:text-left">
          Better understand your weight in relation to your height using our
          body mass index (BMI) calculator. While BMI is not the sole
          determinant of a healthy weight, it offers a valuable starting point
          to evaluate your overall health and well-being.
        </p>
      </div>
      <Calculator />
    </section>
  );
};
export default Hero;
