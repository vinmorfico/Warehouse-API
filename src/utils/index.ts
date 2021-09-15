export const isNotEmpty = (obj: Object): boolean => {
  for (let _key in obj) {
    return true;
  }
  return false;
};

export const isEmpty = function (obj: Object): boolean {
  for (let _key in obj) {
    return false;
  }
  return true;
};
