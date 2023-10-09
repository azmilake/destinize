/* eslint-disable react/prop-types */
export default function SectionTitleFirstBody({
  title,
  mainTitle,
  description,
}) {
  return (
    <>
      <h3 className="font-bold text-primary text-md lg:text-lg uppercase mb-5">
        {title}
      </h3>
      <h1 className="font-bold text-lg md:text-4xl lg:text-6xl mb-4 text-center lg:text-left">
        {mainTitle}
      </h1>
      <p className="text-center text-gray-700 w-full lg:w-[750px] text-md lg:text-lg">
        {description}
      </p>
    </>
  );
}
