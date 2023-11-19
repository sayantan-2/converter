window.asciiToBinary = function (text) {
  try {
    if (typeof text !== "string") {
      return "Invalid Input!";
    }
    const binary = [...text]
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join("");
    return binary;
  } catch (error) {
    return `An unexpected error occurred: ${error}`;
  }
};

window.binaryToAscii = function (binary) {
  try {
    if (!/^[01]+$/.test(binary)) {
      return "Invalid Input!";
    }
    const text = binary
      .match(/.{1,8}/g)
      .map((byte) => String.fromCharCode(parseInt(byte, 2)))
      .join("");
    return text;
  } catch (error) {
    return `An unexpected error occurred: ${error}`;
  }
};

window.decimalToBinary = function (decimalStr) {
  try {
    const decimal = parseInt(decimalStr);
    if (isNaN(decimal) || decimal < 0) {
      return "Invalid Input!";
    }
    const binary = decimal.toString(2);
    return binary;
  } catch (error) {
    return `An unexpected error occurred: ${error}`;
  }
};

window.binaryToDecimal = function (binary) {
  try {
    if (!/^[01]+$/.test(binary)) {
      return "Invalid Input!";
    }
    const decimal = parseInt(binary, 2);
    return decimal;
  } catch (error) {
    return `An unexpected error occurred: ${error}`;
  }
};

window.hexToBinary = function (hexStr) {
  try {
    if (typeof hexStr !== "string" || !/^[0-9A-Fa-f]+$/.test(hexStr)) {
      return "Invalid Input!";
    }
    const binary = hexStr
      .toUpperCase()
      .split("")
      .map((char) => ("0000" + parseInt(char, 16).toString(2)).slice(-4))
      .join("");
    return binary;
  } catch (error) {
    return `An unexpected error occurred: ${error}`;
  }
};

window.binaryToHex = function (binary) {
  try {
    if (!/^[01]+$/.test(binary)) {
      return "Invalid Input!";
    }
    const hexValue = parseInt(binary, 2).toString(16).toUpperCase();
    return hexValue;
  } catch (error) {
    return `An unexpected error occurred: ${error}`;
  }
};

window.octalToBinary = function (octal) {
  try {
    if (!/^[0-7]+$/.test(octal)) {
      return "Invalid Input!";
    }
    const binary = octal
      .split("")
      .map((char) => ("000" + parseInt(char, 8).toString(2)).slice(-3))
      .join("");
    return binary;
  } catch (error) {
    return `An unexpected error occurred: ${error}`;
  }
};

window.binaryToOctal = function (binary) {
  try {
    if (!/^[01]+$/.test(binary)) {
      return "Invalid Input!";
    }
    const octal = parseInt(binary, 2).toString(8);
    return octal;
  } catch (error) {
    return `An unexpected error occurred: ${error}`;
  }
};

window.grayToBinary = function (gray) {
  try {
    if (!/^[01]+$/.test(gray)) {
      return "Invalid Input!";
    }
    let binary = gray[0];
    for (let i = 1; i < gray.length; i++) {
      binary += String(Number(binary[i - 1] !== gray[i]));
    }
    return binary;
  } catch (error) {
    return `An unexpected error occurred: ${error}`;
  }
};

window.binaryToGray = function (binary) {
  try {
    if (!/^[01]+$/.test(binary)) {
      return "Invalid Input!";
    }
    let gray = binary[0];
    for (let i = 1; i < binary.length; i++) {
      gray += String(Number(binary[i - 1] !== binary[i]));
    }
    return gray;
  } catch (error) {
    return `An unexpected error occurred: ${error}`;
  }
};
