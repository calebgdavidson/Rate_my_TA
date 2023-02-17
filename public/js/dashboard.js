const currentRates = document.querySelector('#currentRates');
const newRate = document.querySelector('#newRate');
const newPost = document.querySelector('#newPost');
const createNewPost = document.querySelector('#createNew');

function hideCreateNew(){
    createNewPost.hidden = true;
}

hideCreateNew();


function handleNewPost(event) {
    event.preventDefault();
    console.log("clicked");
    currentRates.hidden = true;
    newPost.hidden = true;
    createNewPost.hidden = false;
}


async function handleNewRate(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (!title || !content) {
        alert('Please fill out all fields');
        return;
    }
    const rate = {
        title: title,
        content: content,
    };

    const res = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ rate }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
        document.location.replace('/dashboard');
    } else {
        alert("Failed to create new post");
    }
};


document.querySelector('#newRate').addEventListener('submit', handleNewRate);
document.querySelector('#newPost').addEventListener('submit', handleNewPost);