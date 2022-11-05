let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

// navbar
menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

// Swiper: vehicles
var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//Swiper: Reviews
var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//Loan Calculator
let submitButton = document.getElementById("calculate");
submitButton.addEventListener("click", calcualteLoan);

function calcualteLoan() {
  var amount = document.getElementById("amount").value;
  var term = document.getElementById("term").value;
  var rate = document.getElementById("rate").value / 100;
  var downPayment = document.getElementById("downPayment").value;
  var taxRate = document.getElementById("taxRate").value / 100;
  amount-= downPayment;
  var salesTax = amount * taxRate;
  var totalLoanIntrest = amount * rate * (term / 12);
  var total = amount*1 + totalLoanIntrest*1;

  document.getElementById("monthly").value = total / term;
  document.getElementById("totalLoanAmount").value = amount;
  document.getElementById("upfront").value = downPayment*1 + salesTax*1;
  document.getElementById("totalLoanIntrest").value = totalLoanIntrest;
  document.getElementById("totalCost").value = total*1 + downPayment*1 + salesTax*1;
}