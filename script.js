const arrImg = ["img/01.jpg", "img/02.jpg","img/03.jpg", "img/04.jpg", "img/05.jpg"]

const eleSlider = document.querySelector(".slider");
const btnTop = document.querySelector(".btn-top");
const btnBottom = document.querySelector(".btn-bottom");


for (let i = 0; i < arrImg.length; i++) {
    const eleImg = document.createElement("img");
    eleImg.src = arrImg[i];
    eleImg.classList.add("slider-img")

    if (i === 0) {
        eleImg.classList.add("visible");
    }
    eleSlider.append(eleImg);
}

const listImg = document.querySelectorAll(".slider-img");
const listImgThumb = document.querySelectorAll(".image");
let visibleIndex = 0; 

btnBottom.addEventListener("click", function(){
    listImg[visibleIndex].classList.remove("visible");
    listImgThumb[visibleIndex].classList.add("overlay")
    if (visibleIndex >= listImg.length - 1) {
        visibleIndex = 0
    } else {
        visibleIndex++;
    }
    listImg[visibleIndex].classList.add("visible");
    listImgThumb[visibleIndex].classList.remove("overlay")
})

btnTop.addEventListener("click", function(){

    listImg[visibleIndex].classList.remove("visible");
    listImgThumb[visibleIndex].classList.add("overlay")
    if (visibleIndex <= 0) {
        visibleIndex = listImg.length - 1
    } else {
        visibleIndex--;
    }
    listImg[visibleIndex].classList.add("visible");
    listImgThumb[visibleIndex].classList.remove("overlay")
})
