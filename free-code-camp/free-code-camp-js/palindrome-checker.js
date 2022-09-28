function palimdrome(str) {
  const formatedString = formatInput(str);
  const isPalimdrome = isEqualBackwards(formatedString);

  console.log(isPalimdrome);
}

const formatInput = (input) => {
  let inputedString = input;

  inputedString = inputedString.replace(/[^a-z0-9]/gi, "");
  inputedString = inputedString.toLowerCase();

  return inputedString;
};

function isEqualBackwards(formatedString) {
  const string = formatedString;

  if (string === reverseString(string)) {
    return true;
  }
  return false;
}

const reverseString = (string) => {
  const splittenArray = string.split("");
  splittenArray.reverse();

  const reversedString = splittenArray.join("");

  return reversedString;
};

palimdrome("eye");
