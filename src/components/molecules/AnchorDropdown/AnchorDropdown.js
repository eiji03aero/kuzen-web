import React from 'react';
import { css } from 'emotion';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';

import { Anchor } from '../../atoms';
import { Popover } from '../../utils';
import * as C from '../../../primitives';
import { styles } from '../../../utils';
import { useOnClickOutside, useLockBodyScroll } from '../../../hooks';

export const AnchorDropdown = ({
  label,
  invert,
  anchorProps,
  portalPositionProps,
  bodyCaretProps,
  children
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const bodyRef = React.useRef(null);

  const mainClassName = styles.cn([
    Styles.main,
    isOpen && `${Styles.main}--is-active`,
    invert && `${Styles.main}--is-invert`,
  ]);

  const handleClickAnchor = (e) => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    setIsOpen(false);
  };

  useOnClickOutside({refs:[anchorRef, bodyRef], handler: handleClickOutside});
  useLockBodyScroll(isOpen);

  return (
    <div className={mainClassName}>
      <Anchor
        {...anchorProps}
        invert={invert}
        active={isOpen}
        className={Styles.anchor}
        ref={anchorRef}
        onClick={handleClickAnchor}
        children={
          <React.Fragment>
            {label}
            <ChevronDownIcon className={Styles.caret} />
          </React.Fragment>
        }
      />
      <Popover
        shown={isOpen}
        targetRef={anchorRef}
        portalPositionProps={{
          position: 'bottom-center',
          ...portalPositionProps
        }}
        fadeProps={{
          type: 'down'
        }}
        children={
          <div ref={bodyRef} className={Styles.body}>
            <div className={Styles.bodyCaret} {...bodyCaretProps}/>
            {children}
          </div>
        }
      />
    </div>
  );
};

AnchorDropdown.defaultProps = {
  anchorProps: {},
  portalPositionProps: {},
  bodyCaretProps: {}
};

const Styles = {};
Styles.main = css`
  position: relative;

  &__anchor {
    padding: ${styles.baseScale(1)} 0;
    border-bottom: 1px solid transparent;
  }

  &__caret {
    margin-left: ${styles.baseScale(.5)};
  }

  &__body {
    position: relative;
    padding: ${styles.baseScale(1.5)} ${styles.baseScale(1.25)};
    background-color: ${C.COLORS.WHITE};
    box-shadow: 0 3px 18px rgba(0,0,0,0.16);
    border-radius: ${styles.baseScale(.5)};
  }

  &__body__caret {
    position: absolute;
    border-top: none;
    border-left: ${styles.baseScale(1.5)} solid transparent;
    border-right: ${styles.baseScale(1.5)} solid transparent;
    border-bottom: ${styles.baseScale(1.5)} solid ${C.COLORS.WHITE};
    left: 50%;
    transform: translateX(-50%);
    bottom: 100%;
  }

  &--is-active { }
  &--is-active &__anchor {
    border-color: ${C.COLORS.LAVENDER_INDIGO};
  }

  &--is-invert { }
  &--is-invert&--is-active &__anchor {
    border-color: ${C.COLORS.WHITE};
  }
`;
Styles.anchor = Styles.main + '__anchor';
Styles.caret = Styles.main + '__caret';
Styles.body = Styles.main + '__body';
Styles.bodyCaret = Styles.main + '__body__caret';
