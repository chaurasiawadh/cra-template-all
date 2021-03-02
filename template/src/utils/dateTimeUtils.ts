import moment from 'moment';
import { COMMON_DATE_FORMAT, COMMON_TIME_FORMAT } from '../shared/constants/common';

export const getDate = (date: number): string => {
  return moment(date).format('DD-MM-YYYY');
};

// Format - 11-12-1970 09:01
export const getDateWithTime = (date?: any): string => {
  const output = moment(date).format(`${COMMON_TIME_FORMAT} ${COMMON_DATE_FORMAT}`);
  return output === 'Invalid date' ? '-' : output;
};

export const getDateWithTextMonth = (date: any): string => `${moment(date).format(COMMON_DATE_FORMAT)}`;
