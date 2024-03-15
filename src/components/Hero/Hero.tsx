import logo from "../../assets/images/logo.svg";

const Hero = () => {
  return (
    <section className="relative">
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
        <p className="px-6 text-center leading-6">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <div className="absolute -bottom-1/2 h-[500px] w-11/12 rounded-2xl bg-white p-6 shadow-[16px,32px,56px,0px,rgba(143,174,207,0.25)]">
        Form
      </div>
    </section>
  );
};
export default Hero;
