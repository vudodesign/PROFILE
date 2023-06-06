let itemSrc = null;
function drag(event) {
    itemSrc = event.target.src;
    document.querySelector('.graphic').classList.add('drag');
}
function drop(event) {
    var img = document.createElement('img');
    img.src = itemSrc;
    document.querySelector('.graphic').innerHTML = '';
    document.querySelector('.graphic').appendChild(img);
    document.querySelector('.graphic').classList.remove('drag');
}
function allowDrop(event) {
    event.preventDefault();
}


// slide ảnh
var slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    var slides = document.getElementsByClassName("slide-item");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}


