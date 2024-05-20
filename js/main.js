AOS.init();

(function () {
  // Создаём таймер
  setTimeout(function () {
    document.getElementById("videoNone").style.display = "none";
    document.getElementById("rigthShow").style.display = "block";
    document.getElementById("leftShow").style.display = "flex";
  }, 4000); // 10000 мсек = 10 сек
})();

// Скрипт для header

let lastScroll = 0;
const defaultOffset = 100;
const header = document.querySelector(".header");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    //scroll down
    header.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    //scroll up
    header.classList.remove("hide");
  }

  lastScroll = scrollPosition();
});

document.addEventListener("scroll", () => {
  if (scrollPosition() > defaultOffset) {
    header.classList.add("small-hide");
  } else if (scrollPosition() < defaultOffset) {
    header.classList.remove("small-hide");
    lastScroll = scrollPosition();
  }
});

// Скрипт для анимации

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// функция для пререзагрузки с начала страницы

history.scrollRestoration = "manual";

$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});

// блок мой expirience

function Babynokl() {
  document.getElementById("exp-4").classList.add("color-hover-experience");
  document.getElementById("exp-4").classList.remove("color-hover-experience2");
  document.getElementById("text-onclick1").innerHTML =
    "Frontend developer on React";
  document.getElementById("text-onclick1-1").innerHTML = " @ Babynokl";
  document.getElementById("text-onclick2").innerHTML =
    "January 2024 - April 2024";
  document.getElementById("text-onclick3-1").innerHTML =
    "Created and optimized interactive interfaces using Reac";
  document.getElementById("text-onclick3-2").innerHTML =
    "Integrated server APIs, managed application state using Redux and Context API";
  document.getElementById("text-onclick3-3").innerHTML =
    "Reduced page load times and improved rendering to improve application performance.";

  document.getElementById("exp-1").classList.add("color-hover-experience2");
  document.getElementById("exp-1").classList.remove("color-hover-experience");

  document.getElementById("exp-2").classList.add("color-hover-experience2");
  document.getElementById("exp-2").classList.remove("color-hover-experience");

  document.getElementById("exp-3").classList.add("color-hover-experience2");
  document.getElementById("exp-3").classList.remove("color-hover-experience");

  document.getElementById("exp-5").classList.add("color-hover-experience2");
  document.getElementById("exp-5").classList.remove("color-hover-experience");

  document.getElementById("exp-6").classList.add("color-hover-experience2");
  document.getElementById("exp-6").classList.remove("color-hover-experience");
}

function Upstatement() {
  document.getElementById("exp-1").classList.add("color-hover-experience");
  document.getElementById("exp-1").classList.remove("color-hover-experience2");
  document.getElementById("text-onclick1").innerHTML =
    "FullStake developer on Laravel and Vue";
  document.getElementById("text-onclick1-1").innerHTML = " @ Id Store";
  document.getElementById("text-onclick2").innerHTML =
    "October - December 2023";
  document.getElementById("text-onclick3-1").innerHTML =
    "Creation and support of server infrastructure, interaction with databases, development of site business logic";
  document.getElementById("text-onclick3-2").innerHTML =
    "Integration with external services, performance optimization, API development, as well as application security";
  document.getElementById("text-onclick3-3").innerHTML =
    "Created and configured an administrative panel for the online store, providing convenient management of store content and data.";

  document.getElementById("exp-2").classList.add("color-hover-experience2");
  document.getElementById("exp-2").classList.remove("color-hover-experience");

  document.getElementById("exp-3").classList.add("color-hover-experience2");
  document.getElementById("exp-3").classList.remove("color-hover-experience");

  document.getElementById("exp-4").classList.add("color-hover-experience2");
  document.getElementById("exp-4").classList.remove("color-hover-experience");

  document.getElementById("exp-5").classList.add("color-hover-experience2");
  document.getElementById("exp-5").classList.remove("color-hover-experience");

  document.getElementById("exp-6").classList.add("color-hover-experience2");
  document.getElementById("exp-6").classList.remove("color-hover-experience");
}

function scout() {
  document.getElementById("exp-2").classList.add("color-hover-experience");
  document.getElementById("exp-2").classList.remove("color-hover-experience2");
  document.getElementById("text-onclick1").innerHTML = "FullStack developer";
  document.getElementById("text-onclick1-1").innerHTML = " @ Support.ru";
  document.getElementById("text-onclick2").innerHTML = "July - September 2023";
  document.getElementById("text-onclick3-1").innerHTML =
    "Software development both on the client (frontend) and server side (backend)";
  document.getElementById("text-onclick3-2").innerHTML =
    "Creating a user interface (UI) using markup languages (HTML), styles (CSS) and scripts (JavaScript)";
  document.getElementById("text-onclick3-3").innerHTML =
    "Using the Laravel backend framework for interaction between the server and client parts.";

  document.getElementById("exp-1").classList.add("color-hover-experience2");
  document.getElementById("exp-1").classList.remove("color-hover-experience");

  document.getElementById("exp-3").classList.add("color-hover-experience2");
  document.getElementById("exp-3").classList.remove("color-hover-experience");

  document.getElementById("exp-4").classList.add("color-hover-experience2");
  document.getElementById("exp-4").classList.remove("color-hover-experience");

  document.getElementById("exp-5").classList.add("color-hover-experience2");
  document.getElementById("exp-5").classList.remove("color-hover-experience");

  document.getElementById("exp-6").classList.add("color-hover-experience2");
  document.getElementById("exp-6").classList.remove("color-hover-experience");
}

function apple() {
  document.getElementById("exp-3").classList.add("color-hover-experience");
  document.getElementById("exp-3").classList.remove("color-hover-experience2");
  document.getElementById("text-onclick1").innerHTML = "Layout designer";
  document.getElementById("text-onclick1-1").innerHTML = " @ Art-Web";
  document.getElementById("text-onclick2").innerHTML = "February - June 2023";
  document.getElementById("text-onclick3-1").innerHTML =
    "Layout using HTML and CSS, development of interactive elements using JavaScript";
  document.getElementById("text-onclick3-2").innerHTML =
    "Integration of design into functional user interfaces, ensuring cross-browser compatibility and adaptability";
  document.getElementById("text-onclick3-3").innerHTML =
    "Code debugging to ensure a high level of functionality and quality user experience.";

  document.getElementById("exp-1").classList.add("color-hover-experience2");
  document.getElementById("exp-1").classList.remove("color-hover-experience");

  document.getElementById("exp-2").classList.add("color-hover-experience2");
  document.getElementById("exp-2").classList.remove("color-hover-experience");

  document.getElementById("exp-4").classList.add("color-hover-experience2");
  document.getElementById("exp-4").classList.remove("color-hover-experience");

  document.getElementById("exp-5").classList.add("color-hover-experience2");
  document.getElementById("exp-5").classList.remove("color-hover-experience");

  document.getElementById("exp-6").classList.add("color-hover-experience2");
  document.getElementById("exp-6").classList.remove("color-hover-experience");
}

//блок others projects

function showLess() {
  //добавить элементы
  let othersPrj = document.getElementById("tmpl-others-progects").innerHTML;
  document.getElementById("box-oth-prj").innerHTML += othersPrj;
  document.getElementById("btn-oth-prj-sh-more").remove();
}

function showMore() {
  //убрать элементы

  document.getElementById("box-remove1").remove();
  document.getElementById("box-remove2").remove();
  document.getElementById("box-remove3").remove();
  document.getElementById("box-remove4").remove();
  document.getElementById("box-remove5").remove();
  document.getElementById("box-remove6").remove();
  document.getElementById("btn-oth-prj-sh-less").remove();

  let othersProj = document.getElementById("tmpl-others-progects2").innerHTML;
  document.getElementById("box-oth-prj").innerHTML += othersProj;
}

$(function () {
  // моб.меню
  var menuButton = $("#js-menu-button");
  menuButton.click(function () {
    if (menuButton.hasClass("is-open")) {
      menuButton.removeClass("is-open");
      $(".menu").removeClass("is-show");
      $("body").removeClass("body-hidden");
    } else {
      menuButton.addClass("is-open");
      $(".menu").addClass("is-show");
      $("body").addClass("body-hidden");
    }
    return false;
  });
  $(document).on("click", ".menu.is-show .menu-link", function () {
    menuButton.removeClass("is-open");
    $(".menu").removeClass("is-show");
    $("body").removeClass("body-hidden");
  });

  // высота окна
  function checkWin() {
    $(".headline").css("height", $(window).height() - 102 + "px");
  }
  $(window).on("load resize", checkWin);

  // выбор языка
  $(document).on("click", ".lang-curr-js", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".lang-all-js").removeClass("active");
    } else {
      $(this).addClass("active");
      $(".lang-all-js").addClass("active");
    }
  });
});
