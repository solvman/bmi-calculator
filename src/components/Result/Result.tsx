import image from "../../assets/images/image-man-eating.webp";

const Result = () => {
  return (
    <section className="pb-16 pt-12 sm:my-24 sm:flex sm:flex-row sm:items-center sm:p-0">
      <div className="sm:w-1/2 sm:self-stretch">
        <img
          className="h-full sm:relative sm:object-cover md:right-[43px]"
          src={image}
          alt="Man eating sushi and smiling"
        />
      </div>
      <div className="mt-12 flex flex-col gap-y-8 px-6 sm:ml-0 sm:mr-10 sm:mt-0 sm:w-1/2">
        <h2 className="text-3xl font-semibold leading-8 tracking-tighter">
          What your BMI result means
        </h2>
        <p className="text-base font-normal leading-normal text-darkElectricBlue">
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
