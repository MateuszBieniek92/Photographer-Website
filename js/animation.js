$(function () {

    /// btn menu mobile    

    var mobile = window.matchMedia("screen and (min-width: 600px) ");
    var $btn1 = $('.showHideMenu');
    var $list = $('.menu');

    /// sticky menu 

    var $nav = $('nav');
    var $sticky = $('.stickyBar');
    var $ul = $sticky.find('.menu');
    var $logo = $sticky.find('.logo');
    var $menuBtn = $sticky.find('.showHideMenu');
    var top = $sticky.offset().top;
    var $topBtn = $('.topBtn');

    /// btns slider

    var $btnRight = $('.sectionOne').find('.btnRight');
    var $btnLeft = $('.sectionOne').find('.btnLeft');
    var $photo = $('.sectionOne').find('.photo');
    var time = 500;
    var $array = $photo.find('li');
    var $position = $array.index($('.visible'));
    $array.first().addClass('visible');
    $position = 0;


    console.log($array);



    function slide(auto) {
        if (auto === true) {
            $position++;
            if ($position === 3) {
                $position = 0;
            }
        }
        $array.eq($position).css('opacity', 0);
        $('.visible').animate({
            opacity: 0
        }, 2000, function () {
            $(this).removeClass('visible');
            $array.eq($position).addClass('visible').animate({
                opacity: 1
            }, 500);
        })
    }

    $btn1.on('click', function () {
        $list.slideToggle().css('background-color', 'orange');
    });
    $btn1.on('hover', function () {
        $(this).css('background-color', 'white').css('color', 'black');
    });

    /// btn section 1 ->  scroll to section 2

    var $headBtn = $('.btnOne');
    var body = $('body');
    var topScroll = body.scrollTop();

    $headBtn.on('click', function () {
        $('html, body').animate({
            scrollTop: 894
        }, 2000, function () {
            console.log('bla');
        });
    });
    
        /// top btn ->  scroll to header
        $topBtn.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000, function () {
            console.log('bla');
        });
    });




    /// sticky bar
    $(window).on('scroll', function () {
        var pix = $(document).scrollTop();

        if (pix > top) {
            $sticky.fadeIn("slow").addClass('sticky');
            $topBtn.css('display', 'inline-block');
            $ul.addClass('testPosition');
            $logo.addClass('logoSticky');
            $menuBtn.addClass('mobileMenuPos');
        } else {
            $sticky.removeClass('sticky');
            $topBtn.css('display', 'none');
            $ul.removeClass('testPosition');
            $logo.removeClass('logoSticky');
            $menuBtn.removeClass('mobileMenuPos');
        }
        console.log(pix, top);
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
            $topBtn.css('display', 'inline-block');
            $ul.addClass('testPosition');
            $logo.addClass('logoSticky');
        } else {
            $sticky.removeClass('sticky');
            $topBtn.css('display', 'none');
            $ul.removeClass('testPosition');
            $logo.removeClass('logoSticky');
        }
    });



    /// btns and slider

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
            $position += 1;
            if ($position === 3) {
                $position = 0;
            }
            slide();
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
            $position -= 1;
            if ($position === 3) {
                $position = 0;
            }
            slide();
        });

    /// auto slider 

    setInterval(function () {
        slide(true);
    }, 20000);
});