import $ from "jquery";
import 'slick-carousel';
import acivateItem from './parts/about-active';
import arrowtranslate from './parts/arrow-translate';


$(document).ready(function(){
  $('.slider').slick({
      slidesToShow: 3,
      arrow: true,
      slidesToScroll: 1,
      prevArrow: `<img src="icons/left-arrow.svg" class="arrow arrow__prev"></img>`,
      nextArrow: `<img src="icons/right-arrow.svg" class="arrow arrow__next"></img>`,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            centerMode: true
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            arrows: false
          }
        }
      ]
  });
});

$(document).ready(function(){
  $('.girl-slider').slick({
      slidesToShow: 4,
      arrow: true,
      slidesToScroll: 1,
      prevArrow: `<img src="icons/left-arrow.svg" class="arrow arrow_girl arrow__prev"></img>`,
      nextArrow: `<img src="icons/right-arrow.svg" class="arrow arrow_girl arrow__next"></img>`,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            arrows: false
          }
        }
      ]
  });
});

window.addEventListener('DOMContentLoaded', () => {

    "use strict";

    

      acivateItem();
      arrowtranslate();

});