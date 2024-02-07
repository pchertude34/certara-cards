import HexagonIcon from '../icons/HexagonIcon';
import clsx from 'clsx';

type HexIconProps = {
  icon: React.ReactNode;
  classNames?: string;
};

export function HexIcon(props: HexIconProps) {
  const { icon, classNames } = props;

  return (
    <div className={clsx('hex-icon text-center', classNames)}>
      <HexagonIcon />
      <span className="hex-icon__icon">{icon}</span>
    </div>
  );
}
