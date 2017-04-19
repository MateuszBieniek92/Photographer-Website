$(function () {

    /// btn menu mobile    

    var mobile = window.matchMedia("screen and (max-width: 600px)");
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

    /// menu btns

    var $menuOne = $('.menu').children().eq(0);
    var $menuTwo = $('.menu').children().eq(1);
    var $menuThree = $('.menu').children().eq(2);
    var $menuFour = $('.menu').children().eq(3);
    var $menuFive = $('.menu').children().eq(4);

    console.log($menuOne, $menuTwo);

    //console.log($array);



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
            scrollTop: 892
        }, 2000);
    });

    /// top btn ->  scroll to header
    $topBtn.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
    /// home btn ->  scroll to header
    $menuOne.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
    /// o mnie btn ->  scroll to o mnie
    $menuTwo.on('click', function () {
        $('html, body').animate({
            scrollTop: 892
        }, 2000);
    });
    /// services btn ->  scroll to services
    $menuThree.on('click', function () {
        $('html, body').animate({
            scrollTop: 1528
        }, 2000);
    });
    /// portfolio btn ->  scroll to portfolio
    $menuFour.on('click', function () {
        $('html, body').animate({
            scrollTop: 3227
        }, 2000);
    });
    /// kontakt btn ->  scroll to kontakt
    $menuFive.on('click', function () {
        $('html, body').animate({
            scrollTop: 6043
        }, 2000);
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
        // console.log(pix, top);
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

    var ravenous = function () {

        if (mobile.matches) {
            var widthNext = $btnRight.outerWidth();
            $btnRight
                .on('click', function () {
                    $position += 1;
                    if ($position === 3) {
                        $position = 0;
                    }
                    slide();
                })

            var widthPrev = $btnLeft.outerWidth();
            $btnLeft
                .on('click', function () {
                    $position -= 1;
                    if ($position === 3) {
                        $position = 0;
                    }
                    slide();
                });
        } else {

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
        }
    };


    $(window).resize(ravenous);
    ravenous();



    /// auto slider 

    setInterval(function () {
        slide(true);
    }, 20000);



    /// slider section 4 

    var $sectionFourBtnOne = $('.circlesUl').children().first();
    var $sectionFourBtnTwo = $('.circlesUl').children().eq(1);
    var $sectionFourBtnThree = $('.circlesUl').children().last();

    var $liOne = $('.sliderSectionFour').children().first();
    var $liTwo = $('.sliderSectionFour').children().eq(1);
    var $liThree = $('.sliderSectionFour').children().last(1);


    console.log($sectionFourBtnOne, $sectionFourBtnTwo, $sectionFourBtnThree);
    console.log($liOne, $liTwo, $liThree);

    $liOne.fadeIn(1000).css('display', 'inline-block');
    $liTwo.css('display', 'none');
    $liThree.css('display', 'none');

    $sectionFourBtnOne.addClass('active');
    $sectionFourBtnTwo.removeClass('active');
    $sectionFourBtnThree.removeClass('active');

    $sectionFourBtnOne.on('click', function () {

        $liOne.fadeIn(1000).css('display', 'inline-block');
        $liTwo.css('display', 'none');
        $liThree.css('display', 'none');

        $(this).addClass('active');
        $sectionFourBtnTwo.removeClass('active');
        $sectionFourBtnThree.removeClass('active');
    })

    $sectionFourBtnTwo.on('click', function () {

        $liOne.css('display', 'none');
        $liTwo.fadeIn(1000).css('display', 'inline-block');
        $liThree.css('display', 'none');

        $sectionFourBtnOne.removeClass('active');
        $(this).addClass('active');
        $sectionFourBtnThree.removeClass('active');

    })

    $sectionFourBtnThree.on('click', function () {
        $liOne.css('display', 'none');
        $liTwo.css('display', 'none');
        $liThree.fadeIn(1000).css('display', 'inline-block');

        $sectionFourBtnOne.removeClass('active');
        $sectionFourBtnTwo.removeClass('active');
        $(this).addClass('active');
    })



});