/* eslint-disable react/prop-types */
export default function BenefitBody({ icon, benefit, desc }) {
  return (
    <>
      <li className="flex items-center">
        <span className="bg-iconbg rounded-xl flex flex-none text-white items-center justify-between w-12 h-12 px-3">
          <img src={icon} alt="icon-benefit" />
        </span>
        <div className="flex flex-col ml-4 leading-5">
          <h6 className="font-bold mb-1 text-gray-500 text-md lg:text-lg">
            {benefit}
          </h6>
          <p className=" text-gray-500 w-full lg:w-[350px]">{desc}</p>
        </div>
      </li>
    </>
  );
}
