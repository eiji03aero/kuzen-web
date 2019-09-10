import React from 'react';
import { css } from 'emotion';
import _ from 'lodash';

import { Button, SvgIcon } from '../../atoms';

import * as C from '../../../primitives';
import { styles } from '../../../utils';
import { useMedia } from '../../../hooks';

export const IntroductionCard = ({
  level: TitleComponent,
  catchphrase,
  imageUrl,
  title,
  points,
  buttonLabel,
  onButtonClick,
}) => {
  const mediaQuery = useMedia();
  return (
    <article className={Styles.main}>
      <TitleComponent
        className={Styles.catchphrase}
        children={catchphrase}
      />
      <div className={Styles.img}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={Styles.pointsWrapper}>
        <dl className={Styles.points}>
          <dt
            className={Styles.title}
            children={title}
          />
          {_.map(points, (p, i) => (
            <dd key={i}>
              <SvgIcon name='Tick'/>
              <span>{p}</span>
            </dd>
          ))}
        </dl>
      </div>
      <Button
        type={mediaQuery.mobile
          ? 'secondary'
          : 'secondary-outline'}
        label={buttonLabel}
        block
        className={Styles.button}
        onClick={onButtonClick}
      />
    </article>
  );
};

IntroductionCard.defaultProps = {
  level: 'h1'
};

const Styles = {};
Styles.main = css`
  width: 280px;

  &__catchphrase {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: ${styles.scl(8.5)};
    margin-bottom: ${styles.scl(5)};
    border: 3px solid ${C.COLORS.LAVENDER_INDIGO};
    color: ${C.COLORS.LAVENDER_INDIGO};
    font-size: ${styles.scl(2)};
    text-align: center;
    white-space: pre;
    &:before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      border-top: ${styles.scl(1.5)} solid ${C.COLORS.LAVENDER_INDIGO};
      border-left: ${styles.scl(1.5)} solid transparent;
      border-right: ${styles.scl(1.5)} solid transparent;
      transform: translateX(-50%);
    }
  }
  &__img {
    display: flex;
    padding: 0 ${styles.scl(3.5)};
    margin-bottom: ${styles.scl(2.25)};
    img {
      width: 100%;
      height: auto;
    }
  }
  &__title {
    ${styles.fonts.bold}
    display: flex;
    justify-content: center;
    margin-bottom: ${styles.scl(1.25)};
    font-size: ${styles.scl(2.75)};
    line-height: ${styles.scl(4)};
  }
  &__points-wrapper {
    display: flex;
    justify-content: center;
  }
  &__points {
    margin-bottom: ${styles.scl(2.5)};
    & > * {
      display: flex;
      align-items: center;
      span {
        margin-left: ${styles.scl(1.5)};
        font-size: ${styles.scl(2)};
        line-height: ${styles.scl(3.75)};
      }
      svg {
        width: ${styles.scl(2)};
        height: ${styles.scl(2)};
        path {
          fill: ${C.COLORS.LAVENDER_INDIGO};
        }
      }
    }
  }
  &__button {
    font-size: ${styles.scl(1.75)};
  }


  ${styles.mq.tabletAndAbove} {
    width: 210px;
    &__catchphrase {
      height: ${styles.scl(9.5)};
      font-size: ${styles.scl(1.75)};
      line-height: ${styles.scl(3)};
      margin-bottom: ${styles.scl(1.75)};
    }
    &__img {
      height: 146px;
      padding: 0;
    }
    &__title {
      margin-bottom: ${styles.scl(1)};
      font-size: ${styles.scl(2.25)};
      line-height: ${styles.scl(4)};
    }
    &__points {
      margin-bottom: ${styles.scl(3)};
      & > * {
        span {
          font-size: ${styles.scl(1.5)};
          line-height: ${styles.scl(2.75)};
        }
      }
    }
    &__button {
      height: ${styles.scl(3)};
      font-size: ${styles.scl(1.75)};
    }
  }

  ${styles.mq.pcAndAbove} {
    width: 314px;
    &__catchphrase {
      height: ${styles.scl(14)};
      font-size: ${styles.scl(2.75)};
      line-height: ${styles.scl(3.5)};
      margin-bottom: ${styles.scl(4)};
    }
    &__img {
      height: 230px;
      padding: 0;
    }
    &__title {
      margin-bottom: ${styles.scl(1.5)};
      font-size: ${styles.scl(3.25)};
    }
    &__points {
      margin-bottom: ${styles.scl(5)};
      & > * {
        span {
          font-size: ${styles.scl(2.25)};
          line-height: ${styles.scl(3.75)};
        }
      }
    }
    &__button {
      height: ${styles.scl(5)};
      font-size: ${styles.scl(2.25)};
    }
  }
`;
Styles.catchphrase = Styles.main + '__catchphrase';
Styles.img = Styles.main + '__img';
Styles.title = Styles.main + '__title';
Styles.pointsWrapper = Styles.main + '__points-wrapper';
Styles.points = Styles.main + '__points';
Styles.button = Styles.main + '__button';
