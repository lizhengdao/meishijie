/**
 * Created by weiyi on 2017/1/1.
 */

$(function () {
    /*-----------------------推荐部分-------------------------*/
    recomBtnListner();//推荐按钮监听
    setScaleHoverListner();//设置鼠标移到刻度上响应事件
    /*-----------------------菜单部分-------------------------*/
    raidersBtnClickListner();//菜单左右按钮监听
    /*-----------------------食材部分-------------------------*/
    setTypeLinksListner();
    /*-----------------------菜谱部分-------------------------*/
    cookBookHover();//鼠标上移效果
    setCookBookBtnListner();

});
/*-----------------------菜单部分-------------------------*/
//菜单左右按钮监听
function raidersBtnClickListner() {
    var $btnPre = $(".raiers_btn_pre");
    var $btnNext = $(".raiers_btn_next");
    var index = 0;
    whichFlagShow(index);
    timeToRaidersShow(index);
    $btnPre.click(function () {
        if (index == 0) {
            index = 2;
        } else {
            index--;
        }
        raidersSlideRight(index);
        whichFlagShow(index);
    });

    $btnNext.click(function () {

        if (index == 2) {
            index = 0;
        } else {
            index++;
        }
        raidersSlideLeft(index);
        whichFlagShow(index);
    });


}
//指标显示
function whichFlagShow(index) {
    var $raiersConList = $(".raiers-con-item");
    var $raidersIndexFlag = $(".raiders_index>span");
    for (var i = 0; i < $raiersConList.length; i++) {
        if (i == index) {
            $raidersIndexFlag.eq(i).css("background-color", "red");
        } else {
            $raidersIndexFlag.eq(i).css("background-color", "black");
        }
    }
}
//定时滑动
function timeToRaidersShow(index) {
    setInterval(function () {
        if (index == 2) {
            index = 0;
        } else {
            index++;
        }
        raidersSlideRight(index);
        whichFlagShow(index);
    }, 10000);
}

//向右滑动
function raidersSlideRight() {
    var $conBox = $(".raiders .con-inner");
    $conBox.animate({"margin-left": "0px"}, 600, function () {
        $(".raiers-con-item").last().prependTo($conBox);
        $conBox.css("margin-left", "-990px");
    });
}
//向左滑动
function raidersSlideLeft() {
    var $conBox = $(".raiders .con-inner");
    $conBox.animate({"margin-left": "-990px"}, 600, function () {
        $(".raiers-con-item").first().appendTo($conBox);
        $conBox.css("margin-left", "0px");
    });
}

/*-----------------------推荐部分-------------------------*/
//推荐前后按钮监听
function recomBtnListner() {
    //按钮点击事件绑定
    var index = 0;
    $(".recommend .rec-btn-prev").click(function () {
        if (index != 0) {
            index--;
        } else {
            index = 4;
        }
        setBtnBg(this, index, false);//设置按钮背景
        slideRight();//点击pre向右滑动

    });
    $(".recommend .rec-btn-next").click(function () {
        if (index != 4) {
            index++;
        } else {
            index = 0;
        }
        setBtnBg(this, index, true);//设置按钮背景
        slideLeft();//点击next向左滑动

    });
    timeToRecommendShow();
}
//定时向右滑动
function timeToRecommendShow() {
    setInterval(function () {
        slideRight();
    }, 8000);
}
//向右滑动
function slideRight() {
    var $recommendConMain = $(".recommend-con-main");
    $recommendConMain.animate({"margin-left": "0px"}, 600, function () {
        $(".recommend-con-main .con-item").last().prependTo($recommendConMain);
        hideRecomTitle();
        $recommendConMain.css("margin-left", "-990px");

    });
}
//向左滑动
function slideLeft() {
    var $recommendConMain = $(".recommend-con-main");
    $recommendConMain.animate({"margin-left": "-1980px"}, 600, function () {
        $(".recommend-con-main .con-item").first().appendTo($recommendConMain);
        hideRecomTitle();
        $recommendConMain.css("margin-left", "-990px");
    });
}
//设置鼠标移到刻度上响应事件
function setScaleHoverListner($last) {
    $(".time-prompt li").mouseover(function () {
        if ($last) {
            $last.children("span").css("display", "none");
            $last.css("border", "none");
        }
        $(this).children("span").css("display", "block");
        $(this).css("border-top", "3px solid red");
        $last = $(this);

    });
    //鼠标上移按钮出现，移开消失
    $(".recommend").mouseover(function () {
        $(this).find(".rec-btn").css("display", "block");
    }).mouseout(function () {
        $(this).find(".rec-btn").css("display", "none");

    });


}

//设置推荐部分的按钮背景
function setBtnBg(object, index, isNext) {
    //var $timePrompt = $(".time-prompt li").eq(index);
    //$timePrompt.children("span").css({
    //    "display": "block"
    //});
    //$timePrompt.css("border-top", "3px solid red");

    var $this = $(object);
    var positionY = 0, positionX = 0;
    switch (index) {
        case 0:
            positionY = -68;
            break;
        case 1:
            positionY = -141;
            break;
        case 2:
            positionY = -216;
            break;
        case 3:
            positionY = -290;
            break;
        case 4:
            positionY = -365;
            break;
    }
    if (isNext) {
        positionX = -174;
    } else {
        positionX = 0;
    }
    var str = positionX + "px " + positionY + "px";

    $this.css("background-position", str);
}
//隐藏显示标题
function hideRecomTitle() {
    var $list = $(".recommend-con-main .con-item");
    $list.eq(2).find("h3").fadeIn();
    $list.eq(1).find("h3").hide();
    $list.eq(3).find("h3").hide();
}


/*-----------------------菜单部分-------------------------*/
//鼠标上移开关效果
function cookBookHover() {
    var $li = $(".cookbook_con-item li");
    $li.mouseover(function () {
        $(this).find(".toggle-up").slideUp();
    }).mouseleave(function () {
        $(this).find(".toggle-up").slideDown();
    });
}

//菜谱-向右滑动
function cookBookSlideRight() {
    var $cookBox = $(".cookbook .con-inner");
    $cookBox.animate({"margin-left": "0px"}, 600, function () {
        $(".cookbook_con-item").last().prependTo($cookBox);
        $cookBox.css("margin-left", "-990px");
    });
}
//菜谱-向左滑动
function cookBookSlideLeft() {
    var $cookBox = $(".cookbook .con-inner");
    $cookBox.animate({"margin-left": "-990px"}, 600, function () {
        $(".cookbook_con-item").first().appendTo($cookBox);
        $cookBox.css("margin-left", "0px");
    });
}

//按钮监听事件
function setCookBookBtnListner() {
    var $btnPre = $(".cookbook_btn_pre");
    var $btnNext = $(".cookbook_btn_next");

    $btnPre.click(function () {
        cookBookSlideRight();
    });
    $btnNext.click(function () {
        cookBookSlideLeft();

    });
    timeToCookBookShow();

};
//定时滑动菜谱
function timeToCookBookShow() {
    setInterval(function () {
        cookBookSlideRight();
    }, 9000);

}
/*-----------------------食材部分-------------------------*/
//食材链接鼠标上移切换显示
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
            var $item = $ingredientsConList.eq(i);
            if (i == index) {
                $item.show();
                $typesLink.eq(i).css({
                    "background-color": "#FF3232",
                    "color": "white"
                });
            } else {
                $item.hide();
                $typesLink.eq(i).css({
                    "background-color": "#fff",
                    "color": "gray"
                });
            }
        }
    }

};

