function solve() {
   const input = document.getElementById('searchField').value.toLowerCase();
   const records = Array.from(document.querySelectorAll('tbody > tr'));

   for (row of records) {
      row.classList.remove("select");
      if (input !== "" && row.textContent.toLowerCase().includes(input)) {
         row.classList.add("select");
      }
   }
}