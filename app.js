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

let showMeMore = document.querySelectorAll(".btn__hire");
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".btn-close")
let default_btn = document.querySelector(".default-btn")

showMeMore.forEach(function (btn) {
  btn.addEventListener("click", function () {
    modal.classList.add("show");
    modal.classList.remove("hide")
  })
})

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

closeBtn.addEventListener("click", closeModal)
default_btn.addEventListener("click", closeModal)
modal.addEventListener("click", function (e) {
  if (e.target == modal) {
    closeModal()
  }
})

$('.menu').onePageNav()

$(document).ready(function () {

  $(".fa-search").click(function () {
    $(".wrap, .input").toggleClass("active");
    $("input[type='search']").focus();
  });

});

$('.ourservices').onePageNav();

$('#exampleModal').modal({
  keyboard: true,
})


// *******************************************************************
