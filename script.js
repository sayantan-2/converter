document.querySelectorAll(".box").forEach((box) => {
  const textarea = box.querySelector("textarea");
  const copyButton = box.querySelector("button:nth-child(1)");
  const pasteButton = box.querySelector("button:nth-child(2)");
  const clearButton = box.querySelector("button:nth-child(3)");
  const convertButton = box.querySelector("button:nth-child(4)");

  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(textarea.value).then(
      () => {
        console.log("Copying to clipboard was successful!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  });

  pasteButton.addEventListener("click", async () => {
    try {
      const clipText = await navigator.clipboard.readText();
      textarea.value += clipText;
      console.log("Pasting from clipboard was successful!");
    } catch (err) {
      console.error("Could not paste text: ", err);
    }
  });

  clearButton.addEventListener("click", () => {
    textarea.value = "";
    console.log("Clearing textarea was successful!");
  });

  convertButton.addEventListener("click", () => {
    const text = textarea.value;
    let binary;
    switch (box.querySelector("h2").textContent) {
      case "BINARY":
        binary = text;
        break;
      case "DECIMAL":
        binary = window.decimalToBinary(text);
        break;
      case "HEXADECIMAL":
        binary = window.hexToBinary(text);
        break;
      case "OCTAL":
        binary = window.octalToBinary(text);
        break;
      case "ASCII":
        binary = window.asciiToBinary(text);
        break;
      case "GRAY":
        binary = window.grayToBinary(text);
        break;
      default:
        console.error("Unknown conversion type");
    }

    // Update all other boxes
    document.querySelectorAll(".box").forEach((otherBox) => {
      if (otherBox !== box) {
        const otherTextarea = otherBox.querySelector("textarea");
        switch (otherBox.querySelector("h2").textContent) {
          case "BINARY":
            otherTextarea.value = binary;
            break;
          case "DECIMAL":
            otherTextarea.value = window.binaryToDecimal(binary);
            break;
          case "HEXADECIMAL":
            otherTextarea.value = window.binaryToHex(binary);
            break;
          case "OCTAL":
            otherTextarea.value = window.binaryToOctal(binary);
            break;
          case "ASCII":
            otherTextarea.value = window.binaryToAscii(binary);
            break;
          case "GRAY":
            otherTextarea.value = window.binaryToGray(binary);
            break;
          default:
            console.error("Unknown conversion type");
        }
      }
    });
  });
});

// Select the "Try" button
const tryButton = document.querySelector("#try button");

tryButton.addEventListener("click", () => {
  // Generate a random number
  const randomNum = Math.floor(Math.random() * 1000);

  // Find the decimal box
  const decimalBox = Array.from(document.querySelectorAll(".box")).find(
    (box) => box.querySelector("h2").textContent === "DECIMAL"
  );

  if (decimalBox) {
    // Update the textarea in the decimal box
    const textarea = decimalBox.querySelector("textarea");
    textarea.value = randomNum.toString();

    // Trigger the convert button click event in the decimal box
    const convertButton = decimalBox.querySelector("button:nth-child(4)");
    convertButton.click();
  }
});
