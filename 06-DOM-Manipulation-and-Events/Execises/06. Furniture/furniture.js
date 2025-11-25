document.addEventListener('DOMContentLoaded', solve);

function solve() {
  const generateForm = document.querySelector('form#input');
  const shopForm = document.querySelector('form#shop');
  

  generateForm.addEventListener("submit", handleGenerateItems);
  shopForm.addEventListener("submit", handleBuyFurnitures);


  function handleBuyFurnitures(e) {
    e.preventDefault();
    const resultEl = shopForm.querySelector("textarea");
    const checked = Array.from(shopForm.querySelectorAll("tbody input[type=checkbox]:checked"));

    const boughtFurnitures = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (item of checked) {
      const row = item.closest("tr");
      const name = row.querySelector("td:nth-child(2) p").textContent;
      const price = Number(row.querySelector("td:nth-child(3) p").textContent);
      const decFactor = Number(row.querySelector("td:nth-child(4) p").textContent);

      boughtFurnitures.push(name);
      totalPrice += price;
      totalDecFactor += decFactor;
    };

    const avgDecFactor = totalDecFactor / checked.length;

    resultEl.value = `Bought furniture: ${boughtFurnitures.join(", ")}\nTotal price: ${totalPrice}\nAverage decoration factor: ${avgDecFactor}`


  }

  function handleGenerateItems(e) {
    e.preventDefault();

    const generateFormInput = generateForm.querySelector('textarea').value;

    for (let i = 0; i < generateFormInput.length; i++) {
      allObj = JSON.parse(generateFormInput);
      obj = allObj[i]
      tableRow = document.createElement("tr");

      // image cell
      const tdImg = document.createElement("td");
      const img = document.createElement("img");
      img.src = obj["img"];
      tdImg.appendChild(img);
      tableRow.appendChild(tdImg);

      // name cell
      const tdName = document.createElement("td");
      const pName = document.createElement("p");
      pName.textContent = obj.name;
      tdName.appendChild(pName);
      tableRow.appendChild(tdName);

      // price cell
      const tdPrice = document.createElement("td");
      const pPrice = document.createElement("p");
      pPrice.textContent = obj.price;
      tdPrice.appendChild(pPrice);
      tableRow.appendChild(tdPrice);

      // decoration factor cell
      const tdDec = document.createElement("td");
      const pDec = document.createElement("p");
      pDec.textContent = obj.decFactor;
      tdDec.appendChild(pDec);
      tableRow.appendChild(tdDec);

      //  Mark cell
      const tdMark = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      tdMark.appendChild(checkbox);
      tableRow.appendChild(tdMark);

      shopForm.querySelector('tbody').appendChild(tableRow);

    }
  }

}