import React from 'react';
import classnames from 'classnames';
import './MainContainer.css';

type Props = {
  containerClassName?: string,
  contentClassName?: string,
  children: any;
};

export const MainContainer: React.FC<Props> = ({
  containerClassName,
  contentClassName,
  children,
}) => {
  return (
    <main className={classnames('main', containerClassName)}>
      <div className={classnames('main__content', contentClassName)}>
        {children}
      </div>
    </main>
  );
};
