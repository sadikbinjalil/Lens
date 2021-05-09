 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            navText:['<img src="image/left-arrow.png">' , '<img src="image/right-arrow.png">']
        },
        600:{
            items:1,
            nav:true
            ,navText:['<img src="image/left-arrow.png">' , '<img src="image/right-arrow.png">']
        },
        1000:{
            items:2,
            nav:true,
            navText:['<img src="image/left-arrow.png">' , '<img src="image/right-arrow.png">'],
            loop:true,
             autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true

        }
    }
});