/* eslint-disable react/prop-types */
import SectionTitleSecondBody from './SectionTitleSecondBody';

export default function SectionTitleSecond({ title, mainTitle, link }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center mb-12 px-5 lg:px-0">
        <SectionTitleSecondBody
          title={title}
          mainTitle={mainTitle}
          link={link}
        />
      </div>
    </>
  );
}
