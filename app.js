$(document).ready(function () {

  $(".fa-search").click(function () {
    $(".wrap, .input").toggleClass("active");
    $("input[type='search']").focus();
  });

});

$('.main-buttons').onePageNav()

$('#exampleModal').modal({
  keyboard: true,
})

let mobileMenu = document.querySelector(".nav-mobile-menu")
let mainMenu = document.querySelector(".navigation")

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu");
  } else {
    mainMenu.classList.remove("active-menu")
  }
})

// *******************************************************************

// let showMeMore = document.querySelectorAll(".ourservices-btn");
// let modal = document.querySelector(".modal");
// let btn__close = document.querySelector(".btn-close");
// let send = document.querySelector(".default-btn");

// showMeMore.forEach(function(btn) {
//   btn.addEventListener("click",openModal )
// })

// function openModal() {
//   modal.classList.remove("hide")
//   modal.classList.add("show")
// }
// function closeModal() {
//   modal.classList.remove("show")
//   modal.classList.add("hide")
// }

// btn__close.addEventListener("click", closeModal)
// send.addEventListener("click", closeModal)

// modal.addEventListener("click", function(e) {
//   if (e.target == modal) {
//     closeModal()
//   }
// })

// ********************************

// let showMeMore = document.querySelectorAll(".button0");
// let modal = document.querySelector(".modal")
// let closeBtn = document.querySelector(".btn-close")
// let pleaseCall = document.querySelector(".pleaseCall")

// showMeMore.forEach(function(btn) {
//     btn.addEventListener("click",function() {
//     modal.classList.add("show");
//     modal.classList.remove("hide")
//     })
// })

// function closeModal() {
//     modal.classList.add("hide");
//     modal.classList.remove("show");
// }

// closeBtn.addEventListener("click",closeModal)
// pleaseCall.addEventListener("click",closeModal)
// modal.addEventListener("click",function(e) {
//     if(e.target == modal ) {
//     closeModal()
//     }
// })