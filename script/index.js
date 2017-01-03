/**
 * Created by weiyi on 2017/1/1.
 */

$(function () {
    setBtnClickListner();
    setTypeLinksListner();
    setCookBookBtnListner();


});
function setCookBookBtnListner() {
    var $li=$(".cookbook_con-item li");
    var $btnPre=$(".cookbook_btn_pre");
    var $btnNext=$(".cookbook_btn_next");
    $li.mouseover(function(){
        $(this).find(".toggle-up").slideUp();
    }).mouseleave(function(){
        $(this).find(".toggle-up").slideDown();
    });
    var index=0;
    var $cookbookConList=$(".cookbook_con-item");
    whichShow();

    $btnPre.click(function(){
        if (index == 0) {
            index = 2;
        } else {
            index--;
        }
        whichShow();
    });
    $btnNext.click(function(){
        if (index == 2) {
            index = 0;
        } else {
            index++;
        }
        whichShow();
    });

    timeToShow();
    function timeToShow(){
        setInterval(function(){
            if(index==2){
                index=0;
            }else{
                index++;
            }
            whichShow();

        },10000);

    }
    function whichShow() {
        for (var i = 0; i < $cookbookConList.length; i++) {
            if (i == index) {
                $cookbookConList.eq(i).show();
            } else {
                $cookbookConList.eq(i).hide();
            }
        }
    }
};
function setTypeLinksListner() {
    var $typesLink = $(".type-links a");
    var $ingredientsConList = $(".ingredients-con-list ul");
    show(0);

    $typesLink.mouseover(function (e) {
        var index = $typesLink.index(this);
        show(index);
    });



    function show(index) {
        for (var i = 0; i < $typesLink.length; i++) {
            if (i == index) {
                $ingredientsConList.eq(i).show();
            } else {
                $ingredientsConList.eq(i).hide();
            }
        }
    }

};
function setBtnClickListner() {
    var $btnPre = $(".raiers_btn_pre");
    var $btnNext = $(".raiers_btn_next");
    var $raiersConList = $(".raiers-con-item");
    var $raidersIndexFlag = $(".raiders_index>span");
    var index = 0;
    $btnPre.click(function () {
        if (index == 0) {
            index = 2;
        } else {
            index--;
        }
        whichShow();
    });

    $btnNext.click(function () {
        if (index == 2) {
            index = 0;
        } else {
            index++;
        }
        whichShow();
    });
    whichShow();
    timeToShow();
    function timeToShow(){
        setInterval(function(){
            if(index==2){
                index=0;
            }else{
                index++;
            }
            whichShow();

        },10000);

    }
    function whichShow() {
        for (var i = 0; i < $raiersConList.length; i++) {
            if (i == index) {
                $raiersConList.eq(i).show();
                $raidersIndexFlag.eq(i).css("background-color", "red");
            } else {
                $raiersConList.eq(i).hide();
                $raidersIndexFlag.eq(i).css("background-color", "black");
            }
        }
    }


}
