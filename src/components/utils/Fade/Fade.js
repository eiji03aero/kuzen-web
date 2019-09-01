import React from 'react';
import { css } from 'emotion';

import { styles } from '../../../utils';

export const Fade = ({
  type,
  shown,
  onHide,
  children,
  ...rest
}) => {
  const [isShown, setIsShown] = React.useState(false);
  const [isNone, setIsNone] = React.useState(true);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const mainClassName = styles.cn([
    Styles.main,
    `${Styles.main}--type-${type}`,
    isNone && `${Styles.main}--is-none`,
    isShown && `${Styles.main}--is-shown`
  ]);

  const handleShow = () => {
    setIsAnimating(true);
    setIsNone(false);
    setTimeout(() => {
      setIsShown(true);
      setIsAnimating(false);
    }, 50);
  };

  const handleHide = () => {
    setIsAnimating(true);
    setIsShown(false);
    setTimeout(() => {
      setIsNone(true);
      setIsAnimating(false);
      onHide();
    }, 250);
  };

  React.useEffect(() => {
    if (isAnimating) {
      return;
    }

    if (shown) handleShow();
    else handleHide();
  }, [shown]);

  return (
    <div className={mainClassName} {...rest}>
      {children}
    </div>
  );
};

Fade.defaultProps = {
  type: 'default',
  shown: false,
  onHide: f => f
};

export const Styles = {};
Styles.main = css`
  opacity: 0;
  transition: opacity 250ms, transform 250ms;

  &--is-shown {
    opacity: 1;
  }

  &--is-none {
    display: none;
  }


  &--type-default { }
  &--type-down {
    transform: translateY(${styles.baseScale(-2)});
  }
  &--type-down&--is-shown {
    transform: translateY(0);
  }
`;
