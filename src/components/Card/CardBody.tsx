import React from 'react';

type CardBodyProps = {
  children: React.ReactNode | React.ReactNode[];
};

export function CardBody(props: CardBodyProps) {
  const { children } = props;

  return <div className="card__body">{children}</div>;
}
