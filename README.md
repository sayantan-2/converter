# Code Conversion Tool

[Try here⤴](https://bit-converter.netlify.app)
## Overview
This is a web-based tool designed to convert between different numerical systems. It supports conversions between binary, decimal, hexadecimal, octal, ASCII, and Gray code. This tool is especially useful for those studying computer science, programming, or any field that requires working with different numerical systems.

## Features
- **Conversions**: Convert numbers between binary, decimal, hexadecimal, octal, ASCII, and Gray code.
- **User-friendly Interface**: Each conversion has its own box with a clear label, a text area for input, and buttons for various actions.
- **Action Buttons**: Each box has buttons for copying the converted number, pasting a number into the text area, clearing the text area, and converting the number in the text area.
- **Random Number Generator**: A "Try a Random number" button is available for users to practice their conversion skills.

## Usage
1. Enter a number in the text area of the box corresponding to the format of your number.
2. Click the "CONVERT" button in the same box to convert the number to all other formats.
3. Use the "COPY" button to copy the converted number.
4. Use the "PASTE" button to paste a number into the text area.
5. Use the "CLEAR" button to clear the text area.
6. Click the "Try a Random number" button to generate a random number for conversion practice.

# How this works

This project is a number conversion tool that can convert between different number systems such as binary, decimal, hexadecimal, octal, ASCII, and Gray code. The tool is implemented in JavaScript and uses the browser's built-in `querySelector` and `addEventListener` methods to interact with the HTML document.

## Conversion Process

When a user enters a number in one of the text areas and clicks the corresponding "Convert" button, the following steps occur:

1. The event listener for the "Convert" button is triggered. This listener is defined in the `script.js` file.

2. The entered number is retrieved from the text area in the same box as the "Convert" button.

3. The type of conversion is determined based on the heading (`h2` element) in the same box as the "Convert" button. This could be "BINARY", "DECIMAL", "HEXADECIMAL", "OCTAL", "ASCII", or "GRAY".

4. Depending on the type of conversion, the appropriate conversion function from the `converter.js` file is called to convert the entered number to binary. For example, if the type of conversion is "DECIMAL", the `decimalToBinary` function is called.

5. The binary result is then used as the base for converting into other number systems. For each of the other boxes (excluding the one where the "Convert" button was clicked), the binary result is converted to the number system specified by the heading in that box. The corresponding conversion function from the `converter.js` file is used for this purpose. For example, if the heading is "HEXADECIMAL", the `binaryToHex` function is called.

6. The result of each conversion is displayed in the text area in the corresponding box.

## Conversion Functions

The conversion functions are defined in the `converter.js` file. Each function takes a string as input and returns a string as output. The functions check the validity of the input and return an error message if the input is invalid. If an unexpected error occurs during the conversion, the function catches the error and returns a message with the error details.

Here is a brief overview of each function:

- `asciiToBinary(text)`: Converts a string of ASCII characters to binary.
- `binaryToAscii(binary)`: Converts a binary string to ASCII characters.
- `decimalToBinary(decimalStr)`: Converts a decimal number to binary.
- `binaryToDecimal(binary)`: Converts a binary string to a decimal number.
- `hexToBinary(hexStr)`: Converts a hexadecimal string to binary.
- `binaryToHex(binary)`: Converts a binary string to a hexadecimal string.
- `octalToBinary(octal)`: Converts an octal number to binary.
- `binaryToOctal(binary)`: Converts a binary string to an octal number.
- `grayToBinary(gray)`: Converts a Gray code string to binary.
- `binaryToGray(binary)`: Converts a binary string to Gray code.

## Try It Out

There is also a "Try" button that generates a random number, puts it in the decimal box, and triggers the conversion. This is a great way to test the functionality of the tool and see how the conversions work.

## Conclusion

This number conversion tool is a great example of how JavaScript can be used to create interactive web applications. It demonstrates the use of event listeners, query selectors, and conversion functions to provide a useful and educational tool for learning about different number systems. Enjoy exploring and using this tool! 😊

## Installation
1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.

## Tech Stack
The website is built using the following technologies:

- **HTML5**: For structuring the content of the website.
- **CSS3**: For styling the website and making it responsive.
- **JavaScript**: For adding interactivity to the website, such as converting numbers, copying and pasting numbers, and clearing text areas.

## Contributing
- Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
- If you find this project useful, please consider giving it a star :star: on GitHub. Your support helps motivate continued development and maintenance. We appreciate your contribution and feedback!
