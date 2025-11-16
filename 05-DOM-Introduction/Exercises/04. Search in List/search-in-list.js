function solve() {
   const input = document.getElementById('searchText').value;
   const towns = document.querySelectorAll('ul#towns > li')


   let matches = 0;

   for (let town of towns) {
      if (input !== "" && town.textContent.includes(input)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   let resultContainer = document.getElementById('result')

   resultContainer.textContent = `${matches} matches found`
}