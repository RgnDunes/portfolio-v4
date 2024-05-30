export const sortSanityDataByKey = (data, key = "id", desc = true) => {
  return data.sort((a, b) => {
    return desc ? b[key] - a[key] : a[key] - b[key];
  });
};
