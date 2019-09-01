import React from 'react';

export const useCompositeState = (initialState) => {
  const [state, _setState] = React.useState(initialState);
  const setState = (nextState) => _setState({...state, ...nextState});
  return [state, setState];
};
