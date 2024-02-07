type CardFooterProps = {
  children: React.ReactNode;
};

export function CardFooter(props: CardFooterProps) {
  const { children } = props;

  return <div className="card__footer">{children}</div>;
}
