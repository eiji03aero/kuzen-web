import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import * as primitives from '../../../primitives';
import { mediaQueries, strings } from '../../../utils';

const { BREAK_POINTS: { PC }} = primitives;

export const Container = ({
  className,
  component: Component,
  ...rest
}) => {
  const mainClassName = strings.classnames([
    Styles.main,
    className
  ]);

  return (
    <Component className={mainClassName} {...rest} />
  );
};

const Styles = {};
Styles.main = css`
  width: 100%;
  margin: 0 auto;

  ${mediaQueries.tabletAndAbove} {
    width: 85%;
  }

  ${mediaQueries.pcAndAbove} {
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
