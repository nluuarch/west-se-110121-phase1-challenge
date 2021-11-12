fetch("http://localhost:3000/images/1")
    .then((response) => response.json())
    // .then((data) => console.log(data));
    .then((data) => renderFlataGram(data));

// The code below illustrates my understaning of where I should be going:
// But why is data not connectiong to functions below?
const flatagramContainer = document.querySelector(".image-container");

function renderFlataGram(data){
    const title = document.getElementById('#card-title');
    title.textContent = data.title
    
    const picImg = document.querySelector('.image');
    picImg.src = data.image

    const picLikesCount = document.querySelector("#likes-count")
    picLikes = data.like

    const commentsList = document.querySelector("#comments-list")
    commentsList.innerText = data.comments.content

    flatagramContainer.append(title, picImg, picLikes, commentsList)
}


let likeBttn = document.querySelector('#like-button')
likeBttn.addEventListener('click', increaseLike)
function increaseLike(e) {
    e.preventDefault()
    picLikes.innerText = ++data.likes
}



let commentForm = document.querySelector("#comment-form")
commentForm.addEventListener('submit', addComments);
    function addComments(e) {
        e.preventDefault();
        let newComment = document.createElement('li');
        newComment.textContent = e.target.comment.value;
        commentBar.append(newComment);
        form.reset();
    }