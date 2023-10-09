// import { useState } from 'react';
import SectionTitleSecondBody from './SectionTitleSecondBody';
import AccordionBody from './AccordionBody';
import AccordionData from '../utils/accor.json';

export default function Accordion() {
  // const accordionData = [
  //   {
  //     title: 'Section 1',
  //     content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
  //     laborum cupiditate possimus labore, hic temporibus velit dicta earum
  //     suscipit commodi eum enim atque at? Et perspiciatis dolore iure
  //     voluptatem.`,
  //   },
  //   {
  //     title: 'Section 2',
  //     content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
  //     reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
  //     quaerat iure quos dolorum accusantium ducimus in illum vero commodi
  //     pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
  //     quidem maiores doloremque est numquam praesentium eos voluptatem amet!
  //     Repudiandae, mollitia id reprehenderit a ab odit!`,
  //   },
  //   {
  //     title: 'Section 3',
  //     content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
  //     quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
  //     dolor ut sequi minus iste? Quas?`,
  //   },
  // ];

  return (
    <section className="container mx-auto mb-32 font-jakarta px-5 lg:px-0">
      <div className="mb-20">
        <SectionTitleSecondBody
          title=" Frequently Asked Question"
          mainTitle="🧐 &bull; Pertanyaan yang Sering Diajukan"
          link="Lihat Semua"
        />
      </div>

      <div className="accordion">
        {AccordionData.map(({ title, content }) => (
          <AccordionBody title={title} content={content} key={title} />
        ))}
      </div>
    </section>
  );
}
