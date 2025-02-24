export const BASE_SCALE = 8;

export const BREAK_POINTS = {
  MOBILE: 480,
  TABLET: 768,
  PC: 1024
};

export const HEADER_HEIGHT = {
  MOBILE: BASE_SCALE * 7.5,
  TABLET: BASE_SCALE * 10,
  PC: BASE_SCALE * 17
};

export const COLORS = {
  GHOST_WHITE: 'rgba(248, 250, 255, 1)',
  WHITE_SMOKE: 'rgba(246, 246, 246, 1)',
  WHITE: '#ffffff',
  DIM_GREY: 'rgba(0, 0, 0, 0.16)',
  TAUPE: 'rgba(58, 55, 56, 1)',
  MANATEE: 'rgba(155, 154, 150, 1)',
  GAINSBORO: 'rgba(220, 219, 216, 1)',
  LAVENDER_INDIGO: 'rgba(146, 93, 226, 1)',
  LAVENDER_INDIGO_56: 'rgba(146, 93, 226, 0.56)',
  VERDIGRIS: 'rgba(71, 192, 176, 1)',
};

export const FONT_FAMILY = {
  NOTO_SANS_JP_REGULAR: 'Noto Sans JP Regular',
  NOTO_SANS_JP_MEDIUM: 'Noto Sans JP Medium',
  NOTO_SANS_JP_BOLD: 'Noto Sans JP Bold',
};

export const TYPOGRAPHIES = {
  LINK: `
    font-family: '${FONT_FAMILY.NOTO_SANS_JP_MEDIUM}';
    font-size: 18px;
    line-height: 22px;
    color: ${COLORS.TAUPE};
  `,
  LINK_INVERT: `
    font-family: '${FONT_FAMILY.NOTO_SANS_JP_MEDIUM}';
    font-size: 18px;
    line-height: 22px;
    color: ${COLORS.WHITE};
  `
};
