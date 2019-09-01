import React from 'react';
import { css } from 'emotion';

const overflowHidden = css`
  overflow: hidden !important;
`;

export const useLockBodyScroll = (isLocked) => {
  const bodyElement = document.body;

  // add/remove based on argument
  React.useEffect(() => {
    bodyElement.classList[isLocked ? 'add' : 'remove'](overflowHidden);
  }, [isLocked]);

  // make sure to remove when component is removed
  React.useEffect(() => {
    return () => {
      bodyElement.classList.remove(overflowHidden);
    };
  }, []);
};
