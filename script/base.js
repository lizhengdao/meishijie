/**
 * Created by weiyi on 2016/12/29.
 */
$(function(){
    setNavStretchDisplay();

});
function setNavStretchDisplay() {
    $(".nav-list>li").mouseover(function(){
        $(this).find(".caret").css("display","none");
        $(this).find(".stretch").css("display","block");
    }).mouseout(function(){
        $(this).find(".caret").css("display","inline-block");
        $(this).find(".stretch").css("display","none");
    })
};

