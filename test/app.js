// function changeImg() {
//     let imgSrc = imgEl.getAttribute("src");
//     if(imgSrc === "images/ball.png") {
//         imgEl.setAttribute("src","images/be.png")
//     } else {
//         imgEl.setAttribute("src","images/ball.png")
//     }
// }

let scroll_gg = document.getElementById('container').onscroll = function() {
    let imgSrc = imgEl.getAttribute("src");
    if(imgSrc === "images/ball.png") {
        imgEl.setAttribute("src","images/be.png")
    } else {
        imgEl.setAttribute("src","images/ball.png")
    }
}


