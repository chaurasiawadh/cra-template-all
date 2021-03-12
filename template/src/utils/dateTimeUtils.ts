import dayjs from 'dayjs';
const CurrentDateAndTime = new Date();

// Thu Mar 11 2021 12:10:01 GMT+0530 (India Standard Time)
export const getFullCurrentDate = () => {
  return CurrentDateAndTime;
}

// Current Date 11/03/2021
export const getCurrentDateFormat = () => {
  return dayjs().format('DD/MM/YYYY');
}

// List of all available formats
// Format	        Output	        Description
// YY	             18	             Two-digit year
// YYYY	           2018	           Four-digit year
// M	             1-12	           The month, beginning at 1
// MM	             01-12	         The month, 2-digits
// MMM	           Jan-Dec	       The abbreviated month name
// MMMM	          January-December The full month name
// D	             1-31	           The day of the month
// DD	             01-31	         The day of the month, 2-digits
// d	             0-6	           The day of the week, with Sunday as 0
// dd	            Su-Sa	           The min name of the day of the week
// ddd	          Sun-Sat	         The short name of the day of the week
// dddd	          Sunday-Saturday	 The name of the day of the week
// H	            0-23    	       The hour
// HH	            00-23	           The hour, 2-digits
// h	            1-12	           The hour, 12-hour clock
// hh	            01-12	           The hour, 12-hour clock, 2-digits
// m	            0-59	           The minute
// mm	            00-59	           The minute, 2-digits
// s	            0-59	           The second
// ss	            00-59	           The second, 2-digits
// SSS	          000-999	         The millisecond, 3-digits
// Z	            +05:00	         The offset from UTC, ±HH:mm
// ZZ	            +0500	           The offset from UTC, ±HHmm
// A	            AM PM	
// a	            am pm

//List of localized formats
// h:mm A	                      8:02 PM
// h:mm:ss A	                  8:02:18 PM
// MM/DD/YYYY	                  01/17/2021
// DD/MM/YYYY	                  17/01/2021
// MMMM D, YYYY	                January 17, 2021
// MMMM D, YYYY h:mm A	        January 17, 2021 8:02 PM
// dddd, MMMM D, YYYY h:mm A	  Sunday, January 17, 2021 8:02 PM
// M/D/YYYY	                    8/17/2021
// MMM D, YYYY	                Jan 17, 2021
// MMM D, YYYY h:mm A	          Jan 17, 2021 8:02 PM  
// ddd, MMM D, YYYY h:mm A	    Sun, Jan 17, 2021 8:02 PM
export const getCurrentDateOrTimeFormat = () => {
  return dayjs(CurrentDateAndTime).format('h:mm A');
};

export const setFormatDateOrTime = (dateOrTime: string) => {
  return dayjs(dateOrTime).format('MMMM D, YYYY');
}
