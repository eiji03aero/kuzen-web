import React from 'react';
import * as Icons from './SvgIconNameMap.js';

export const SvgIcon = ({
  name,
  ...rest
}) => {
  const Component = Icons[name];
  return <Component {...rest} />;
};
