$(document).ready(function() {
    var aa = 0;
    var size = $(".banner_select>ul li").size(); //5
    var img_size = $(".banner_wrap>ul li").size(); //5
    for(var i = 0; i <= size - 1; i++) {
        $(".banner_select>ul li")[i].id = i;
        $(".banner_wrap>ul li")[i].id = i;
    }

    $(".banner_select>ul li").hover(function() {
        aa = this.id
        $(".J_trigger_line").css({
            "left": (this.id * 195)
        })
        $(".banner_wrap>ul li").eq(this.id).addClass("on").siblings(this).removeClass("on");;
        $(".banner_wrap>ul li").eq(this.id).fadeIn(500).siblings(this).fadeOut(500);
    });

    function move() {
        $(".J_trigger_line").css({
            "left": (aa * 195)
        })
        $(".banner_wrap>ul li").eq(aa).addClass("on").siblings(aa).removeClass("on");
        $(".banner_wrap>ul li").eq(aa).fadeIn(500).siblings(aa).fadeOut(500);
    }

    var t = setInterval(lunbo, 5000);

    function lunbo() {
        if(aa == img_size) {
            aa = 0;
        }
        move();
        aa++
    }
    $(".banner_wrap").hover(function() {
        clearInterval(t);
    }, function() {
        t = setInterval(lunbo, 5000);
    });
    $(".left").click(function() {
        if(aa <= 1) {
            aa = 6;
        }
        aa -= 2;
        move();
        aa++;
    })
    $(".right").click(function() {
        if(aa == 5) {
            aa = 0;
        }
        aa++;
        aa--;
        move();
        aa++;
    })
})