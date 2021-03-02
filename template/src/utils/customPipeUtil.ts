// Will return string with 1st letter in caps
export const toTitleCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase();
};

// Will return a sentence with making 1st letter of each word in Caps
export const toSentenceCase = (str: string): string => {
  return str.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, (match: any): any => match.toUpperCase());
};
