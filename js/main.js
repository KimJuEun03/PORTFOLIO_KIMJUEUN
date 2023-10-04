$(document).scroll(function(){
    let sect = $(this).scrollTop()
    $('section a h1').each(function(){
        let sectionOST = $(this).offset().top -900;
        let sectionEffect = $(this).attr('data-effect')
        if(sect >= sectionOST){
            $(this).addClass(sectionEffect)
        }
    })
})