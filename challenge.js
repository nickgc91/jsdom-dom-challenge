// event.preventDefault();

let mycounter =  document.querySelector('#counter')

// (1) As a user, I should see the timer increment every second once the page has loaded.
// const intervalId = setInterval(() => mycounter.innerText++, 1000);

// (2) As a user, I can manually increment and decrement the counter as I like.

let minusButton = document.querySelector("#\\-");
minusButton.addEventListener("click", function() {
    mycounter.innerText = parseInt(mycounter.innerText) - 1
});

let addButton = document.querySelector('#\\+');
addButton.addEventListener("click", function() {
    mycounter.innerText = parseInt(mycounter.innerText) + 1
});

function likeClick() {
    if (likeCounter[parseInt(mycounter.innerHTML)] >= 1) {
        likeCounter[parseInt(mycounter.innerHTML)] = likeCounter[parseInt(mycounter.innerHTML)] + 1 
    } else { likeCounter[parseInt(mycounter.innerHTML)] = 1}
    let myList = document.querySelector('.likes')
    let listNode = document.createElement("LI");
    let textnode = document.createTextNode(`${mycounter.innerHTML} has been liked ${likeCounter[parseInt(mycounter.innerHTML)]} times`)
    listNode.appendChild(textnode)
    myList.appendChild(listNode)
}

let likeCounter = []
let likeButton = document.querySelector('#\\<3');
likeButton.addEventListener('click', likeClick) 

let submitButton = document.querySelector('#submit')
function pauseClick() {
    minusButton.disabled = true
    addButton.disabled = true
    likeButton.disabled = true
    submitButton.disabled = true
}
let pauseButton = document.querySelector('#pause')
pauseButton.addEventListener('click', pauseClick)




