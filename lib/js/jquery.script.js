$(function(){
  $('.select_wrap select').selectric();
  $('.select_wrap').each( function () {
      if( $(this).find('.selectric-wrapper').hasClass('selectric-disabled') ) $(this).addClass('disabled');
  });

  /*mode */
  $('.js_btn_mode').hover(function(){
        $(this).siblings().removeClass('on');
        $(this).addClass('on');
      },
      function(){
        $(this).removeClass('on');
        $(this).parent().find('.current').addClass('on');
      }
  );
  $('.js_btn_mode').on('click', function(){
    $(this).siblings().removeClass('current');
    $(this).addClass('current');
      if ($(this).hasClass('dev')) {
          $('.sidebar_nav').addClass('group');
      } else {
          $('.sidebar_nav').removeClass('group');
      }
  });

  /* tab */
  $('.js_tab > *').on('click',function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
  });

  /* input style */
  $( "label input" ).checkboxradio();

    /* sort btn */
  $('.js_btn_sort').on('click',function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
  });

  /* detail tagle open/close */
  $('.js_toggle_detail').on('click',function(){
    $(this).parent().parent().parent().parent().find('.tb_detail_wrap').slideToggle(100);
    $(this).parent().parent().parent().parent().toggleClass('close');
  });

    /* top hamburger button */
    $('.js_ham').on('click',function(){
        $(this).toggleClass('on');
    });

    /* grid table msg box */
    $('.js_msgBox').each( function(){
        var tg = $(this).parent().find('.js_hasMsg');
        var top = tg.position().top;
        var left = tg.find('td:eq(2)').position().left;
        var h = tg.height() - 10;
        $(this).css({
            top : top,
            left: left,
            height: h
        });
    });

    /* env info pop */
    $('.js_popmsg_ck').on('click',function(){
        $(this).find('.popmsg_box').fadeToggle(100);
    }).on('mouseleave', function(){
        $(this).find('.popmsg_box').fadeOut(100);
    });

    // search button
    $('.btn_search').click(function(){
        $('.tb_ctrl_search .select_wrap').css({border :'1px solid #313543'});
        $('.selectric-wrapper, .tb_ctrl .tb_ctrl_search .select_wrap input').css({display: 'block'});
        $('.tb_ctrl_search .select_wrap > *').css({background: '#f8f9fb'})
    })

    // SECLOUD 추가 Jquery
    $(".pop_wrap").draggable();

    $('.selectric-scroll ul li').click(function(){
        $('.tb_pop_toggle tr').show();
    });

    $('#popupAddTask .btn_action, #popupAddTask .btn_pop_close').click(function(){
        $('.tb_pop_toggle tr').hide();
    });
});

/* nav */
function leftNavi() {
  $('.js_nav li').each(function () {
    if ($(this).children('ul').length) $(this).addClass('hasChild');

    if ($(this).hasClass('on')) $(this).parent().parent('li').addClass('on open');
    if ($(this).hasClass('on')) $(this).parent().parent().parent().parent('li').addClass('on open');

    $(this).children('a').on('click', function(){
      $(this).parent().siblings().children('ul').slideUp(150);
      $(this).next('ul').slideDown(150);
      $(this).parent().siblings().removeClass('open');
      $(this).parent('li').addClass('open');
    });
  });
}

/* env sortable */
function sortInit(){
    $(".tb_env tbody").sortable({
        cursor: 'move',
        axis: 'y',
        handle: '.js_btn_sortable'
    }).disableSelection();

    $('.js_btn_sortable').on('mousedown', function(){
        $(this).addClass('on');
    }).on('mouseleave', function(){
        $(this).removeClass('on');
    });
}

/* dropdown */
$.fn.dropDownBox = function(options) {
    return this.each(function() {
        var $obj = $(this),
            $btn = $obj.find(".js_dropdown_btn"),
            $list = $obj.find(".js_dropdown_list");
        // 상태초기화
        function reset() {
            $(".js_dropdown").each(function () {
                $(this).removeClass('active');
                $(this).find('.js_dropdown_list').slideUp(50);
            });
        }

        $btn.on("click", function(e) {
            if (!$obj.hasClass("active")) {
                reset();
                $obj.addClass("active");
                $list.slideDown(50);
            } else { reset(); }

            $(document).on("click", function () {
                reset();
                $(document).unbind("click");
            });

            // 이벤트 방지
            e.stopPropagation();
        });

    });
};


$(function() {
    $(".js_dropdown").dropDownBox();
    sortInit();
    leftNavi();
});


$('.header_gnb_list').mouseenter(function(){
    $('.header_gnb_list > li > ul').addClass('on');
    $('.header_gnb').stop().animate({height: "230px"}).addClass('line').addClass('on');
})


$('.header_gnb').mouseleave(function(){
    $('.header_gnb_list > li > ul').removeClass('on');
    $('.header_gnb').stop().animate({height: "60px"}, function (){
        $('.header_gnb').removeClass('line').removeClass('on');
    })
})

$('.btn_all_menu').click(function (){
    $('.all_menu_wrap').fadeIn();
})

$('.btn_all_close').click(function (){
    $('.all_menu_wrap').fadeOut();
})

