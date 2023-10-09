/* eslint-disable react/prop-types */
export default function FindLocBody({ icon, name, desc }) {
  return (
    <div className="w-full lg:w-4/12 flex space-x-4">
      <div className="w-10 lg:w-12 p-1 h-10 lg:h-12 rounded-full bg-iconbg2 flex items-center justify-center">
        <img src={icon} />
      </div>
      <div>
        <h2 className="text-lg font-bold mb-1">{name}</h2>
        <p className="w-full lg:w-[295px] text-[18px] text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
