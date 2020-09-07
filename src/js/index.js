import $ from "jquery";
import 'slick-carousel';

window.addEventListener('DOMContentLoaded', () => {

    "use strict";

    $(document).ready(function(){
        $('.slider').slick({
            slidesToShow: 3,
            arrow: true,
            slidesToScroll: 1,
            prevArrow: `<img src="icons/left-arrow.svg" class="arrow arrow__prev"></img>`,
            nextArrow: `<img src="icons/right-arrow.svg" class="arrow arrow__next"></img>`,
        });
      });

      $(document).ready(function(){
        $('.girl-slider').slick({
            slidesToShow: 4,
            arrow: true,
            slidesToScroll: 1,
            prevArrow: `<img src="icons/left-arrow.svg" class="arrow arrow_girl arrow__prev"></img>`,
            nextArrow: `<img src="icons/right-arrow.svg" class="arrow arrow_girl arrow__next"></img>`,
        });
      });
});