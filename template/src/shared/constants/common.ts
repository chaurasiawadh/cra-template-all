export const COMMON_DATE_FORMAT = "D MMM yyyy";
export const COMMON_TIME_FORMAT = "hh:mm A";
export const MONTH_YEAR_DATE_FORMAT = "MMM yyyy";

export const COMMON_UTILS_LIST = [
  {
    name: "checkValidity(value: string, rules: any)",
    output: "boolean",
    desc: "Valid Email, Check MinLength, check MaxLength",
  },
  {
    name: " capitalizeFirstLetter(str: string)",
    output: "string",
    desc: "First letter capital in word or sentence",
  },
  {
    name: "base64Encode(unencoded: string)",
    output: "string",
    desc: "convert in encode",
  },
  {
    name: "base64Decode(encoded: string)",
    output: "string",
    desc: "convert in decode",
  },
  {
    name: "getDobFromAge(age: number)",
    output: "date",
    desc: "get current age",
  },
  {
    name: "calculateFinalPrice(price: number, discountPercent: number)",
    output: "number",
    desc: "calculate Final Price",
  },
  {
    name: "getMobileFormat(mobile: string)",
    output: "string",
    desc: "check valid mobile number",
  },
  {
    name:
      "formatPrice(price: number, isDecimalRequired: boolean, isRSRequried: boolean)",
    output: "string",
    desc: "567390  ===> Rs. 5,67,390",
  },
  {
    name: "getPercentage(total: number, value: number)",
    output: "number",
    desc: "calculate percentage",
  },
  {
    name: "mobileFormat(mobileNumber: string)",
    output: "string",
    desc: "9936123456 ==> +91-99361 23456",
  },
  {
    name: "toCamelCase(string: string)",
    output: "string",
    desc: "capital letter",
  },
  {
    name: "average(arr: number[])",
    output: "number",
    desc: "[1,2,3,4,5] ==> arr.reduce/arr.length ===> 3",
  },
  {
    name: "getBulletPoints(values: string[])",
    output: "string",
    desc:
      "<div dangerouslySetInnerHTML={{ __html: getBulletPoints(['1','2','3','4','5'])}} />",
  },
];

export const DATE_FORMAT_LIST = [
  { format: "YY", output: "18", des: "Two-digit year" },
  { format: "YYYY", output: "2018", des: "Four-digit year" },
  { format: "M", output: "1-12", des: "The month, beginning at 1" },
  { format: "MM", output: "01-12", des: "The month, 2-digits" },
  { format: "MMM", output: "Jan-Dec", des: "The abbreviated month name" },
  { format: "MMMM", output: "January-December", des: " The full month name" },
  { format: "D", output: "1-31", des: "The day of the month" },
  { format: "DD", output: "01-31", des: "  The day of the month, 2-digits" },
  { format: "d", output: "0-6", des: "The day of the week, with Sunday as 0" },
  { format: "dd", output: "Su-Sa", des: "The min name of the day of the week" },
  {
    format: "ddd",
    output: "Sun-Sat",
    des: "  The short name of the day of the week",
  },
  {
    format: "dddd",
    output: "Sunday-Saturday",
    des: "	 The name of the day of the week",
  },
  { format: "H", output: "0-23", des: "The hour" },
  { format: "HH", output: "00-23", des: "The hour, 2-digits" },
  { format: "h", output: "1-12", des: "The hour, 12-hour clock" },
  { format: "hh", output: "01-12", des: "The hour, 12-hour clock, 2-digits" },
  { format: "m", output: "0-59", des: "The minute" },
  { format: "mm", output: "00-59", des: "The minute, 2-digits" },
  { format: "s", output: "0-59", des: "The second" },
  { format: "ss", output: "00-59", des: "The second, 2-digits" },
  { format: "SSS", output: "000-999", des: "  The millisecond, 3-digits" },
  { format: "Z", output: "05:00", des: "  The offset from UTC, ±HH:mm" },
  { format: "ZZ", output: "0500", des: " The offset from UTC, ±HHmm" },
  { format: "A", output: "AM PM", des: "" },
  { format: "a", output: "am pm", des: "" },
];
