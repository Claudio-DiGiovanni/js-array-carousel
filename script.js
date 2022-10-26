const arrImg = ["img/01.jpg", "img/02.jpg","img/03.jpg", "img/04.jpg", "img/05.jpg"]

const eleSlider = document.querySelector(".slider");
const btnTop = document.querySelector(".btn-top");
const btnBottom = document.querySelector(".btn-bottom");


for (let i = 0; i < arrImg.length; i++) {
    const eleImg = document.createElement("img");
    eleImg.src = arrImg[i];

    if (i === 0) {
        eleImg.classList.add("visible");
    }
    eleSlider.append(eleImg);
}

const listImg = document.querySelectorAll("img");

let visibleIndex = 0; 

btnTop.addEventListener("click", function(){
    listImg[visibleIndex].classList.remove("visible");
    visibleIndex++;
    listImg[visibleIndex].classList.add("visible");

    btnBottom.classList.remove("hidden")
    if (visibleIndex === listImg.length - 1) {
        btnTop.classList.add("hidden")
    }
})

btnBottom.addEventListener("click", function(){
    listImg[visibleIndex].classList.remove("visible");
    visibleIndex--;
    listImg[visibleIndex].classList.add("visible");

    btnTop.classList.remove("hidden")
    if (visibleIndex === 0) {
        btnBottom.classList.add("hidden")
    }
})
