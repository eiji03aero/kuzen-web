import React from 'react';
import ReactDOM from 'react-dom';
import { css } from 'emotion';
import CloseIcon from 'mdi-react/CloseIcon';

import { Button } from '../Button';
import { Fade } from '../../utils';

import * as C from '../../../primitives';
import { styles } from '../../../utils';

export const Modal = ({
  shown,
  type,
  children,
  onClose
}) => {
  const [isOpen, setIsOpen] = React.useState(shown);
  const contentRef = React.useRef(null);

  const mainClassName = styles.cn([
    Styles.main,
    `${Styles.main}--type-${type}`
  ]);

  const handleHide = (e) => {
    setIsOpen(false);
  };

  const handleClickContent = (e) => {
    if (e.target === contentRef.current) {
      onClose(e);
    }
  };

  const handleClickCloseButton = (e) => {
    onClose(e);
  };

  React.useEffect(() => {
    if (shown) {
      setIsOpen(true);
    }
  }, [shown]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={mainClassName}>
      <Fade shown={shown} onHide={handleHide} style={{width: '100%', height: '100%'}}>
        <div ref={contentRef} className={Styles.content} onClick={handleClickContent}>
          {children}
        </div>
        <Button
          className={Styles.closeButton}
          size='fit'
          icon={<CloseIcon />}
          onClick={handleClickCloseButton}
        />
      </Fade>
    </div>
    ,
    document.body
  );
};

Modal.defaultProps = {
  type: 'default',
};

const Styles = {};
Styles.main = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__close-button {
    position: absolute;
    top: ${styles.baseScale(4)};
    right: ${styles.baseScale(4)};
    svg {
      width: ${styles.baseScale(4)};
      height: ${styles.baseScale(4)};
      path {
        fill: ${C.COLORS.WHITE};
      }
    }
  }


  &--type-default { }
  &--type-primary { }
  &--type-primary &__content {
    background-color: ${C.COLORS.VERDIGRIS};
  }
`;
Styles.content = Styles.main + '__content';
Styles.closeButton = Styles.main + '__close-button';
