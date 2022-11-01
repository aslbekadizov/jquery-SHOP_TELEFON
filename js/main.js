// $(document).ready(function(){

//     var $class = $('.popup')
//     var $overlay = $('.overlay')
//     var $btn = $('.btn')
//     var $close = $('.close-btn')



//     $btn.click(function(){
//         $overlay.show();
//         $class.addClass('popup_active');
//     })
//     $close.click (function(){
//         $overlay.hide();
//         $class.removeClass('popup_active');
//     })
    


// })




$(function () {
    let $modal = $('.popup')
    let $overlay = $('.overlay')
    let $btn = $('.btn')
    let $close = $('.close-btn')
    let $phone =  $('.phone')

    $btn.click(function(){
        $overlay.show()
        $modal.addClass('popup_active')
        $phone.html($(this).text())
        $btn.hide()
    })

    $close.click(function(){
        $overlay.hide()
        $modal.removeClass('popup_active')
        $btn.show()
    })
    
});