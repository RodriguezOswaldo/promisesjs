var page = document.getElementById('output');
const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post twp'}
]

function getPosts(){
    setTimeout(() =>{
        let output = '';
        posts.forEach((post, index) =>{
        output += `<li>${post.title}</li>`;
        });
        page.innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post There', body: 'this is post three'}, getPosts);
