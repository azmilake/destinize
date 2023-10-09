import CardReviewBody from './CardReviewBody';
import CardReviewData from '../utils/cardreviewdata.json';

export default function CardReview() {
  return (
    <>
      {CardReviewData.map(({ image, review, name, location }) => (
        <div
          className="h-full bg-white w-full lg:w-4/12 shadow-2xl rounded-lg flex flex-col justify-center items-center p-10 text-center"
          key={CardReviewData.id}
        >
          <CardReviewBody
            image={image}
            review={review}
            name={name}
            location={location}
          />
        </div>
      ))}
    </>
  );
}
