import React from 'react';
import { css } from 'emotion';

import * as C from '../../../primitives';
import { styles } from '../../../utils';

export const FramedTitle = ({
  level: Component,
  children,
  ...rest
}) => {
  return (
    <div className={Styles.main}>
      <div className={Styles.backdrop}/>
      <div className={Styles.frame}/>
      <Component className={Styles.title} children={children} />
    </div>
  );
};

FramedTitle.defaultProps = {
  level: 'h1'
};

const Styles = {};
Styles.main = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 230px;
  height: 45px;
  &__backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${C.COLORS.WHITE_SMOKE};
    transform: translate(-4px, -4px);
  }
  &__frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 2px solid ${C.COLORS.TAUPE};
  }
  &__title {
    ${styles.fonts.bold};
    position: relative;
    font-size: ${styles.scl(2.75)};
    line-height: ${styles.scl(3.5)};
  }

  ${styles.mq.tabletAndAbove} {
    width: 350px;
    height: 60px;
    &__backdrop {
      transform: translate(-6px, -6px);
    }
    &__title {
      font-size: ${styles.scl(3)};
      line-height: ${styles.scl(5.5)};
    }
  }

  ${styles.mq.pcAndAbove} {
    width: 515px;
    height: 90px;
    &__backdrop {
      transform: translate(-10px, -10px);
    }
    &__title {
      font-size: ${styles.scl(4.5)};
      line-height: ${styles.scl(8)};
    }
  }
`;
Styles.backdrop = Styles.main + '__backdrop';
Styles.frame = Styles.main + '__frame';
Styles.title = Styles.main + '__title';
