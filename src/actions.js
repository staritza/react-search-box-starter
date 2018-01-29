export const types = {
  SAVE_QUERY: "SAVE_QUERY",
};

export const saveSearchQuery = query => {
  return {
    type: types.SAVE_QUERY,
    query
  }
};