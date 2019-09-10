import React from 'react';

export const Html = ({
  component: Component,
  children,
  ...rest
}) => {
  return <Component dangerouslySetInnerHTML={{__html: children}} { ...rest } />;
};

Html.defaultProps = {
  component: 'div'
};
