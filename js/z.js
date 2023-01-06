import sliderDatabase from '../sliderDatabase.json' assert {type: 'json'};

var index = 0;

function buildSlider() {
    document.getElementById("sliderName").innerText = sliderDatabase[index].name;
    document.getElementById("slider-img").src = sliderDatabase[index].imgSrc;
    document.getElementById("slider-price").innerText = sliderDatabase[index].price;
    document.getElementById("slider-paragraph").innerText = sliderDatabase[index].paragraph;
    document.getElementById("slide").style.backgroundImage = "url(" + sliderDatabase[index].backgroundSrc + ")";
}

function nextSlide() {
    if (index < sliderDatabase.length -1) {
        index++;
    } else {
        index = 0;
    }
    buildSlider();
}

function prevSlide() {
    if (index > 0) {
        index--;
    } else {
        index = sliderDatabase.length - 1;
    }
    buildSlider();
}

let nextButton = document.getElementById("sliderNext");
nextButton.addEventListener("click", nextSlide);

let prevButton = document.getElementById("sliderPrev");
prevButton.addEventListener("click", prevSlide);