
document.addEventListener('DOMContentLoaded', function() {
  var preloader = document.getElementById('preloader');
  var content = document.getElementById('content');
  
  preloader.style.display = 'none';
  content.style.display = 'block';
});

/////////////////// Menu icon ///////////////////////

const toggleBtn = document.querySelector(".menuicon");
const dropdownmenu = document.querySelector(".dropdown-menu");
toggleBtn.onclick = function () {
  dropdownmenu.classList.toggle("open");
};

const downBtn1 = document.querySelector(".question1");
const answer_1 = document.querySelector(".answer1");
downBtn1.onclick = function () {
  answer_1.classList.toggle("open");
};

const downBtn2 = document.querySelector(".question2");
const answer_2 = document.querySelector(".answer2");
downBtn2.onclick = function () {
  answer_2.classList.toggle("open");
};

const downBtn3 = document.querySelector(".question3");
const answer_3 = document.querySelector(".answer3");
downBtn3.onclick = function () {
  answer_3.classList.toggle("open");
};
const downBtn4 = document.querySelector(".question4");
const answer_4 = document.querySelector(".answer4");
downBtn4.onclick = function () {
  answer_4.classList.toggle("open");
};
const downBtn5 = document.querySelector(".question5");
const answer_5 = document.querySelector(".answer5");
downBtn5.onclick = function () {
  answer_5.classList.toggle("open");
};

////////////////////////////////Read more buttons////////////////////////

document.getElementById("readMoreBtn").addEventListener("click", function () {
  var content = document.querySelector(".readcontent");
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    this.innerHTML =
      'Read More <span class="material-symbols-outlined">keyboard_double_arrow_down</span>';
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    this.innerHTML =
      'Read Less <span class="material-symbols-outlined">keyboard_double_arrow_up</span>';
  }
});

document.getElementById("readMoreBtn1").addEventListener("click", function () {
  var content = document.querySelector(".readcontent1");
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    this.innerHTML =
      'Read More <span class="material-symbols-outlined">keyboard_double_arrow_down</span>';
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    this.innerHTML =
      'Read Less <span class="material-symbols-outlined">keyboard_double_arrow_up</span>';
  }
});

document.getElementById("readMoreBtn2").addEventListener("click", function () {
  var content = document.querySelector(".readcontent2");
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    this.innerHTML =
      'Read More <span class="material-symbols-outlined">keyboard_double_arrow_down</span>';
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    this.innerHTML =
      'Read Less <span class="material-symbols-outlined">keyboard_double_arrow_up</span>';
  }
});

window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      var scrollTopBtn = document.getElementById("scrollTopBtn");

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollTopBtn.style.display = "flex";
      } else {
          scrollTopBtn.style.display = "none";
      }
  }

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
