import React from 'react';

import { PortalPosition } from '../PortalPosition';
import { Fade } from '../Fade';

export const Popover = ({
  targetRef,
  shown,
  portalPositionProps,
  fadeProps,
  children
}) => {
  const [isShown, setIsShown] = React.useState(shown);

  const handleHide = () => {
    setIsShown(false);
  };

  React.useEffect(() => {
    if (shown) {
      setIsShown(true);
    }
  }, [shown]);

  if (!isShown) return null;

  return (
    <PortalPosition targetRef={targetRef} {...portalPositionProps}>
      <Fade shown={shown} onHide={handleHide} {...fadeProps}>
        {children}
      </Fade>
    </PortalPosition>
  );
};

Popover.defaultProps = {
  portalPositionProps: {},
  fadeProps: {}
};
