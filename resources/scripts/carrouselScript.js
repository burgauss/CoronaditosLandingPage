// const carrouselObject = {
//     desktopApartment: 1,
//     mobilCulture:1,
//     mobilApartment:1
// }
let slideIndexCultura = 1;
let slideIndex = 1;
let slideIndexRooms = 1;

showSlidesCultureMobil(slideIndexCultura);

function plusSlidesCultureMobil(n) {
    showSlidesCultureMobil(slideIndexCultura += n);
}

function currentSlideCultureMobil(n) {
    showSlidesCultureMobil(slideIndexCultura = n);
}

function showSlidesCultureMobil(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesCultura");
    if (n > slides.length) { slideIndexCultura = 1 }
    if (n < 1) { slideIndexCultura = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexCultura - 1].style.display = "block";
}


showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


showSlidesRoomsMobil(slideIndexRooms);

function plusSlidesRoomsMobil(n) {
    showSlidesRoomsMobil(slideIndexRooms += n);
}

function currentSlideRoomsMobil(n) {
    showSlidesRoomsMobil(slideIndexRooms = n);
}

function showSlidesRoomsMobil(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesRooms");
    if (n > slides.length) { slideIndexRooms = 1 }
    if (n < 1) { slideIndexRooms = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexRooms - 1].style.display = "block";
}