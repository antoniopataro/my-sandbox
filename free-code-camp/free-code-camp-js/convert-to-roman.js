function convertToRoman(num) {
  num = num.toString();

  const numUnits = num[num.length - 1];
  const numDozens = num[num.length - 2];
  const numHundreds = num[num.length - 3];
  const numThousands = num[num.length - 4];

  const convertedNumber =
    thousands(numThousands) +
    hundreds(numHundreds) +
    dozens(numDozens) +
    units(numUnits);

  console.log(convertedNumber);
}

function units(numUnits) {
  switch (numUnits) {
    case "0":
      return "";
    case "1":
      return "I";
    case "2":
      return "II";
    case "3":
      return "III";
    case "4":
      return "IV";
    case "5":
      return "V";
    case "6":
      return "VI";
    case "7":
      return "VII";
    case "8":
      return "VIII";
    case "9":
      return "IX";
    default:
      return "";
  }
}

function dozens(numDozens) {
  switch (numDozens) {
    case "0":
      return "";
    case "1":
      return "X";
    case "2":
      return "XX";
    case "3":
      return "XXX";
    case "4":
      return "XL";
    case "5":
      return "L";
    case "6":
      return "LX";
    case "7":
      return "LXX";
    case "8":
      return "LXXX";
    case "9":
      return "XC";
    default:
      return "";
  }
}

function hundreds(numHundreds) {
  switch (numHundreds) {
    case "0":
      return "";
    case "1":
      return "C";
    case "2":
      return "CC";
    case "3":
      return "CCC";
    case "4":
      return "CD";
    case "5":
      return "D";
    case "6":
      return "DC";
    case "7":
      return "DCC";
    case "8":
      return "DCCC";
    case "9":
      return "CM";
    default:
      return "";
  }
}

function thousands(numThousands) {
  switch (numThousands) {
    case "0":
      return "";
    case "1":
      return "M";
    case "2":
      return "MM";
    case "3":
      return "MMM";
    default:
      return "";
  }
}

convertToRoman(19);
