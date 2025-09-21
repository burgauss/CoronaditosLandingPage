const carrouselObject = {
    desktopApartment: {
        index:1,
        className: "mySlides"
    },
    mobilCulture:{
        index:1,
        className: "mySlidesCultura"
    },
    mobilApartment: {
        index:1,
        className: "mySlidesRooms"
    }
}
// let slideIndexCultura = 1; //mobil culture
// let slideIndex = 1;  //desktop apartment
// let slideIndexRooms = 1; //mobil apartment

for (let key in carrouselObject) {
    showSlides(key, carrouselObject[key].index, carrouselObject[key].className);
}

function plusSlides(key, n) {
    showSlides(key, carrouselObject[key].index  += n, carrouselObject[key].className);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(key,n, className) {
    debugger;
    let i;
    let slides = document.getElementsByClassName(className);
    if (n > slides.length) { carrouselObject[key].index = 1 }
    if (n < 1) { carrouselObject[key].index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[carrouselObject[key].index - 1].style.display = "block";
}

// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
// }


// showSlidesRoomsMobil(slideIndexRooms);

// function plusSlidesRoomsMobil(n) {
//     showSlidesRoomsMobil(slideIndexRooms += n);
// }

// function currentSlideRoomsMobil(n) {
//     showSlidesRoomsMobil(slideIndexRooms = n);
// }

// function showSlidesRoomsMobil(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlidesRooms");
//     if (n > slides.length) { slideIndexRooms = 1 }
//     if (n < 1) { slideIndexRooms = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndexRooms - 1].style.display = "block";
// }

// showSlidesCultureMobil(slideIndexCultura);

// function plusSlidesCultureMobil(n) {
//     showSlidesCultureMobil(slideIndexCultura += n);
// }

// function currentSlideCultureMobil(n) {
//     showSlidesCultureMobil(slideIndexCultura = n);
// }

// function showSlidesCultureMobil(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlidesCultura");
//     if (n > slides.length) { slideIndexCultura = 1 }
//     if (n < 1) { slideIndexCultura = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndexCultura - 1].style.display = "block";
// }
