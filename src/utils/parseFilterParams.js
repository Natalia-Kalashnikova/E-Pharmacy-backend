export const parseFilterParams = (query) => {
  const filter = {};
  if (query.category) {
    filter.category = query.category;
  }
  if (query.name) {
    filter.name = query.name;
  }
  return filter;
};
