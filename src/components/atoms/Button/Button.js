import React from 'react';
import { css } from 'emotion';

import * as C from '../../../primitives';
import { styles } from '../../../utils';

export const Button = ({
  type,
  size,
  rectangle,
  block,
  className,
  label,
  icon,
  component: Component,
  onClick,
}) => {
  const buttonClassName = styles.cn([
    className,
    Styles.main,
    `${Styles.main}--size-${size}`,
    `${Styles.main}--type-${type}`,
    rectangle && `${Styles.main}--is-rectangle`,
    block && `${Styles.main}--is-block`,
  ]);

  return (
    <Component
      className={buttonClassName}
      onClick={onClick}
      children={
        <>
          { icon }
          { label }
        </>
      }
    />
  );
};

Button.defaultProps = {
  type: 'default',
  size: 'default',
  rectangle: false,
  block: false,
  className: '',
  component: 'button'
};

const Styles = {};
Styles.main = css`
  display: flex;
  justify-content: center;
  font-size: 16px;
  transition: background-color 250ms, color 250ms;


  &--type-default {}
  &--type-secondary {
    background-color: ${C.COLORS.LAVENDER_INDIGO};
    border: none;
    color: ${C.COLORS.WHITE};
    &:hover {
      background-color: ${C.COLORS.WHITE};
      border: 2px solid ${C.COLORS.LAVENDER_INDIGO};
      color: ${C.COLORS.LAVENDER_INDIGO};
    }
  }
  &--type-secondary-outline {
    background-color: transparent;
    border: 2px solid ${C.COLORS.LAVENDER_INDIGO};
    color: ${C.COLORS.LAVENDER_INDIGO};
    &:hover {
      background-color: ${C.COLORS.LAVENDER_INDIGO};
      border: none;
      color: ${C.COLORS.WHITE};
    }
  }
  &--type-white {
    background-color: ${C.COLORS.WHITE};
    border: none;
    color: ${C.COLORS.VERDIGRIS};
    &:hover {
      background-color: ${C.COLORS.WHITE};
      color: ${C.COLORS.LAVENDER_INDIGO};
    }
  }
  &--type-black-outline {
    background-color: transparent;
    border: 2px solid ${C.COLORS.TAUPE};
    color: ${C.COLORS.TAUPE};
    &:hover {
      background-color: ${C.COLORS.WHITE};
      color: ${C.COLORS.LAVENDER_INDIGO};
    }
  }
  &--type-white-outline {
    background-color: transparent;
    border: 2px solid ${C.COLORS.WHITE};
    color: ${C.COLORS.WHITE};
    &:hover {
      background-color: ${C.COLORS.WHITE};
      color: ${C.COLORS.LAVENDER_INDIGO};
    }
  }


  &--size-default {
    height: ${styles.scl(4.5)};
    padding: 0 ${styles.scl(3.5)};
    border-radius: ${styles.scl(2.25)};
    font-size: ${styles.scl(2.25)};
  }
  &--size-small {
    height: ${styles.scl(3.75)};
    padding: 0 ${styles.scl(2.25)};
    font-size: ${styles.scl(1.75)};
  }
  &--size-medium {
    height: ${styles.scl(6.25)};
    padding: 0 ${styles.scl(4)};
    border-radius: ${styles.scl(3)};
    font-size: ${styles.scl(3)};
  }
  &--size-fit {
    height: auto;
    padding: 0;
  }


  &--is-rectangle {
    border-radius: 0 !important;
  }

  &--is-block {
    width: 100%;
  }
`;
