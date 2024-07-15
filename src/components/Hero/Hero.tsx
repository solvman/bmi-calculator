import logo from "@/assets/images/logo.svg";
import Calculator from "./components/Calculator";

const Hero = () => {
  return (
    <section className="relative px-6 pt-8 before:absolute before:left-0 before:top-0 before:-z-10 before:h-[640px] before:w-full before:rounded-b-[35px] before:bg-hero sm:px-10 lg:before:left-6 lg:before:w-[978px]">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-10">
        <img
          className="mx-auto w-10 lg:mx-0 lg:w-16"
          src={logo}
          alt="Logo"
          aria-hidden
        />
        <div className="mt-6 flex flex-col gap-12 lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-semibold tracking-tight-xl text-gunmetal lg:mt-24">
              Body Mass <br /> Index Calculator
            </h1>
            <p className="mt-6 lg:max-w-[465px]">
              Better understand your weight in relation to your height using our
              body mass index (BMI) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>
          <Calculator />
        </div>
      </div>
    </section>
  );
};
export default Hero;
