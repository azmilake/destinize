/* eslint-disable react/prop-types */
export default function CardPopularBody({ place, island, picture }) {
  return (
    <>
      <div className="w-full lg:w-3/12 relative mb-5">
        <img
          src={picture}
          alt={place}
          className="rounded-xl h-96 bg-cover bg-center w-full"
        />
        <div className="w-36 h-16 bg-white/90 bottom-0 left-0 absolute rounded-tr-lg px-5 py-2">
          <h3 className="text-base font-semibold">{place}</h3>
          <p className="text-sm text-gray-700">{island}</p>
        </div>
      </div>
    </>
  );
}
