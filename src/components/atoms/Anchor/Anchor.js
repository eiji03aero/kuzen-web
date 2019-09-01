import React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';

import * as C from '../../../primitives';
import { styles } from '../../../utils';

export const Anchor = React.forwardRef(({
  to,
  className,
  invert,
  active,
  ...rest
}, ref) => {
  const hasTo = !!to;
  const Component = hasTo
    ? Link
    : 'a'
  const anchorClassName = styles.cn([
    Styles.main,
    className,
    invert && `${Styles.main}--is-invert`,
    active && `${Styles.main}--is-active`
  ]);
  const props = hasTo ? ({
    to
  }) : ({

  });
  return (
    <Component className={anchorClassName} ref={ref} {...props} {...rest} />
  );
});

Anchor.defaultProps = {
  className: '',
  invert: false
};

const Styles = {};
Styles.main = css`
  ${C.TYPOGRAPHIES.LINK}
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  cursor: pointer;

  &--is-invert {
    ${C.TYPOGRAPHIES.LINK_INVERT}
  }

  &:active, &--is-active {
    color: ${C.COLORS.LAVENDER_INDIGO};
    path {
      fill: ${C.COLORS.LAVENDER_INDIGO};
    }
  }

  &--is-invert { }
  &--is-invert&:active, &--is-invert&--is-active {
    color: ${C.COLORS.WHITE};
    path {
      fill: ${C.COLORS.WHITE};
    }
  }
`;
