$(document).ready(function() {



    $(window).scroll(function() {
        if( $(this).scrollTop() > $('#kisi') ) {
         $(".main-nav").addClass("fixed-top");
       } else {
         $(".navbar").removeClass("fixed-top");
       }
     });

    
    var controller = new ScrollMagic.Controller();
    


    var sun = TweenMax.set($('#sun'),{
        className: "animated pulse infinite"
    });

    var tent1 = $('#tent1');
    var tent1_tween = TweenMax.to(tent1, 1, {
        opacity: 0,
        y:250
    });
    
    var trailer = TweenMax.set($('#trailer'),{
        className: "animated slideInRight"
    });
    
    var box1 = TweenMax.set($('#box1'), {
        className: "animated fadeIn"
    });
    
    var box2 = TweenMax.set($('#box2'), {
        className: "animated slideInUp"
    });
    
    var heroScrene = new ScrollMagic.Scene({
        triggerElement: '#kisi',
        duration: '100%'
    })
    .setTween(sun)
    .setTween(trailer)
    .setTween(tent1_tween)
    .setTween(box1)
    .setTween(box2)
    .addTo(controller);
});