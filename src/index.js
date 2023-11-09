const cakeAPI = 'http://localhost:3000/cakes'

const cakeList = el('cake-list')
const cakeName = el('cake-cake-name');
const cakeImage = el('cake-image')
const cakeDescription = el('cake-description')
const reviewList = el('review-list')
//when the page loads

fetch(`${cakeAPI}/1`)
    .then(res => res.json())
    .then(renderCake);

    fetch(cakeAPI)
        .then(res => res.json())
        .then(renderCakeNav)

function renderCakeNav(cakes) {
    cakeList.innerHTML = ''
    cakes.forEach(addCakeNameToNav)
}

function addCakeNameToNav(cake) {
    const cakeName = document.createElement('li')
    cakeName.textContent = cake.name
    cakeList.append(cakeName)
}

function renderCake(cake) {
    cakeName.textContent = cake.name;
    cakeImage.src = cake.image_url
    cakeDescription.textContent = cake.description;

    cake.reviews.forEach(renderReview)
    reviewList.innerHTML = '';
    cake.reviews.forEach(renderReview)
}

function renderReview(review) {
    const reviewLi = document.createElement('li')
    reviewLi.textContent = review
    reviewList.append(reviewLi)
}

//  put the info from that object on the page in the right places

function el(id) {
    return document.getElementById(id)
}