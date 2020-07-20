import Login from "./Login";

const validDate = (date: string) => {
  const dateArray = date.split("/");
  const year = parseInt(dateArray[2]);
  const month = parseInt(dateArray[1]);
  const day = parseInt(dateArray[0]);

  // Test for leap year
  const leap =
    year % 400 === 0 || (year % 4 === 0 && !(year % 100 === 0)) ? true : false;

  if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31)
    return false;
  else if (month === 2 && leap && day > 29) return false;
  else if (month === 2 && !leap && day > 28) return false;
  else return true;
};

export const isEmpty = (value: string) => value === "";

export const isValidPostcode = (postcode: string) => {
  const postcodeRegEx = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}$/i;
  return postcodeRegEx.test(postcode);
};

export const isValidDate = (date: string) => {
  const dateRegEx = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  const isDate = dateRegEx.test(date) && validDate(date);

  const newdate = isDate ? date.split("/").reverse().join("-") : null;

  if (newdate) return new Date(newdate).getTime() <= new Date().getTime();

  return false;
};

export default Login;
