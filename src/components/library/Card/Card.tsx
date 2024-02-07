import React from 'react';

type CardProps = {
  tag?: string;
  children: React.ReactNode | React.ReactNode[];
};

export function Card(props: CardProps) {
  const { tag, children } = props;

  return (
    <div className="card">
      {tag && <div className="card__badge">{tag}</div>}
      {children}
    </div>
  );
}
