import React from 'react';
import _ from 'lodash';

export const useOnClickOutside = ({
  refs,
  handler
}) => {
  React.useEffect(() => {
    const listener = (e) => {
      const shouldIgnore = _.some(refs, (r) => {
        return r.current && r.current.contains(e.target)
      });

      if (shouldIgnore) return;

      handler(e);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler]);
};
