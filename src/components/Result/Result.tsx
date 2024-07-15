import image from "../../assets/images/image-man-eating.webp";

const Result = () => {
  return (
    <section className="lg:before:bg-pattern-left relative mx-auto max-w-[1160px] pb-16 pt-12 sm:my-24 sm:flex sm:flex-row sm:items-center sm:p-0 lg:items-end lg:before:absolute lg:before:-top-[60px] lg:before:right-[90px] lg:before:h-[200px] lg:before:w-[85px] lg:before:bg-cover">
      <div className="sm:w-1/2 sm:self-stretch">
        <img
          className="h-full sm:relative sm:object-cover md:right-[43px] lg:right-0"
          src={image}
          alt="Man eating sushi and smiling"
        />
      </div>
      <div className="mt-12 flex flex-col gap-y-8 px-6 sm:ml-0 sm:mr-10 sm:mt-0 sm:w-1/2 lg:mb-10 lg:ml-20">
        <h2 className="text-3xl font-semibold leading-8 tracking-tighter text-gunmetal lg:text-5xl">
          What your BMI result means
        </h2>
        <p className="text-dark-electric-blueBlue text-base font-normal leading-normal">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
};
export default Result;
