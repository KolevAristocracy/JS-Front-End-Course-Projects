// function solve() {
//   const input = document.getElementById('text').value;
//   const currentCase = document.getElementById('naming-convention').value;

//   const command = currentCase
//   let words = input.split(" ")

//   // Convert all word to lowercase
//   words = words.map(word => word.toLowerCase());

//   let result = "";

//   if (command === 'Pascal Case') {
//     for (let word of words) {
//       word = word.replace(word[0], word[0].toUpperCase())
//       result += word
//     }

//   } else if (command === 'Camel Case') {

//     result = words[0]
//     for (let word of words.slice(1)) {
//       word = word.replace(word[0], word[0].toUpperCase())
//       result += word
//     }
//   } else {
//     result = "Error!"
//   }

//   document.getElementById('result').textContent = result

// }

// Second way

function solve() {
  function toCamelCase(text) {
    const words = text.split(" ");
    return words.map((w, i) => (i === 0 ? w.toLowerCase() : capitalize(w))).join("");
  }

  function toPascalCase(text) {
    const words = text.split(" ");
    return words.map(capitalize).join("");
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  const input = document.getElementById('text').value;
  const currentCase = document.getElementById('naming-convention').value;
  const resultContainer = document.getElementById('result');

  let result = "";
  if (currentCase === "Camel Case") result = toCamelCase(input);
  else if (currentCase === "Pascal Case") result = toPascalCase(input);
  else {
    result = "Error!"
  }

  resultContainer.textContent = result;
}