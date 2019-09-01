import React from 'react';
import { css } from 'emotion';

import * as C from '../../../primitives';
import { styles } from '../../../utils';

export const Button = ({
  type,
  size,
  rectangle,
  className,
  label,
  icon,
  component: Component,
  onClick,
}) => {
  const buttonClassName = styles.cn([
    Styles.main,
    `${Styles.main}--size-${size}`,
    `${Styles.main}--type-${type}`,
    rectangle && `${Styles.main}--is-rectangle`,
    className
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
    border: 1px solid ${C.COLORS.TAUPE};
    color: ${C.COLORS.TAUPE};
    &:hover {
      background-color: ${C.COLORS.WHITE};
      color: ${C.COLORS.LAVENDER_INDIGO};
    }
  }
  &--type-white-outline {
    background-color: transparent;
    border: 1px solid ${C.COLORS.WHITE};
    color: ${C.COLORS.WHITE};
    &:hover {
      background-color: ${C.COLORS.WHITE};
      color: ${C.COLORS.LAVENDER_INDIGO};
    }
  }


  &--size-default {
    height: ${styles.baseScale(4.5)};
    padding: 0 ${styles.baseScale(3.5)};
    border-radius: ${styles.baseScale(2.25)};
    font-size: ${styles.baseScale(2.25)};
  }
  &--size-small {
    height: ${styles.baseScale(3.75)};
    padding: 0 ${styles.baseScale(2.25)};
    font-size: ${styles.baseScale(1.75)};
  }
  &--size-medium {
    height: ${styles.baseScale(6.25)};
    padding: 0 ${styles.baseScale(4)};
    border-radius: ${styles.baseScale(3)};
    font-size: ${styles.baseScale(3)};
  }
  &--size-fit {
    height: auto;
    padding: 0;
  }


  &--is-rectangle {
    border-radius: 0 !important;
  }
`;
