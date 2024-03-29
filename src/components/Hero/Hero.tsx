import logo from "../../assets/images/logo.svg";
import Calculator from "./components/Calculator";

const Hero = () => {
  return (
    <section>
      <div className="h-[640px] rounded-b-[35px] bg-[linear-gradient(290deg,var(--tw-gradient-stops))] from-[rgba(214,230,254,1)] to-transparent pt-6">
        <img
          className="mx-auto block h-10 w-10 lg:mx-0 lg:mt-16 lg:h-16 lg:w-16"
          src={logo}
          alt=""
          aria-hidden
        />
        <h1 className="mx-auto my-6 max-w-xs text-center text-5xl font-semibold leading-[1.1] tracking-tighter">
          Body Mass Index Calculator
        </h1>
        <p className="mx-6 text-center leading-6">
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
