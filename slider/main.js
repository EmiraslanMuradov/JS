let userName = document.querySelector("#signin-name");
let sendBtn = document.querySelector("#signin-btn");
let signIn = document.querySelector(".signin");
let galery = document.querySelector(".galery");
let galeryTitle = document.querySelector("#galery-title");
let changeableName;
let images = document.querySelectorAll(".galery-items a");
let popup = document.querySelector(".popup");
let popupImg = document.querySelector(".popup .inner img");

let left = document.querySelector(".left");
let right = document.querySelector(".right");
let close = document.querySelector(".close");

sendBtn.addEventListener("click", () => {
    if(userName.value !== ""){
        changeableName = userName.value;
        sendName();
    }
    else{
        alert("Adınızı daxil edin!");
    }
});
document.addEventListener("keydown", (keyEvent) => {
    if(keyEvent.key == "Enter"){
        sendName();
    }
});
const sendName = function () {
    signIn.style.display = "none";
        galeryTitle.innerText += ` ${changeableName}.`;
        galery.style.display = "block";
}
images.forEach((image) => {
    image.addEventListener("click", function (e) {
        e.preventDefault();
        changeableSlide(this);
        doOpen();
        image.classList.add("showedSlideItem");
    });
});
popup.addEventListener("click", (e) => {
    if(e.target.classList.contains("popup")){
        doClose();
    }
});
left.addEventListener("click", () => {
    doLeft();
});
right.addEventListener("click", () => {
    doRight();
});
close.addEventListener("click", () => {
    doClose();
});
document.addEventListener("keydown", (keyEvent) => {
    if(keyEvent.key == "Escape"){
        doClose();
    }
    if(keyEvent.key == "ArrowRight"){
        doRight();
    }
    if(keyEvent.key == "ArrowLeft"){
        doLeft();
    }
});
const doLeft = function () {
    let selectedSlideItem = document.querySelector(".showedSlideItem");
    if(selectedSlideItem.previousElementSibling !== null){
        changeableSlide(selectedSlideItem.previousElementSibling);
        selectedSlideItem.previousElementSibling.classList.add("showedSlideItem");
    }
    else{
        changeableSlide(selectedSlideItem.parentElement.children[2]);
        selectedSlideItem.parentElement.children[2].classList.add("showedSlideItem")
    }
    selectedSlideItem.classList.remove("showedSlideItem");
}
const doRight = function () {
    let selectedSlideItem = document.querySelector(".showedSlideItem");
    if(selectedSlideItem.nextElementSibling !== null){
        changeableSlide(selectedSlideItem.nextElementSibling);
        selectedSlideItem.nextElementSibling.classList.add("showedSlideItem");
    }
    else{
        changeableSlide(selectedSlideItem.parentElement.children[0]);
        selectedSlideItem.parentElement.children[0].classList.add("showedSlideItem")
    }
    selectedSlideItem.classList.remove("showedSlideItem");
}
const doOpen = function () {
    popup.style.display = "flex";
};
const doClose = function () {
    popup.style.display = "none";
}
function changeableSlide(item){
    popupImg.setAttribute("src", item.getAttribute("href"));
}