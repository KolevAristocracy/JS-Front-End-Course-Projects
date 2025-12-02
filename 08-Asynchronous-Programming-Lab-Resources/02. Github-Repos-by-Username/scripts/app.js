async function loadRepos() {
	const usernameInputEl = document.getElementById('username');
	const reposUlEl = document.getElementById('repos');

	const username = usernameInputEl.value.trim();

	try {
		const res = await fetch(`https://api.github.com/users/${username}/repos`);
		const data = await res.json();

		reposUlEl.innerHTML = '';

		for (const repoObj of data) {
			const liEl = document.createElement('li');
			const aEl = document.createElement('a');

			aEl.textContent = repoObj.full_name;
			aEl.href = repoObj.html_url;
			aEl.target = "_blank" // opens the link in new tab

			liEl.appendChild(aEl);
			reposUlEl.appendChild(liEl);
		};
	} catch (err) {
		// 
	};


}