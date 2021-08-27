// loading

$(window).on('load', function () {
  $('body').removeClass('stuck');
  $('.bg').css('display', 'none');
});
// js untuk navbar

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll <= 300) {
    $('.navbar').removeClass('sticky-top bg-dark navbar-dark');
    $('.jd').removeClass('murup').addClass('redup');
  } else {
    $('.navbar').addClass('sticky-top bg-dark navbar-dark');
    $('.jd').addClass('murup').removeClass('redup');
  }
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll <= 100) {
    $('.navbar').css('transform', 'translateY(0)');
    // $('.navbar').removeClass('slide0').addClass('slide1');
  } else if ((scroll >= 100, scroll <= 500)) {
    // $('.navbar').removeClass('slide1').addClass('slide-0');
    $('.navbar').css('transform', 'translateY(-300px)');
  } else {
    // $('.navbar').removeClass('slide0').addClass('slide1');
    $('.navbar').css('transform', 'translateY(0)');
  }
});

// js untuk break point
$(window).setBreakpoints({
  // use only largest available vs use all available
  distinct: true,
  // array of widths in pixels where breakpoints
  // should be triggered
  breakpoints: [320, 480, 768, 1024],
});

// $(window).bind('enterBreakpoint320', function () {
//   $('.hero').css('background-color', 'red');
// });

// $(window).bind('exitBreakpoint320', function () {
//   $('.hero').css('background-color', 'yellow');
// });

// $(window).bind('enterBreakpoint768', function () {
//   $('.hero').css('background-color', 'green');
// });

// $(window).bind('exitBreakpoint768', function () {
//   $('.hero').css('background-color', 'blue');
// });

$(window).bind('enterBreakpoint1024', function () {
  $('.ab-text').removeClass('text-center').addClass('text-start');
  // $('.img').css('width', '80%');
  // return location.reload();
});

$(window).bind('exitBreakpoint1024', function () {
  $('.ab-text').removeClass('text-start').addClass('text-center');
  // $('.img').css('width', '100%');
  // return location.reload();
});

// dislable image drag
// const img = document.querySelector('img');
// img.setAttribute('draggable', false);
const img = document.querySelector('img');
img.ondragstart = () => {
  return false;
};

// scroll
// $('#about').click(function () {
//   $('html, body').animate(
//     {
//       scrollTop: $('#sec-about').offset().top,
//     },
//     100
//   );
// });

// $('#home').click(function () {
//   $('html, body').animate(
//     {
//       scrollTop: $('#sec-hero').offset().top,
//     },
//     100
//   );
// });

// even pada saat di klik
$('.page-scroll').on('click', function (e) {
  e.preventDefault();
  // ambil isi href
  var tujuan = $(this).attr('href');
  // tangkap elemen ybs
  var elemenTujuan = $(tujuan);

  var pos = elemenTujuan.offset().top - 56;

  $('body, html').animate(
    {
      scrollTop: pos,
    },
    50
  );
});

// slide
const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  slidePerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

// After instantiation
let obj = baffle('.nama');

obj.set({
  characters: '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░',
  speed: 100,
});
setInterval(() => {
  obj.reveal(4000);
  obj.stop();
}, 3000);
setInterval(() => {
  obj.start();
}, 4000);

// particle js
// particlesJS.load(@dom-id, @path-json, @callback (optional));
particlesJS.load('particles-js', 'js/particlesjs-config.json', function () {
  // particlesJS();
  console.log('callback - particles.js config loaded');
});

// toas

$('html').load(function () {
  toast.show();
});
