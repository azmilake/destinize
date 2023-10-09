import BenefitBody from './BenefitBody';
import BenefitData from '../utils/benefitdata.json';

export default function Benefit() {
  return (
    <ul className="flex flex-col gap-y-10 pr-0 lg:pr-10">
      {BenefitData.map(({ benefit, icon, desc }) => (
        <BenefitBody
          benefit={benefit}
          icon={icon}
          desc={desc}
          key={BenefitData.id}
        />
      ))}
    </ul>
  );
}
