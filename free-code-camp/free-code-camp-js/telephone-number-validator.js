function telephoneCheck(str) {
  if (!isStringFormatValid(str)) {
    console.log(false);
    return;
    // return false;
  }

  if (!isCountryValid(str)) {
    console.log(false);
    return;
    // return false;
  }

  if (!isAreaCodeValid(str)) {
    console.log(false);
    return;
    // return false;
  }

  if (!isPhoneNumberValid(str)) {
    console.log(false);
    return;
    // return false;
  }

  console.log(true);
  // return true;
}

const inputToNumeric = (str) => {
  const formatedInput = str
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll(" ", "")
    .replaceAll("-", "");

  return formatedInput;
};

const isStringFormatValid = (str) => {
  const formatedInput = inputToNumeric(str);

  if (str.includes("(") || str.includes(")")) {
    if (!(str.includes("(") && str.includes(")"))) {
      return false;
    }
  }

  if (
    formatedInput.length > 11 ||
    formatedInput.length < 10 ||
    !/^[0-9-() ]*$/.test(str)
  ) {
    return false;
  }
  return true;
};

const isCountryValid = (str) => {
  const formatedInput = inputToNumeric(str);

  if (str[0] === "-") {
    return false;
  }

  if (formatedInput.length == 11 && formatedInput[0] !== "1") {
    return false;
  }
  return true;
};

const isAreaCodeValid = (str) => {
  const formatedInput = inputToNumeric(str);

  if (formatedInput === str) {
    return true;
  }

  const areaCode = formatedInput.substring(
    formatedInput.length - 10,
    formatedInput.length - 7
  );

  if (
    str.includes(`(${areaCode})`) ||
    str.includes(`${areaCode}-`) ||
    str.includes(` ${areaCode} `)
  ) {
    return true;
  }

  return false;
};

const isPhoneNumberValid = (str) => {
  const formatedInput = inputToNumeric(str);

  const phoneNumberPrefix = formatedInput.substring(
    formatedInput.length - 7,
    formatedInput.length - 4
  );

  const phoneNumberSubscriber = formatedInput.substring(
    formatedInput.length - 4,
    formatedInput.length
  );

  if (
    str.includes(`${phoneNumberPrefix}-${phoneNumberSubscriber}`) ||
    str.includes(`${phoneNumberPrefix} ${phoneNumberSubscriber}`) ||
    str.includes(`${phoneNumberPrefix}${phoneNumberSubscriber}`)
  ) {
    return true;
  }

  return false;
};

telephoneCheck("2 (757) 622-7382");
