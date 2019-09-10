import React from 'react';
import { css } from 'emotion';
import _ from 'lodash';

import { Button } from '../../atoms';

import * as C from '../../../primitives';
import { styles } from '../../../utils';
import { useMedia, useCompositeState } from '../../../hooks';

import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';

export const Carousel = ({
  children,
  scrollDuration,
}) => {
  const [state, setState] = useCompositeState({
    currentIndex: 0,
    cardWidth: 0,
    cardHeight: 0,
  });
  const sliderRef = React.useRef(null);
  const absoluteIndex = React.useRef(0);
  const isScrolling = React.useRef(false);
  const mediaQuery = useMedia();

  const arrayChildren = React.Children.toArray(children);
  const childrenCount = React.Children.count(children);
  const lastIndex = childrenCount - 1;
  const cardMargin =
    mediaQuery.mobile ? 20 :
    mediaQuery.tablet ? 18 : 30;
  const displayedSlides = mediaQuery.mobile ? 1 : 3;
  const sliderWidth = mediaQuery.mobile
    ? state.cardWidth
    : state.cardWidth * 3 + cardMargin * 2;
  const sliderHeight = state.cardHeight;

  const getIndex = (currentIndex, idx) => {
    const nextIdx = currentIndex + idx;
    return (
      nextIdx < 0 ? getIndex(lastIndex + 1, nextIdx) :
      nextIdx > lastIndex ? getIndex(0, nextIdx - lastIndex - 1) :
      nextIdx
    );
  };

  const moveIndex = (value) => {
    const nextIndex = getIndex(state.currentIndex, value);
    absoluteIndex.current += value;
    setState({ currentIndex: nextIndex });
  };

  const renderSlide = (idx) => {
    const childIndex = getIndex(state.currentIndex, idx);
    const child = arrayChildren[childIndex];
    const key = `${childIndex}-${absoluteIndex.current + idx}`;
    const style = {
      left:
        idx < 0 ? `${(state.cardWidth + cardMargin) * idx}px` :
        idx > 0 ? `${(state.cardWidth + cardMargin) * idx}px` :
        ''
    };
    return (
      <div key={key} className={Styles.sliderSlide} style={style} data-slide-idx={idx}>
        {React.cloneElement(child, { key: key })}
      </div>
    );
  };

  const scrollSlides = (indexToMove) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    // Need to reverse the value since to match direction
    const distance = (state.cardWidth * indexToMove + cardMargin * indexToMove) * -1;
    const slideDoms = [].slice.call(sliderRef.current.querySelectorAll('.' + Styles.sliderSlide));
    _.forEach(slideDoms, (dom) => {
      dom.style.transition = `transform ${scrollDuration}ms`;
      dom.style.transform = `translateX(${distance}px)`;
    });
    setTimeout(() => {
      _.forEach(slideDoms, (dom) => {
        dom.style.transition = '';
        dom.style.transform = '';
      });
      moveIndex(indexToMove);
      isScrolling.current = false;
    }, scrollDuration);
  };

  const handleScrollNext = () => {
    scrollSlides(displayedSlides);
  };

  const handleScrollPrevious = () => {
    scrollSlides(displayedSlides * -1);
  };

  React.useEffect(() => {
    const child = sliderRef.current.firstChild.firstChild;
    setState({cardWidth: child.offsetWidth, cardHeight: child.offsetHeight});
  }, [mediaQuery]);

  return (
    <div className={Styles.main}>
      <div className={Styles.slider} ref={sliderRef} style={{width: sliderWidth, height: sliderHeight}}>
        {[
          ...(_.map(_.range(-6, 0), renderSlide)),
          renderSlide(0),
          ...(_.map(_.range(1, 7), renderSlide))
        ]}
      </div>
      <div className={styles.cn([Styles.side, Styles.sideLeft])}>
        <Button
          icon={<ChevronLeftIcon />}
          onClick={handleScrollPrevious}
        />
      </div>
      <div className={styles.cn([Styles.side, Styles.sideRight])}>
        <Button
          icon={<ChevronRightIcon />}
          onClick={handleScrollNext}
        />
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  scrollDuration: 500
};

const Styles = {};
Styles.main = css`
  display: flex;
  justify-content: center;
  position: relative;
  overflow: visible;

  &__slider {
    position: relative;
    &__slide {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &__side {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 60px;
    height: 100%;
    &__left {
      left: 0;
      background: linear-gradient(90deg, rgba(248, 250, 255, 1), rgba(248, 250, 255, 0))
    }
    &__right {
      right: 0;
      background: linear-gradient(270deg, rgba(248, 250, 255, 1), rgba(248, 250, 255, 0))
    }
    svg {
      width: ${styles.scl(6)};
      height: ${styles.scl(6)};
      path {
        fill: ${C.COLORS.MANATEE};
      }
    }
  }

  ${styles.mq.tabletAndAbove} {
    overflow: hidden;
    &__slider {
      overflow: hidden;
    }

    &__side {
      svg {
        width: ${styles.scl(5)};
        height: ${styles.scl(5)};
      }
    }
  }

  ${styles.mq.pcAndAbove} {
    margin: 0 -72px;
    &__side {
      svg {
        width: ${styles.scl(7)};
        height: ${styles.scl(7)};
      }
    }
  }
`;
Styles.slider = Styles.main + '__slider';
Styles.sliderSlide = Styles.main + '__slider__slide';
Styles.side = Styles.main + '__side';
Styles.sideLeft = Styles.main + '__side__left';
Styles.sideRight = Styles.main + '__side__right';
