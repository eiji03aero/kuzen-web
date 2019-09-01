import React from 'react';
import { css } from 'emotion';
import _ from 'lodash';

import { styles } from '../../../utils';

export const Elastic = ({
  shown,
  children,
  style: styleProp,
  ...rest
}) => {
  const [height, setHeight] = React.useState(0);
  const mainRef = React.useRef(null);

  const mainClassName = styles.cn([
    Styles.main,
  ]);

  const style = {
    height,
    ...styleProp
  };

  const handleShow = () => {
    const nextHeight = _.get(mainRef, 'current.firstChild.offsetHeight', 0);
    setHeight(nextHeight);
  };

  const handleHide = () => {
    setHeight(0);
  };

  React.useEffect(() => {
    if (shown) handleShow();
    else handleHide();
  }, [shown]);

  return (
    <div ref={mainRef} className={mainClassName} style={style} {...rest}>
      {children}
    </div>
  );
};

Elastic.defaultProps = {
  style: {}
};

const Styles = {};
Styles.main = css`
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 250ms;

  &--is-shown {
    height: 100%;
  }
`;
