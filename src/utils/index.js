/**
 * Use to convert a single word into title case.
 * @param {*} str
 * @returns
 */
export const ToTitleCase = (str) => {
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
};
