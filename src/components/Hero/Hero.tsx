import logo from "@/assets/images/logo.svg";
import Calculator from "./components/Calculator";

const Hero = () => {
  return (
    <section className="">
      <div className="">
        <img className="" src={logo} alt="" aria-hidden />
        <h1 className="">
          Body Mass <br /> Index Calculator
        </h1>
        <p className="">
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
