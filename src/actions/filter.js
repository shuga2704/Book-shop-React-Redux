/* eslint-disable import/prefer-default-export */
export const setFilterAction = filter => ({
  type: 'SET_FILTER',
  payload: filter,
});

export const setQueryAction = query => ({
  type: 'SET_QUERY',
  payload: query,
});
