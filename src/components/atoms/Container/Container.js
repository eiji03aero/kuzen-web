import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import * as primitives from '../../../primitives';
import { styles } from '../../../utils';

const { BREAK_POINTS: { PC }} = primitives;

export const Container = ({
  className,
  component: Component,
  ...rest
}) => {
  const mainClassName = styles.cn([
    className,
    Styles.main,
  ]);

  return (
    <Component className={mainClassName} {...rest} />
  );
};

const Styles = {};
Styles.main = css`
  width: 100%;
  margin: 0 auto;

  ${styles.mq.tabletAndAbove} {
    width: 85%;
  }

  ${styles.mq.pcAndAbove} {
    width: ${PC}px;
  }
`;

Container.propTypes = {
  className: PropTypes.string,
  component: PropTypes.node,
};

Container.defaultProps = {
  className: '',
  component: 'div',
};
