import React from 'react';
import { css } from 'emotion';
import _ from 'lodash';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';

import { Anchor, Button } from '../../atoms';
import { Elastic } from '../../utils';
import * as C from '../../../primitives';
import { styles } from '../../../utils';
import { useOnClickOutside } from '../../../hooks';

export const ElasticDropdown = ({
  label,
  invert,
  extraButtonProps,
  className,
  anchorProps,
  children
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const bodyRef = React.useRef(null);

  const mainClassName = styles.cn([
    Styles.main,
    className,
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

  return (
    <div className={mainClassName}>
      <div className={Styles.top}>
        <Anchor
          {...anchorProps}
          invert={invert}
          active={isOpen}
          className={styles.cn([Styles.anchor, _.get(anchorProps, 'className', '')])}
          ref={anchorRef}
          onClick={handleClickAnchor}
          children={
            <React.Fragment>
              {label}
              <ChevronDownIcon className={Styles.caret} />
            </React.Fragment>
          }
        />
      </div>
      <Elastic shown={isOpen}>
        <div>
          <div style={{height: 8}}/>
          <div ref={bodyRef} className={Styles.body}>
            <div style={{height: 8}}/>
            {children}
            {extraButtonProps && (
              <div className={Styles.bodyBottomBox}>
                <Button
                  type='white-outline'
                  size='small'
                  rectangle
                  {...extraButtonProps}
                />
              </div>
            )}
          </div>
        </div>
      </Elastic>
    </div>
  );
};

ElasticDropdown.defaultProps = {
  className: '',
  anchorProps: false,
};

const Styles = {};
Styles.main = css`
  position: relative;
  width: 100%;

  &__top {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__anchor { }

  &__caret {
    position: absolute;
    top: 50%;
    left: calc(100% + ${styles.baseScale(2)});
    transform: translateY(-50%);
  }

  &__body {
    border-top: 2px solid ${C.COLORS.WHITE};
    border-bottom: 2px solid ${C.COLORS.WHITE};

    &__bottom-box {
      display: flex;
      justify-content: center;
      width: 100%;
      padding-bottom: ${styles.baseScale(3)};
    }
  }

  &--is-active { }
  &--is-active &__anchor {
    padding-bottom: ${styles.baseScale(1)};
  }
`;
Styles.top = Styles.main + '__top';
Styles.anchor = Styles.main + '__anchor';
Styles.caret = Styles.main + '__caret';
Styles.body = Styles.main + '__body';
Styles.bodyBottomBox = Styles.main + '__body__bottom-box';
