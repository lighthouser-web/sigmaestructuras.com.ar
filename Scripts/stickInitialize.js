$(document).ready(function(){
    $('.scroll-container').slick({
      autoplay: true,          // Enables autoplay
      autoplaySpeed: 2000,     // Time between slides (in milliseconds)
      dots: true,              // Show navigation dots
      arrows: true,            // Show navigation arrows
      infinite: true,          // Infinite looping of slides
      speed: 500,              // Slide transition speed (in milliseconds)
      fade: false,             // Disable fade animation (set to true for fading effect)
      slidesToShow: 3,         // Number of slides to show at once
      slidesToScroll: 1,       // Number of slides to scroll at a time
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1, // For mobile screens, show 1 slide
          }
        }
      ]
    });
  });
  