import React from 'react';
import { css } from 'emotion';

import * as C from '../../../primitives';
import { styles } from '../../../utils';

export const DropdownChoice = ({
  label,
  leading,
  size,
  onClick
}) => {
  const mainClassName = styles.cn([
    Styles.main,
    `${Styles.main}--size-${size}`
  ]);
  return (
    <button className={mainClassName} onClick={onClick}>
      {!!leading && (
        <span className={Styles.leading}>
          {leading}
        </span>
      )}
      <span className={Styles.label}>
        {label}
      </span>
    </button>
  );
};

DropdownChoice.defaultProps = {
  size: 'default',
};

const Styles = {};
Styles.main = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${styles.scl(5)};
  padding: 0 ${styles.scl(0.5)};
  background-color: transparent;
  border-radius: ${styles.scl(.5)};
  font-size: ${styles.scl(2)};
  color: ${C.COLORS.TAUPE};
  cursor: pointer;
  white-space: pre;
  transition: color 250ms, background-color 250ms;

  path {
    fill: ${C.COLORS.TAUPE};
  }

  &__leading {
    svg {
      width: 14px;
      height: 14px;
    }
    path {
      fill: ${C.COLORS.LAVENDER_INDIGO};
    }
  }

  &__label { }

  &__leading + &__label {
    margin-left: ${styles.scl(2)};
  }

  &:hover {
    background-color: ${C.COLORS.VERDIGRIS};
    color: ${C.COLORS.WHITE};

    path {
      fill: ${C.COLORS.WHITE};
    }
  }


  &--size-default { }
  &--size-wide {
    padding: 0 ${styles.scl(2)};
  }
`;
Styles.leading = Styles.main + '__leading';
Styles.label = Styles.main + '__label';
