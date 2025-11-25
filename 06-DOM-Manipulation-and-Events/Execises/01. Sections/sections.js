document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const form = document.querySelector('#task-input');
   const input = document.querySelector('#task-input > input[type="text"]').value;
   const contentEl = document.getElementById('content');

   form.addEventListener('submit', handleGenerateBtnClick);


   function handleGenerateBtnClick(e) {
      e.preventDefault();
      for (string of input.split(', ')) {
         divEl = document.createElement('div');
         pEl = document.createElement('p');
         pEl.style.display = 'none';
         pEl.textContent = string;

         divEl.appendChild(pEl);
         contentEl.appendChild(divEl);
         divEl.addEventListener('click', handleDivClick);
      };
   };

   function handleDivClick(e) {
      e.currentTarget.querySelector('p').style.display = 'block';
   };
};