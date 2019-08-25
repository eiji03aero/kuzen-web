import * as primitives from '../primitives';

const { BREAK_POINTS: { MOBILE, TABLET, PC } } = primitives;

export const mobileOnly =
  `@media screen and (max-width: ${MOBILE}px)`;
export const tabletOnly =
  `@media screen and (min-width: ${TABLET}px) and (max-width: ${PC}px)`;
export const pcOnly =
  `@media screen and (min-width: ${PC}px)`;

export const tabletAndAbove =
  `@media screen and (min-width: ${TABLET}px)`;
export const pcAndAbove =
  `@media screen and (min-width: ${PC}px)`;
