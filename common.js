$(document).ready(function () {
    // Ham button
    $('.ham').on('click', function () {
        $(this).toggleClass('ham-open');
        $('nav').toggleClass('on')
        $('.top_menu').toggleClass('on')
    });

    // nav
    $('.gnb>li').click(function(e){
        e.preventDefault()
    })
    $('.gnb>li').click(function(){
        if($(this).attr('class') != 'on'){
            // $('.sub').slideup()
            $(this).find('.sub').slideToggle()
            $('.gnb>li').removeClass('on')
            $(this).addClass('on')
        }
        else{
            $(this).find('.sub').slideToggle()
            $('.gnb>li').removeClass('on')
        }
    })
    
    $('body').prepend(
        `<div class="cursor">MORE</div>`    
        )
    
    $(document).mousemove(function(e) {
        let E = e.originalEvent
        console.log(E)

        $('.cursor').css({
            left: e.pageX, top: e.pageY
        });
        
        for (var r = $(".over"), a = r.length - 1; a >= 0; a--) {
            o(r[a])
        }
        function o(t) {
            t.addEventListener("mouseover", n), 
            t.addEventListener("mouseout", s)
        }
        function n(t) {
            $(".cursor").addClass("hover");
        }
        function s(t) {
            $(".cursor").removeClass("hover");
        }
        })
        
        // aos
        AOS.init();


        // cursor
        $('body').prepend(
            `<div class="cursor">MORE</div>`    
        )
})
            
        $(document).mousemove(function(e) {
            let E = e.originalEvent
            console.log(E)

            $('.cursor').css({
                left: e.pageX, top: e.pageY
            });
            
            for (var r = $(".over"), a = r.length - 1; a >= 0; a--) {
                o(r[a])
            }
            function o(t) {
                t.addEventListener("mouseover", n), 
                t.addEventListener("mouseout", s)
            }
            function n(t) {
                $(".cursor").addClass("hover");
            }
            function s(t) {
                $(".cursor").removeClass("hover");
            }
});