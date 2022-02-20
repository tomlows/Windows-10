// ==== OPEN START MENU ACTIVE ==== //
let startMenu = document.querySelector(".start-menu");
let startMenuBtn = document.querySelector(".bxl-windows");
startMenuBtn.addEventListener("click", ()=>{
    startMenu.classList.toggle("start-menu-open");
});

// ==== LEFT START MENU HIDE ==== //
var $JQuery2 = jQuery.noConflict()
$JQuery2(function () {
    $JQuery2(".left-start-menu").hover(
        function () {
            $JQuery2(".left-start-menu-hide").addClass("left-0");
        },
        function () {
            $JQuery2(".left-start-menu-hide").removeClass("left-0");
        });

    $JQuery2(".left-start-menu-hide").hover(
        function () {
            $JQuery2(".left-start-menu-hide").addClass("left-0");
        },
        function () {
            $JQuery2(".left-start-menu-hide").removeClass("left-0");
        });
});

// ==== OPEN NOTIFICATION MANAGER ACTIVE ==== //
let notificationManager = document.querySelector(".notification-manager");
let notificationManagerIcon = document.querySelector(".notification-manager-icon");
notificationManagerIcon.addEventListener("click", ()=>{
    notificationManager.classList.toggle("notification-manager-open");
});

// ==== OFFCANVAS-NOTIFICATION MANAGER ACTIVE ==== //
let offCanvasMenu = document.querySelector("body");
let startMenuButtonOffCanvasMenu = document.querySelector(".bxl-windows");
let notificationManagerIconOffCanvasMenu = document.querySelector(".notification-manager");

startMenuButtonOffCanvasMenu.addEventListener("click", ()=>{
    offCanvasMenu.classList.toggle("offcanvas-menu");
});
notificationManagerIconOffCanvasMenu.addEventListener("click", ()=>{
    offCanvasMenu.classList.toggle("offcanvas-menu");
});

// ==== START MENU & BODY DISABLED ==== //
$(document).mouseup(function (e) {
    var container = $("workspace");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('.notification-manager').hasClass('notification-manager-open')) {
            $('.notification-manager').removeClass('notification-manager-open');
        }
    }

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('.start-menu').hasClass('start-menu-open')) {
            $('.start-menu').removeClass('start-menu-open');
        }
    }
    
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas-menu')) {
            $('body').removeClass('offcanvas-menu');
        }
    }
});

// ==== DARKMODE ==== //
var clearcolor = '#ffffff'
var darkcolor = '#141414'

if (localStorage.getItem('idmode') == null) {
  document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${clearcolor}">`
}

const nightMode = document.querySelector('#darkmod')
nightMode.addEventListener('click', () => {
  document.documentElement.classList.toggle('darkmode')

  if (document.documentElement.classList.contains('darkmode')) {
    localStorage.setItem('idmode', true)
    document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${darkcolor}">`
    document.querySelector("[name='theme-color']").remove()
    return
  }

  localStorage.removeItem('idmode')
  document.querySelector("[name='theme-color']").remove()
  document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${clearcolor}">`
})

const nightModeStorage = localStorage.getItem('idmode')
if (nightModeStorage) {
  document.documentElement.classList.add('darkmode')
  document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${darkcolor}">`
  nightMode.checked = true
}

// ==== OPEN MODALS ==== //
$(function () {
    var effecttime = 200;

    $("[data-modalopen]").click(function (e) {
        var clicked = $(this);
        var modal = clicked.data("modalopen");
        $(".web_modal").fadeIn(effecttime).css("display", "flex");
        $(modal).fadeIn(effecttime);
    });

    $("[data-modalclose]").click(function (e) {
        if (e.target === this) {
            $(this).fadeOut(effecttime);
            $(this).children().fadeOut(effecttime);
        }
    });

});