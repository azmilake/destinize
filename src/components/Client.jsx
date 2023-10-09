/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ClientData from '../utils/client.json';

export default function Client() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row lg:justify-between mb-5 lg:mb-40 px-5 lg:px-0">
      {ClientData.map(({ image }) => (
        <img
          src={image}
          className="grayscale hover:grayscale-0 cursor-pointer md:hover:scale-110 scale-50 lg:scale-100 -mb-52 lg:-mb-0"
          key={ClientData.id}
        />
      ))}
    </section>
  );
}
