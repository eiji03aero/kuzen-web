import React from 'react';
import ReactDOM from 'react-dom';
import { css } from 'emotion';
import _ from 'lodash';

import { styles } from '../../../utils';
import { useCompositeState } from '../../../hooks';

export const PortalPosition = ({
  targetRef,
  position,
  edgeMargin,
  style,
  children,
  ...rest
}) => {
  const [positionStyle, setPositionStyle] = useCompositeState({});

  const mainClassName = styles.cn([
    Styles.main,
    `${Styles.main}--position-${position}`
  ]);

  const handleUpdatePositionStyle = () => {
    const refStyle = targetRef.current.getBoundingClientRect();
    switch (position) {
      case 'bottom-center':
        return setPositionStyle({
          top: refStyle.y + refStyle.height + edgeMargin,
          left: refStyle.x + (refStyle.width / 2),
        });
      case 'bottom-edge-left':
        return setPositionStyle({
          top: refStyle.y + refStyle.height + edgeMargin,
          left: refStyle.x,
        });
      case 'default':
      default:
        return setPositionStyle({
          top: refStyle.y,
          left: refStyle.x
        });
    }
  };

  React.useEffect(() => {
    handleUpdatePositionStyle();
    const debouncedHandler = _.debounce(handleUpdatePositionStyle, 500);
    window.addEventListener('resize', debouncedHandler);
    return () => {
      window.addEventListener('resize', debouncedHandler);
    };
  }, [targetRef, position, edgeMargin]);

  return ReactDOM.createPortal(
    <div className={mainClassName} style={{...positionStyle, ...style }} {...rest}>
      {children}
    </div>,
    document.body
  );
};

PortalPosition.defaultProps = {
  position: 'default',
  edgeMargin: 16,
  style: {}
};

const Styles = {};
Styles.main = css`
  display: flex;
  position: fixed;
  width: 0px;

  &--position-default {}
  &--position-bottom-center {
    justify-content: center;
  }
  &--position-bottom-edge-left { }
`;
