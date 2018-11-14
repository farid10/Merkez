$(document).ready(function () {



    //Show and hide menu on click start
    $('.showMenu').click(function () {
        $('.menuAc').css('margin-left','0px')
    })
    $('.fa-caret-left').click(function () {
        $('.menuAc').css('margin-left','-300px')

    })
    $('.menuList a').click(function () {
        $('.menuList a').removeClass('active');
        $(this).addClass('active');
    })
    //Show and hide menu on click end

    //Milli Metbex Start
    $('.tabContent>div:not(":first-of-type")').hide();

    $('.tabMenu li').each(function (i) {
        $(this).attr('data-tab', 'tab' + i)
    })
    $('.tabContent>div').each(function (i) {
        $(this).attr('data-tab', 'tab' + i)
    })
    $('.tabMenu li').on('click', function () {
        var DataTab = $(this).data('tab');
        $('.tabMenu li').removeClass('activeMenu');
        $(this).addClass('activeMenu');
        $('.tabContent>div').hide();
        $('.tabContent>div[data-tab=' + DataTab + ']').show();
    })
    //Milli Metbex
    $('.cntn>div:not(":first-of-type")').hide();

    $('.dropdown li').each(function (i) {
        $(this).attr('data-tab', 'tab' + i)
    })
    $('.cntn>div').each(function (i) {
        $(this).attr('data-tab', 'tab' + i)
    })
    $('.dropdown li').on('click', function () {
        var DataTab = $(this).data('tab');
        $('.dropdown li').removeClass('activeMenu');
        $(this).addClass('activeMenu');
        $('.cntn>div').hide();
        $('.cntn>div[data-tab=' + DataTab + ']').show();
    })
    //accordion Start

    //accordion End
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        arrows:true,
        nextArrow:'<i class="fas fa-chevron-right"></i>',
        prevArrow:'<i class="fas fa-chevron-left"></i>',
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        centerPadding:'40px',
        focusOnSelect: true
    });

    $( '.search').click(function () {
        alert('ss')
    })
})