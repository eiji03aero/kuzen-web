import _ from 'lodash';
import { css } from 'emotion';

import * as C from '../primitives';

export const baseScale = (value, option) => {
  const opt = _.defaults(option || {}, {
    unit: 'px',
    modifier: 0
  });
  const val = value * C.BASE_SCALE + opt.modifier;
  return `${val}${opt.unit}`;
};
export const scl = baseScale;

export const mqCond = {};
mqCond.mobileOnly = `(max-width: ${C.BREAK_POINTS.TABLET}px)`;
mqCond.tabletAndAbove = `(min-width: ${C.BREAK_POINTS.TABLET}px)`;

export const mq = {};
mq.mobileOnly =
  `@media screen and (max-width: ${C.BREAK_POINTS.TABLET}px)`;
mq.tabletOnly =
  `@media screen and (min-width: ${C.BREAK_POINTS.TABLET}px) and (max-width: ${C.BREAK_POINTS.PC}px)`;
mq.pcOnly =
  `@media screen and (min-width: ${C.BREAK_POINTS.PC}px)`;
mq.tabletAndAbove =
  `@media screen and (min-width: ${C.BREAK_POINTS.TABLET}px)`;
mq.pcAndAbove =
  `@media screen and (min-width: ${C.BREAK_POINTS.PC}px)`;
mq.tabletAndBelow =
  `@media screen and (max-width: ${C.BREAK_POINTS.PC}px)`;

export const cn = (args) => args.filter(Boolean).join(' ');

export const hide = {};
hide.mobileOnly = css`
  ${mq.mobileOnly} {
    display: none !important;
  }
`;
hide.tabletAndAbove = css`
  ${mq.tabletAndAbove} {
    display: none !important;
  }
`;
hide.pcAndAbove = css`
  ${mq.pcAndAbove} {
    display: none !important;
  }
`;
hide.tabletAndBelow = css`
  ${mq.tabletAndBelow} {
    display: none !important;
  }
`;

export const show = {};
show.mobileOnly = css`
  ${mq.tabletAndAbove} {
    display: none !important;
  }
`;
show.tabletAndAbove = css`
  ${mq.mobileOnly} {
    display: none !important;
  }
`;

export const fonts = {
  medium: `font-family: '${C.FONT_FAMILY.NOTO_SANS_JP_MEDIUM}';`,
  bold: `font-family: '${C.FONT_FAMILY.NOTO_SANS_JP_BOLD}';`,
};
