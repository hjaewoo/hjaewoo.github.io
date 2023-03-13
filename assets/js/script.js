$(function () {
  var windowWidth = $(window).width();
  var windowSm = 767;
  if (windowWidth <= windowSm) {
    var headerHight = 0; // スマホのヘッダー等の高さ分の数値を入れる
  } else {
    var headerHight = 0; // PC のヘッダー等の高さ分の数値を入れる
  }
  $('a[href^="#"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
  //上へ戻る
  $(".c-pagetop").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".c-pagetop").fadeIn(500);
    } else {
      $(".c-pagetop").fadeOut();
    }
  });
  $(".c-pagetop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 500);
    return false;
  });

  //hamburger
  $(".hamburger__toggle").on("click", function () {
    $("body").toggleClass("open");
  });
  $(".l-header__content__menu ul li a").on("click", function () {
    $("body").removeClass("open");
  });
});
