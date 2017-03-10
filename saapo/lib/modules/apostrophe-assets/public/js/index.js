var swiper1 = new Swiper('#swiper1', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 1,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    Spacebetween: 10,
    effet: 'fade'
});

var swiper2 = new Swiper('#swiper2', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 3,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    Spacebetween: 30,
    effet: 'fade',
    breakpoints: {
        1023: {
            slidesPerView: 2,
            Spacebetween: 20
        },
        768: {
            slidesPerView: 1,
            Spacebetween: 10
        }
    }
});