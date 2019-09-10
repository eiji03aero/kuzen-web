import React from 'react';
import { css } from 'emotion';

import * as C from '../../../primitives';
import { styles } from '../../../utils';

export const Section = ({
  className,
  type,
  ...rest
}) => {
  const mainClassName = styles.cn([
    className,
    Styles.main,
    type && `${Styles.main}--type-${type}`
  ]);
  return (
    <section className={mainClassName} {...rest}/>
  );
};

Section.defaultProps = {
  className: '',
  type: 'default'
};

const TitleLogo = Section.TitleLogo = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div className={styles.cn([className, Styles.titleLogo])} {...rest}>
      <img src='Icons/Title-Icon.png' alt='title icon' />
    </div>
  );
};

TitleLogo.defaultProps = {
  className: ''
};

const Title = Section.Title = ({
  component: Component,
  className,
  ...rest
}) => {
  return (
    <Component className={styles.cn([className, Styles.title])} {...rest} />
  );
};

Title.defaultProps = {
  component: 'h1',
  className: ''
};

const Styles = {};
Styles.main = css`
  padding: ${styles.scl(5)} 0;

  &__title-logo {
    display: none;
  }

  &__title {
    ${styles.fonts.bold}
    margin: 0 auto ${styles.scl(2)};
    font-size: ${styles.scl(2.5)};
    line-height: ${styles.scl(4.75)};
    color: ${C.COLORS.TAUPE};
    text-align: center;
  }

  &--type-default { }
  &--type-white {
    background-color: ${C.COLORS.GHOST_WHITE};
  }
  &--type-primary {
    background-color: ${C.COLORS.VERDIGRIS};
    color: ${C.COLORS.WHITE};
  }


  ${styles.mq.tabletAndAbove} {
    padding: ${styles.scl(8)} 0;
    &__title {
      margin: 0 auto ${styles.scl(5)};
      font-size: ${styles.scl(3.5)};
    }
  }

  ${styles.mq.pcAndAbove} {
    padding: ${styles.scl(9)} 0;
    &__title-logo {
      display: flex;
      justify-content: center;
      margin: 0 auto ${styles.scl(5)};
      img {
        width: ${styles.scl(8.5)};
        height: ${styles.scl(8.75)};
      }
    }
    &__title {
      margin: 0 auto ${styles.scl(5)};
      font-size: ${styles.scl(4)};
    }
  }
`;
Styles.titleLogo = Styles.main + '__title-logo';
Styles.title = Styles.main + '__title';
