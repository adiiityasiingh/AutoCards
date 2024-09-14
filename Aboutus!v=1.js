document.getElementById("aboutusreadMoreBtn").addEventListener("click", function () {
  var content = document.querySelector(".aboutcontent");
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

document.getElementById("autocardreadMoreBtn").addEventListener("click", function () {
  var content = document.querySelector(".autocontent");
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