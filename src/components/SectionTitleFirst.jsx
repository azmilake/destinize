/* eslint-disable react/prop-types */
import SectionTitleFirstBody from './SectionTitleFirstBody';

export default function SectionTitleFirst({ title, mainTitle, description }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-20">
        <SectionTitleFirstBody
          title={title}
          mainTitle={mainTitle}
          description={description}
        />
      </div>
    </>
  );
}
