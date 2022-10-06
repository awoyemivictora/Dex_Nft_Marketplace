import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';
import 'isotope-cells-by-row';

function SortingCard() {
      jQueryBridget( 'isotope', Isotope, $ );

      var portfolioIsotope = $('.dream-portfolio').isotope({
        itemSelector: '.single_gallery_item',
        layoutMode: 'fitRows'
      });

      $('.portfolio-menu button').on('click', function() {
        $(".portfolio-menu button").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
      });
}

function Addshrink() {
    let RelBanner = document.querySelector('#banner');

    window.addEventListener("scroll", e => {
        if(window.pageYOffset > 86){
          RelBanner.classList.add("shrink");
        }else
        {
            RelBanner.classList.remove("shrink");
        }
    });


}

function loader() {
    var fadeTarget = document.getElementById("preloader");

    function fadeOutEffect() {
        
        var fadeEffect = setInterval(function () {
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
                fadeTarget.style.display = 'none'
            }
        }, 0);
    }

    window.onload = setTimeout(fadeOutEffect , 1000)

    
}




export {
    SortingCard,
    Addshrink,
    loader
};
