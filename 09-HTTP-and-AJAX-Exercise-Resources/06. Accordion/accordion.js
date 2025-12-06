const listUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
const detailsUrl = 'http://localhost:3030/jsonstore/advanced/articles/details';
const mainSection = document.getElementById('main');

loadArticles()

async function loadArticles() {
    const res = await fetch(listUrl);
    const data = await res.json();

    for (const article of Object.values(data)) {
        const articleId = article._id;
        const articleTitle = article.title;

        const accordionDiv = document.createElement('div');
        accordionDiv.classList.add('accordion');

        const headDiv = document.createElement('div');
        headDiv.classList.add('head');


        const spanEl = document.createElement('span');
        spanEl.textContent = articleTitle;

        const buttonEl = document.createElement('button');
        buttonEl.classList.add('button');
        buttonEl.id = articleId;
        buttonEl.textContent = 'More';

        headDiv.appendChild(spanEl);
        headDiv.appendChild(buttonEl);

        accordionDiv.appendChild(headDiv);

        const extraDiv = document.createElement('div');
        extraDiv.classList.add('extra');
        
        accordionDiv.appendChild(extraDiv);
        
        let isExpanded = false;
        let isFetched = false;
        buttonEl.addEventListener('click', async () => {

            if (isExpanded) {
                buttonEl.textContent = 'More';
                extraDiv.style.display = 'none';
                isExpanded = false;
            } else {
                buttonEl.textContent = 'Less';
                extraDiv.style.display = 'block';
                isExpanded = true;

                if (!isFetched) {
                    isFetched = true;

                    const res = await fetch(`${detailsUrl}/${articleId}`);
                    const articleData = await res.json();
                    const pEl = document.createElement('p')
                    pEl.textContent = articleData.content;
                    extraDiv.appendChild(pEl);
                }
            }
        });

        mainSection.append(accordionDiv);

    }
}






