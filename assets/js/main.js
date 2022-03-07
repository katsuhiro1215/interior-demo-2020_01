"use strict";

$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $('.global-nav').toggleClass('active');
  });
});

// slide show
$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  arrow: true,
  dots: true,
  centerMode: true,
});

// Reveal JS
$(function () {
  ScrollReveal().reveal('.left', {
    delay: 300, // アニメーション開始までの時間
    duration: 1600, // アニメーション完了にかかる時間
    origin: 'left', // 要素がどの方向から来るか
    distance: '50px', // 移動する距離
    reset: true // フレームインの度に動かすか
  });
  ScrollReveal().reveal('.right', {
    delay: 300, // アニメーション開始までの時間
    duration: 1600, // アニメーション完了にかかる時間
    origin: 'right', // 要素がどの方向から来るか
    distance: '50px', // 移動する距離
    reset: true // フレームインの度に動かすか
  });
  ScrollReveal().reveal('.bottom', {
    delay: 300, // アニメーション開始までの時間
    duration: 1600, // アニメーション完了にかかる時間
    origin: 'bottom', // 要素がどの方向から来るか
    distance: '50px', // 移動する距離
    reset: true // フレームインの度に動かすか
  });
});
