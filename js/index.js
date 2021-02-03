$(".slide-group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

var $ibutton = $('.plpa i')
$('.plpa').on('click', function(){
    if ($ibutton.hasClass('fa-pause')) {
        $('.slide-group').slick('slickPause')
        $ibutton.removeClass('fa-pause').addClass('fa-play')
    }
    else {
        $('.slide-group').slick('slickPlay')
        $ibutton.removeClass('fa-play').addClass('fa-pause')
    }
})


// var elbutton = document.querySelector('.plpa i')
// var elplpa = document.querySelector('.plpa')
// elplpa.addEventListener('click', function(){
//     $('.slide-group').slick('slickPause')

// })