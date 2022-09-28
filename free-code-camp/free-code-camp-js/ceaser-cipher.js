function rot13(str) {
  const input = str.split("");
  const inputCharCodes = getInputCharCodes(input);
  const cipherCharCodes = setCipherRule(inputCharCodes);
  const decodedCipher = decodeCipher(cipherCharCodes);
  const decodedOutput = buildDecodedOutput(input, decodedCipher);

  console.log(decodedOutput);
}

const getInputCharCodes = (inputUpperCaseArray) => {
  let inputCharCodes = [];

  inputUpperCaseArray.forEach((element) => {
    inputCharCodes.push(element.charCodeAt());
  });

  return inputCharCodes;
};

const setCipherRule = (inputCharCodes) => {
  let cipherCharCodes = [];

  for (let i in inputCharCodes) {
    if (inputCharCodes[i] <= 77) {
      cipherCharCodes.push(inputCharCodes[i] + 13);
    } else if (77 < inputCharCodes[i] && inputCharCodes[i] <= 90) {
      cipherCharCodes.push(inputCharCodes[i] - 13);
    } else {
      cipherCharCodes.push(inputCharCodes[i]);
    }
  }

  return cipherCharCodes;
};

const decodeCipher = (cipherCharCodes) => {
  let decodedCipher = [];

  cipherCharCodes.forEach((element) => {
    decodedCipher.push(String.fromCharCode(element));
  });

  return decodedCipher;
};

const buildDecodedOutput = (inputUpperCaseArray, decodedCipher) => {
  let decodedOutput = inputUpperCaseArray;

  for (let i in decodedOutput) {
    if (/^[A-Z]*$/.test(decodedOutput[i])) {
      decodedOutput[i] = decodedCipher[i];
    }
  }

  return decodedOutput.join("");
};

rot13("FB FNYIVZ ARTB");
