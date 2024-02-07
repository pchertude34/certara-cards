import clsx from 'clsx';

type DividerProps = {
  classNames?: string;
};

export function Divider(props: DividerProps) {
  const { classNames } = props;

  return <hr className={clsx('divider', classNames)} />;
}
