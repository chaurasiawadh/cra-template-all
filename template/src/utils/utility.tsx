import { ReactNode } from 'react';

export function updateObject<I, P>(oldObject: I, updatedProperties: P): I {
  return {
    ...oldObject,
    ...updatedProperties,
  };
}

export function updateAction<T>(type: string, payload?: T): { type: string, payload?: T } {
  return { type, payload };
}

export const checkValidity = (value: string, rules: any): boolean => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }
  return isValid;
};

export const propertyBasedSort = (a: any, b: any): number => {
  const aDate: Date = new Date(a.start);
  const bDate: Date = new Date(b.start);
  if (aDate < bDate) {
    return -1;
  }
  if (aDate > bDate) {
    return 1;
  }
  return 0;
};

export const success = (msg: ReactNode | string): void => {
  // message.success(msg);
};
export const error = (msg: ReactNode | string): void => {
  // message.error(msg);
};
export const warning = (msg: ReactNode | string): void => {
  // message.warning(msg);
};

export const capitalizeFirstLetter = (str: string): string => {
  return str?.charAt(0)?.toUpperCase() + str?.slice(1);
};

export const base64Encode = (unencoded: string): string => {
  return btoa(unencoded);
};

export const base64Decode = (encoded: string): string => {
  return atob(encoded);
};

export const base64UrlEncode = (unencoded: string): string => {
  const encoded = base64Encode(unencoded);
  return encodeURIComponent(encoded);
};

export const base64UrlDecode = (encoded: string): string => {
  encoded = decodeURIComponent(encoded);
  return base64Decode(encoded);
};

export const extractSecondLevelBaseUrl = (path: string): string => {
  const routePath = path.split('/');
  routePath.length = 3;
  return routePath.join('/');
};

export const getDobFromAge = (age: number): Date => {
  const d = new Date();
  const curYear = d.getFullYear();
  return new Date(d.setFullYear(curYear - age));
};

export const array_move = (arr: any[], old_index: number, new_index: number): any[] => {
  if (new_index >= arr.length) {
    let k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
};

export const calculateFinalPrice = (price: number, discountPercent: number): number => {
  discountPercent = discountPercent < 0 || discountPercent === undefined ? 0 : discountPercent > 100 ? 100 : discountPercent;
  price = price === undefined ? 0 : price;
  return Math.round((price - ((discountPercent / 100) * price)) || 0);
};

export const calculateDiscountPercentage = (price: number, discountedPrice: number): number => {
  price = price < 0 || price === undefined ? 0 : price;
  discountedPrice = discountedPrice === undefined ? 0 : discountedPrice;
  return Math.round(((price - discountedPrice) / price) * 100 || 0);
};

export const getMobileFormat = (mobile: string): string => {
  if (mobile && typeof mobile === 'string') {
    mobile = mobile.toString();
    return `+91 ${mobile.substr(0, 3)} ${mobile.substr(3, 4)} ${mobile.substr(7, 3)}`;
  }
  return '';
};

export const formatPrice = (price: number, isDecimalRequired: boolean = true, isRSRequried: boolean = true): string => {
  if (isDecimalRequired && isRSRequried) {
    return 'Rs. ' + (price || 0).toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
  } else if (isDecimalRequired && !isRSRequried) {
    return (price || 0).toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
  } else if (!isDecimalRequired && isRSRequried) {
    return 'Rs. ' + (price || 0).toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
  } else if (!isDecimalRequired && !isRSRequried) {
    return (price || 0).toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
  } else {
    return 'Rs. ' + (price || 0).toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
  }
};

export const getPercentage = (total: number, value: number): number => {
  return (total && value) ? Math.round((value / total) * 100) : 0;
};

export const mobileFormat = (mobileNumber: string): string => {
  return mobileNumber.substr(4).split(' ').join('');
};

export const toCamelCase = (string: string): string => {
  return string
    .replace(/\s(.)/g, ($1: any): any => $1.toUpperCase())
    .replace(/\s/g, ' ')
    .replace(/^(.)/, ($1: any): any => $1.toUpperCase());
};

export const checkIsSSo = (): boolean => {
  const paths = window?.location?.pathname?.split('/');
  if (paths && paths.length && paths[1] === 'sl') {
    return true;
  } else {
    return false;
  }
};

export const average = (arr: number[]): number => arr.reduce((p: number, c: number): number => p + c, 0) / arr.length;

export const getBulletPoints = (values: string[]): string => {
  if (values) {
    let result = `<ul style="width: 100%; padding-inline-start: 15px; margin-bottom: 0;">`;
    values.forEach((x: string): void => {
      result += '<li>' + x + '</li>';
    });
    result = result + '</ul>';
    return result;
  }
  return '';
};
