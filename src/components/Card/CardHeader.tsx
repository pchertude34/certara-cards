import React from 'react';

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
          <img src="src/assets/Hexagon.svg" alt="hexagon" />
          <span className="hex-icon__icon">{icon}</span>
        </div>
      )}
      <h2 className="card__text-title">{title}</h2>
    </div>
  );
}
