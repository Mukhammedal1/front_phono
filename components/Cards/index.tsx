import React, { FC, Fragment } from 'react';
import { CardWrapper } from './Card.style';

interface CardProps {
  children?: React.ReactNode;
  img?: React.ReactNode | string;
  className?: string;
  alt?: string;
}

const Card: FC<CardProps> = ({ children, img, className, alt }) => {
  return (
    <Fragment>
      <CardWrapper className={className}>
        {img && (
          <div className="card-img">
            {typeof img === 'string' ? <img src={img} alt={alt || 'Card image'} /> : img}
          </div>
        )}
      </CardWrapper>
      <div className="card-content">{children}</div>
    </Fragment>
  );
};

export default Card;
