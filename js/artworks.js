$(function(){
    $('.mix').click(function(){
        $('#popupBox').css({
            'top': (($(window).height()-$('#popupBox').outerHeight())/2+$(window).scrollTop()) + 'px',//픽셀로 변환
            'left': (($(window).width()-$('#popupBox').outerWidth())/2+$(window).scrollLeft()) + 'px'
        })
        $('#popupBox, #popupBG').css('display', 'block')
        // $('body').css({'overflow':'hidden'})
    })  

    $('#popCloseBtn, #popupBG').click(function(){
        // $('#popupBox').slideUp()
        $('#popupBox, #popupBG').css({
            'display': 'none'
        })
    })

 
    $('.mix').click(function(e){
        $('.popup').hide();
        const idx = $(this).index();
        $('.popup').eq(idx).show();
    })

        $('.btn').click(function(){
            $('nav>ul').slideToggle();
        })
})



