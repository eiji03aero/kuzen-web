import React from 'react';
import Img from 'gatsby-image';
import { css } from 'emotion';

import * as C from '../../../primitives';
import { styles } from '../../../utils';

export const TopBanner = ({
  type,
  fluid,
  children
}) => {
  const mainClassName = styles.cn([
    Styles.main,
    `${Styles.main}--type-${type}`
  ]);

  return (
    <div className={mainClassName}>
      <Img className={Styles.img} fluid={fluid} imgStyle={{objectFit: 'fit'}} />
      {children}
    </div>
  );
};

TopBanner.defaultProps = {
  type: 'full'
};

const Styles = {};
Styles.main = css`
  width: 100%;
  position: relative;

  & > * {
    position: relative;
  }

  &__img {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &--type-full {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - ${C.HEADER_HEIGHT.MOBILE}px);
  }


  ${styles.mq.tabletAndAbove} {
    &--type-full {
      height: 480px;
    }
  }


  ${styles.mq.pcAndAbove} {
    &--type-full {
      height: 790px;
    }
  }
`;

Styles.img = Styles.main + '__img';
