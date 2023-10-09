import FindLocBody from './FindLocBody';
import FindLocData from '../utils/findlocdata.json';

export default function FindLoc() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-14 space-y-8 lg:space-y-0">
      {FindLocData.map(({ icon, name, desc }) => (
        <FindLocBody icon={icon} name={name} desc={desc} key={FindLocData.id} />
      ))}
    </div>
  );
}
