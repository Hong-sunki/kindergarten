$(".slide-group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [{ 
        breakpoint: 769,
        settings: {
            arrows: false,
        }
    }]
})

var $ibutton = $('.plpa i')
$('.plpa').on('click', function () {
    if ($ibutton.hasClass('fa-pause')) {
        $('.slide-group').slick('slickPause')
        $ibutton.removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slide-group').slick('slickPlay')
        $ibutton.removeClass('fa-play').addClass('fa-pause')
    }
})


// var elbutton = document.querySelector('.plpa i')
// var elplpa = document.querySelector('.plpa')
// elplpa.addEventListener('click', function () {
//     $('.slide-group').slick('slickPause')
//     if (elbutton.classList.contains('fa-pause')) {
//         elbutton.classList.remove('fa-pause')
//         elbutton.classList.add('fa-play')
//     }
// })


$('.open').on('click', function(){
    $(this).removeClass('on')
    $(this).next().next().addClass('on')
    $(this).next().addClass('on')
})
$('.close').on('click', function(){
    $(this).removeClass('on')
    $(this).prev().prev().addClass('on')
    $(this).prev().removeClass('on')
    $('.depth1 > li').removeClass('on')
})


// var elOpen = document.querySelector('.open')
// var elClose = document.querySelector('.close')
// var elNav = document.querySelector('#nav')
// var elDepth1Li = document.querySelectorAll('.depth1 > li')
// for ( var i = 0; i < elDepth1Li.length; i++)

// elOpen.addEventListener('click', function(){
//     this.classList.remove('on')
//     elClose.classList.add('on')
//     elNav.classList.add('on')
// })
// elClose.addEventListener('click', function(){
//     this.classList.remove('on')
//     elOpen.classList.add('on')
//     elNav.classList.remove('on')
//     elDepth1Li[i].classList.remove('on')
// })



var deviceSize1 = 1024;
var deviceSize2 = 768;
function scrollOX(status) {
    $('html').css ({
        overflowY: status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollOX('hidden')
var sws = scrollOX('scroll')
var swd = swh - sws
if (swd > 0) {
    deviceSize1 -= swd;
    deviceSize2 -= swd;
}

var ww;
function init(){
    ww = $(window).width()
    if (ww>deviceSize1 && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('mobile tablet')
        $('html').scrollTop(0)
        $('.depth1 > li').removeClass('on')
    } else if ( ww<=deviceSize1 && ww> deviceSize2 && !$('html').hasClass('tablet') ) {
        $('html').addClass('tablet').removeClass('pc mobile')
        $('html').scrollTop(0)
        $('.depth1 > li').removeClass('on')
    } else if (ww <=deviceSize2 && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('pc tablet')
        $('html').scrollTop(0)
        $('#nav').removeClass('on')
        $('#header .close').removeClass('on')
        $('#header .open').addClass('on')
    }
}

// 함수호출
init()

$(window).on('resize', function(){
    init()
})

$('.depth1 > li').hover (
    function(){
        if ($('html').hasClass('pc') || $('html').hasClass('tablet') ) {
            $(this).addClass('on')
        }
    },
    function(){
        if ( $('html').hasClass('pc') || $('html').hasClass('tablet')) {
            $(this).removeClass('on')
        }
    }
)

$('.depth1 > li').on('click', function(e){
    if ( $('html').hasClass('mobile') ) {
        e.preventDefault()
        $(this).toggleClass('on').siblings().removeClass('on')
    }
})
$('depth2 > li').on('click', function(e){
    e.stopPropagation()
})



$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if (sct >= 40 && !$('#header').hasClass('on')) {
        $('#header').addClass('on')
    } else if (sct < 40  && $('#header').hasClass('on')) {
        $('#header').removeClass('on')
    }
})