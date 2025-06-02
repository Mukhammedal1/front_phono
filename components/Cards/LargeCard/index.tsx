import React, { FC } from 'react';
import { CardWrapper } from '../../Cards/Card.style';

interface LargeCardProps {
  img: React.ReactNode | string;
  labels: string[]; // Bir nechta labellarni qabul qiladi
  className?: string;
  alt?: string;
}

const LargeCard: FC<LargeCardProps> = ({ img, labels, className, alt }) => {
  return (
    <CardWrapper className={`large-card ${className}`}>
      {/* Rasm */}
      {img && (
        <div className="card-imgs">
          {typeof img === 'string' ? <img src={img} alt={alt || 'Large Card image'} /> : img}
        </div>
      )}

      {/* Labellar */}
      <div className="card-labels">
        {labels.map((label, index) => (
          <div key={index} className="card-label">
            {label}
          </div>
        ))}
      </div>
    </CardWrapper>
  );
};

export default LargeCard;