import React from 'react';
import _ from 'lodash';

import { styles } from '../utils';

export const useMedia = () => {
  const mediaQueryList = [
    styles.mqCond.mobileOnly,
    styles.mqCond.tabletOnly,
    styles.mqCond.pcOnly
  ].map(q => window.matchMedia(q));

  const getValues = () => {
    return {
      mobile: mediaQueryList[0].matches,
      tablet: mediaQueryList[1].matches,
      pc: mediaQueryList[2].matches,
    };
  };

  const [values, setValues] = React.useState(getValues);

  React.useEffect(() => {
    const handler = _.debounce(() => setValues(getValues), 1000);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  });

  return values;
};
