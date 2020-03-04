$(function () {

    // 导航栏 动画效果效果 .stat-bar li:hover ul.sub
    var $statBar = $('.stat-bar li')

    $statBar.hover(function () {
        $(this).find('.sub').stop().slideToggle(200);

    })



    // 轮播图
    var $banner = $('#banner');
    var $slide = $('li.slide');
    var $page = $("li.page");
    var $prev = $(".prev");
    var $next = $(".next");
    var index = 0;
    // 定时 轮播图
    var Show = setInterval(timeShow, 2300);

    // setTimeout   (timeShow,3);
    function timeShow() {
        index++;
        if (index >= $slide.length) index = 0;
        for (var i = 0; i <= $slide.length; i++) {
            $slide.eq(i).css({"z-index": 1, "opacity": 0})
        }
        $slide.eq(index).css({"z-index": 2, "opacity": 1});
        $page.eq(index).addClass("active").siblings().removeClass("active")
        // console.log(index)
    }

    // 按钮点击
    $prev.click(function (event) {
        index--;
        // console.log(index)  // 从0开始计数，
        if (index <= -1) index = $slide.length - 1;
        $slide.eq(index).css({"z-index": 2, "opacity": 1}).siblings().not(".fader_controls").css({
            "z-index": 0,
            "opacity": 0
        });
        $page.eq(index).addClass("active").siblings().removeClass("active")
        console.log('$prev', index)
        event.stopPropagation();

    });
    $next.click(function (event) {
        index++;
        if (index >= $slide.length) index = 0;
        // $page.eq(index).addClass("active").siblings().removeClass("active")
        // console.log('---',index)
        $slide.eq(index).css({"z-index": 2, "opacity": 1}).siblings().not(".fader_controls").css({
            "z-index": 0,
            "opacity": 0
        });
        // $slide.eq(index).prevAll()
        $page.eq(index).addClass("active").siblings().removeClass("active")
        // console.log('$next',index)
        event.stopPropagation();
    });

    // 鼠标进入事件，子元素也触发
    $banner.mouseover(function () {
        // console.log(Show);
        clearInterval(Show);

    });
    //鼠标离开事件
    $banner.mouseout(function () {
        Show = setInterval(timeShow, 2300);
        // console.log('离开',Show)
    })

    //
    $(".news-list li").mouseover(function (event) {
        // console.log($(".news-list li").index(this))  // 获取索引值
        // var index = $(".news-list li").index(this)
        $(this).addClass("sty-li").siblings().removeClass("sty-li")
    });
    $(".news-list").mouseout(function () {
        // console.log($(this))
        $(this).children().eq(0).addClass("sty-li").siblings().removeClass("sty-li")


    });


    // 点击事件
    var $buttList = $(".tab-buttons li");

    var $newsul = $('ul.news-list')
    $buttList.mouseover(function () {
        // var $box = "<style>.newscurrent:after{'display':'none' } </style>>"
        $(this).addClass("newscurrent").siblings().removeClass("newscurrent")

        $newsul.eq($(this).index()).show().siblings().hide()

        // for (var i=0;i<$newsul.length;i++){
        //     if(i !=$(this).index() ){
        //         $newsul.eq(i)[0].style.display='none'
        //         // $newsul.eq(i)[0].hide()
        //     }
        // }
        //   $newsul.eq($(this).index())[0].style.display='block'
    });


    // function Color() {
    //     var r = Math.floor(Math.random()*255);
    //     var g = Math.floor(Math.random()*255);
    //     var b = Math.floor(Math.random()*255);
    //     return `rgba(${r},${g},${b},10)`
    // }

    var colorList = ['#eb51be', '#f8c340', '#b59dd6', '#73b842', '#4c0ed9',
        "#21cf80", "#89a5b5", '#ff944d'
    ];

    // console.log(colorList);
    //生成随机颜色
    // var randomColor = '#' + Math.floor(Math.random() * (2 << 23)).toString(16);
    // s随机色彩生成
    var $boxTag = $('.daily-tag').children();
    // console.log(randomColor)
    for (var i = 0; i < $boxTag.length; i++) {
        $boxTag[i].style.background = colorList[Math.floor(Math.random() * colorList.length)]
        // $boxTag[i].style.background = '#'+Math.floor(Math.random()*(2<<23)).toString(16)+'90';
    }


    //===== 回到顶部
    var $topUpt = $('.back-upt')
    // var $windHeight = document.documentElement.clientHeight; // 获取一页的高度
    $(window).scroll(function () {
            if ($(window).scrollTop() > 60) {
                $topUpt.fadeIn(500);
                // $topUpt[0].style.display = 'block';
            } else {
                $topUpt.fadeOut(500);
                // $topUpt[0].style.display = 'none';
            }
            $topUpt.click(function () {
                $('html').stop().animate({ scrollTop: 0 }, 500); // 解决动画多次开启
                // $('html,body').filter(':not(:animated)').animate() // 过滤掉当前
                // $('html,body').stop();//停止当前动画，继续下一个动画
                // $('html,body').stop(true);//清除元素的所有动画
                // $('html,body').stop(false, true);//让当前动画直接到达末状态 ，继续下一个动画
                // $('html,body').stop(true, true);//清除元素的所有动画，让当前动画直接到达末状态
            });

    })

    // 评论框显示

    $('.dialogue').click(function () {
      if( $(this).next().is(':hidden')){
          $(this).next().show()
      }else {
          $(this).next().hide()
      }
    })


    // 登入 注册按钮 点出

    $("#login-dj").click(function () {

        if ($('#login-box,.login-info').is(':hidden')){
            $('.register-info').hide() // 隐藏
            $('#body-img,#login-box,.login-info').show()
        }else {
            $('#body-img,#login-box').hide()
        }
    })

    $('#register-dj').click(function () {
        if ($('#login-box,.register-info').is(':hidden')){
            $('.login-info').hide() // 隐藏
            $('#login-box,.register-info,#body-img').show()
        }else {
            $('#login-box,#body-img').hide()
        }
    })

    $('.tag-i').click(function () {

        if( $('.top-cont').is(':hidden')){
            $('.top-cont').show()
        }else {
            $('.top-cont').hide()
        }

    })


});

