const button = document.querySelector(".hotel-search-button");
const popup = document.querySelector(".popup-window");
const formSearch = document.querySelector(".form-search");
const arrival_date = popup.querySelector(".arrival_date");
const departure_date = popup.querySelector(".departure_date");

document.addEventListener("DOMContentLoaded", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-window-close");
});

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("popup-window-close")) {
    popup.classList.remove("popup-window-error");
    popup.classList.add("popup-window-show");
    popup.classList.remove("popup-window-close");
    arrival_date.focus();
  }
  else {
    popup.classList.add("popup-window-close");
    popup.classList.remove("popup-window-show");
  }
});

formSearch.addEventListener("submit", function (evt) {
  if (!arrival_date.value || !departure_date.value) {
    evt.preventDefault();
    popup.classList.remove("popup-window-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-window-error");
  }
})
