import CardPopularBody from './CardPopularBody';
import CardPopularData from '../utils/populardestinationdata.json';

export default function CardPopular() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:space-x-5 px-5 lg:px-0">
        {CardPopularData.map(({ place, island, picture }) => (
          <CardPopularBody
            place={place}
            island={island}
            picture={picture}
            key={CardPopularData.id}
          />
        ))}
      </div>
    </>
  );
}
