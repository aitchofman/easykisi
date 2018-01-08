$(document).ready(function() {
    
    var controller = new ScrollMagic.Controller();
    
    var sun = TweenMax.set($('#sun'),{
        className: "animated pulse infinite"
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
    .setTween(box1)
    .setTween(box2)
    .addTo(controller);
});