function attachEvents() {
    // Post url http://localhost:3030/jsonstore/blog/posts
    // Comments http://localhost:3030/jsonstore/blog/comments

    const btnLoadPost = document.getElementById('btnLoadPosts');
    const btnViewPost = document.getElementById('btnViewPost');
    const selectEl = document.getElementById('posts');

    btnLoadPost.addEventListener('click', populatePosts);
    btnViewPost.addEventListener('click', viewPost);

    async function loadPosts() {
        const res = await fetch('http://localhost:3030/jsonstore/blog/posts');
        const data = await res.json();
        return data;
    };

    async function loadComments() {
        const res = await fetch('http://localhost:3030/jsonstore/blog/comments');
        const data = await res.json();
        return data
    }

    async function populatePosts() {
        const allPosts = await loadPosts();

        selectEl.innerHTML = '';

        for (const postId in allPosts) {
            const post = allPosts[postId];
            const option = document.createElement('option');

            option.value = postId;
            option.textContent = post.title;

            selectEl.appendChild(option);
        };
    };

    async function viewPost() {
        const allPosts = await loadPosts();
        const allComments = await loadComments();

        const selectElId = selectEl.value;
        const selectedPost = Object.values(allPosts)
            .find(p => p.id === selectElId);

        const allPostComments = Object.values(allComments)
            .filter(c => c.postId === selectedPost.id);

        h1El = document.getElementById('post-title')
        pEl = document.getElementById('post-body');
        ulEl = document.getElementById('post-comments');
        
        h1El.innerHTML = ''
        pEl.innerHTML = ''
        ulEl.innerHTML = ''
        
        h1El.textContent = selectedPost.title;
        pEl.textContent = selectedPost.body;


        

        for (const comment of allPostComments) {
            liEl = document.createElement('li');
            liEl.id = comment.id;
            liEl.textContent = comment.text;

            ulEl.appendChild(liEl);
        };
    };
};

attachEvents();