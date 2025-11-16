function solve() {
  const text = document.getElementById('input').value;
  let output = document.getElementById('output');
  const allSentences = text.split('.')
    .map((el) => (el[el.length - 1] !== '.' && el !== '') ? el = el.trim() + '.' : el.trim())
    .filter((el) => el.length > 0 && el !== '.');



  output.innerHTML = '';
  for (let i = 0; i < allSentences.length; i += 3) {
    let tempArray = allSentences.slice(i, i + 3);
    let paragraph = document.createElement("p")

    // tempArray.map((el) => el += ".")
    paragraph.textContent = tempArray.join('')
    output.append(paragraph);
  };

}