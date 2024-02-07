import React from 'react';
import HexagonIcon from '../icons/HexagonIcon';

type CardHeaderProps = {
  icon?: React.ReactNode;
  title?: string;
};

export function CardHeader(props: CardHeaderProps) {
  const { icon, title } = props;

  return (
    <div className="card__header">
      {icon && (
        <div className="hex-icon mb-3">
          <HexagonIcon />
          <span className="hex-icon__icon">{icon}</span>
        </div>
      )}
      <h2 className="card__text-title">{title}</h2>
    </div>
  );
}
