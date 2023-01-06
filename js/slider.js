import sliderDatabase from '../sliderDatabase.json' assert {type: 'json'};

var sliderIndex = 0;

let sliderPrevButton = document.getElementById("sliderPrev");
let sliderNextButton = document.getElementById("sliderNext");

sliderPrevButton.onclick = () => {
    if (sliderIndex > 0) {
        sliderIndex--;
    } else {
        sliderIndex = sliderDatabase.length - 1;
    }
    buildSlider();
}

sliderNextButton.onclick = () => {
    if (sliderIndex < sliderDatabase.length -1) {
        sliderIndex++;
    } else {
        sliderIndex = 0;
    }
    buildSlider();
}

function buildSlider() {
    document.getElementById("sliderName").innerText = sliderDatabase[sliderIndex].name;
    document.getElementById("slider-img").src = sliderDatabase[sliderIndex].imgSrc;
    document.getElementById("slider-price").innerText = sliderDatabase[sliderIndex].price;
    document.getElementById("slider-paragraph").innerText = sliderDatabase[sliderIndex].paragraph;
    document.getElementById("slide").style.backgroundImage = "url(" + sliderDatabase[sliderIndex].backgroundSrc + ")";
}