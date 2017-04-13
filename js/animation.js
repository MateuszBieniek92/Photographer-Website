$(function () {

    /// btn menu mobile    

    var mobile = window.matchMedia("screen and (min-width: 600px) ");
    var $btn1 = $('.showHideMenu');
    var $list = $('.menu');

    $btn1.on('click', function () {
        $list.slideToggle().css('background-color', 'orange');
    });
    $btn1.on('hover', function () {
        $(this).css('background-color', 'white').css('color', 'black');
    });

    /// btn section 1

    var $headBtn = $('.btnOne');

    $headBtn.on('click', function () {
        $(this).slideToggle();
    });







    /// sticky menu 


    var $nav = $('nav');
    var $sticky = $('.stickyBar');
    // var $bar = $('.barOne');
    var $ul = $sticky.find('.menu');
    var $logo = $sticky.find('.logo');
    var $menuBtn = $sticky.find('.showHideMenu');
    var top = $sticky.offset().top;

    //console.log($nav, $ul, top);

    $(window).on('scroll', function () {
        var pix = $(document).scrollTop();

        if (pix > top) {
            $sticky.fadeIn("slow").addClass('sticky');
            $ul.addClass('testPosition');
            $logo.addClass('logoSticky');
            $menuBtn.addClass('mobileMenuPos');
        } else {
            $sticky.removeClass('sticky');
            $ul.removeClass('testPosition');
            $logo.removeClass('logoSticky');
            $menuBtn.removeClass('mobileMenuPos');
        }
    })

    $(window).on('rezise', function () {

        if ($sticky.hasClass('sticky')) {
            pix = $sticky.offset().top;
        } else {
            pix = $sticky.offset().top;
        }

        var pix = $(document).scrollTop();

        if (pix > top) {
            $sticky.addClass('sticky');
            $ul.addClass('testPosition');
            $logo.addClass('logoSticky');
        } else {
            $sticky.removeClass('sticky');
            $ul.removeClass('testPosition');
            $logo.removeClass('logoSticky');
        }
    });



    /// btns slider

    var $btnRight = $('.sectionOne').find('.btnRight');
    var $btnLeft = $('.sectionOne').find('.btnLeft');
    var $photo = $('.sectionOne').find('.photo');
    var time = 500;

    var $array = $photo.find('li');
    console.log($array);
    $array.first().addClass('visible');




    var widthNext = $btnRight.outerWidth();
    $btnRight
        .animate({
            right: -(widthNext - 10) + 'px'
        }, time * 3)
        .on('mouseenter', function () {
            $(this).stop().animate({
                right: 0
            }, time);
        })
        .on('mouseout', function () {
            $(this).stop().animate({
                right: -(widthNext - 10) + 'px'
            }, time);
        })
        .on('click', function () {
            var $position = $array.index($('.visible')) + 1;
            console.log($position);
            if ($position === 3) {
                $position = 0;
            }
            $array.removeClass('visible').eq($position).addClass('visible');
        })
    var widthPrev = $btnLeft.outerWidth();
    $btnLeft
        .animate({
            left: -(widthPrev - 10) + 'px'
        }, time * 3)
        .on('mouseenter', function () {
            $(this).stop().animate({
                left: 0
            }, time);
        })
        .on('mouseout', function () {
            $(this).stop().animate({
                left: -(widthPrev - 10) + 'px'
            }, time);
        })
        .on('click', function () {
            var $position = $array.index($('.visible')) - 1;
            console.log($position);
            if ($position === 3) {
                $position = 0;
            }
            $array.removeClass('visible').eq($position).addClass('visible');
        });
});