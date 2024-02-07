import React from 'react';

type CardHeaderProps = {
  children: React.ReactNode;
};

export function CardHeader(props: CardHeaderProps) {
  const { children } = props;

  return <div className="card__header">{children}</div>;
}
