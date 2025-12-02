async function loadRepos() {
   const divEl = document.getElementById('res');
   const res = await fetch('https://api.github.com/users/testnakov/repos');
   const data = await res.text();

   divEl.textContent = data;
}