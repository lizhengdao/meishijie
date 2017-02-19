/**
 * Created by weiyi on 2016/12/29.
 */
$(function () {
    setNavStretchDisplay();//设置导航聚焦出现子菜单
});
/*-----------------------导航部分-------------------------*/
//设置导航聚焦出现子菜单
function setNavStretchDisplay() {
    $(".nav-list>li").mouseover(function () {
        $(this).find(".flag i").css("display", "none");
        $(this).find(".stretch").css("display", "block");
    }).mouseout(function () {
        $(this).find(".flag i").css("display", "inline-block");
        $(this).find(".stretch").css("display", "none");
    })
};





