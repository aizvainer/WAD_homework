// //from an online source
// // JavaScript code to fetch and display posts dynamically
// const dynamicPostsContainer = document.getElementById('dynamicPostsContainer');

// // Create a Set to keep track of post identifiers to avoid duplicates
// const postSet = new Set();

// fetch('https://api.jsonbin.io/v3/b/6545afdf0574da7622c1c4d5')
//     .then((response) => response.json())
//     .then((data) => {
//         const posts = data.record;
//         posts.forEach((post, index) => {
//             // Create a unique identifier for the post
//             const postIdentifier = `${post.author}-${post.text}-${post.timestamp}`;

//             // Check if the post identifier is in the Set, if so, skip it
//             if (postSet.has(postIdentifier)) {
//                 return;
//             }

//             const article = document.createElement('article');
//             const articleInfo = document.createElement('div');
//             const user = document.createElement('div');
//             const userLink = document.createElement('a');
//             userLink.href = './login.html'; // Replace with the actual user link
//             userLink.classList.add('userLink', 'postLink');
//             const authorNameContainer = document.createElement('div');
//             authorNameContainer.classList.add('authorNameContainer');
//             authorNameContainer.appendChild(userLink);
//             const dateDiv = document.createElement('div');
//             dateDiv.textContent = new Date(post.timestamp * 1000).toLocaleDateString();
//             articleInfo.classList.add('articleInfo');
//             user.textContent = post.author;
//             user.classList.add('user');
//             user.appendChild(userLink);
//             articleInfo.appendChild(user);
//             articleInfo.appendChild(dateDiv);

//             const articleBody = document.createElement('div');
//             articleBody.classList.add('articleBody');
//             if (post.image) {
//                 const image = document.createElement('img');
//                 image.src = post.image;
//                 image.alt = post.text;
//                 articleBody.appendChild(image);
//             }

//             const text = document.createElement('div');
//             text.textContent = post.text;
//             articleBody.appendChild(text);

//             const likeBtn = document.createElement('div');
//             likeBtn.classList.add('likeBtn');

//             article.appendChild(articleInfo);
//             article.appendChild(articleBody);
//             article.appendChild(likeBtn);

//             dynamicPostsContainer.appendChild(article);

//             // Add the post identifier to the Set to prevent duplicates
//             postSet.add(postIdentifier);
//         });
//     })
//     .catch((error) => {
//         console.error('Error fetching and displaying posts:', error);
//     });



const dynamicPostsContainer = document.getElementById('dynamicPostsContainer');

// Create a Set to keep track of post identifiers to avoid duplicates
const postSet = new Set();

fetch('../posts.json') // Fetch the local JSON file
    .then((response) => response.json())
    .then((jsonData) => {
        jsonData.forEach((post, index) => {
            // Create a unique identifier for the post
            const postIdentifier = `${post.author}-${post.text}-${post.timestamp}`;

            // Check if the post identifier is in the Set, if so, skip it
            if (postSet.has(postIdentifier)) {
                return;
            }

            const article = document.createElement('article');
            const articleInfo = document.createElement('div');
            const user = document.createElement('div');
            const userLink = document.createElement('a');
            userLink.href = './login.html'; // Replace with the actual user link
            userLink.classList.add('userLink', 'postLink');
            const authorNameContainer = document.createElement('div');
            authorNameContainer.classList.add('authorNameContainer');
            authorNameContainer.appendChild(userLink);
            const dateDiv = document.createElement('div');
            dateDiv.textContent = new Date(post.timestamp * 1000).toLocaleDateString();
            articleInfo.classList.add('articleInfo');
            user.textContent = post.author;
            user.classList.add('user');
            user.appendChild(userLink);
            articleInfo.appendChild(user);
            articleInfo.appendChild(dateDiv);

            const articleBody = document.createElement('div');
            articleBody.classList.add('articleBody');
            if (post.image) {
                const image = document.createElement('img');
                image.src = post.image;
                image.alt = post.text;
                articleBody.appendChild(image);
            }

            const text = document.createElement('div');
            text.textContent = post.text;
            articleBody.appendChild(text);

            const likeBtn = document.createElement('div');
            likeBtn.classList.add('likeBtn');

            article.appendChild(articleInfo);
            article.appendChild(articleBody);
            article.appendChild(likeBtn);

            dynamicPostsContainer.appendChild(article);

            // Add the post identifier to the Set to prevent duplicates
            postSet.add(postIdentifier);
        });
    })
    .catch((error) => {
        console.error('Error fetching and displaying posts:', error);
    });