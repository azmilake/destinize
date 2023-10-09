/* eslint-disable react/prop-types */
export default function SectionTitleSecondBody({ title, mainTitle, link }) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mb-12 px-5 lg:px-0">
      <div>
        <h4 className="text-primary font-bold text-md lg:text-lg mb-3 uppercase text-center lg:text-left">
          {title}
        </h4>
        <h2 className="text-xl lg:text-5xl font-bold mb-3 lg:mb-0">
          {mainTitle}
        </h2>
      </div>

      <div className="text-primary text-base font-semibold">
        <button className="flex items-center">
          {link}
          <svg
            width="7"
            height="14"
            viewBox="0 0 7 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-3"
          >
            <path
              d="M1.73242 1.9043L6.00004 7.22249L1.73242 12.5407"
              stroke="#4737FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
