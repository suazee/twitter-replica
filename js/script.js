const navListItems = document.querySelectorAll(".nav-list-item");
navListItems.forEach((navListItem) => {
  navListItem.addEventListener("click", function () {
    navListItems.forEach((el) => {
      el.classList.remove("nav-list-link--active");
      navListItem.classList.add("nav-list-link--active");
    });
  });
});

const stickyIconLinks = document.querySelectorAll(".sticky-icon-link");
stickyIconLinks.forEach((stickyIconLink) => {
  stickyIconLink.addEventListener("click", function () {
    stickyIconLinks.forEach((el) => {
      el.classList.remove("sticky-icon--active");
      stickyIconLink.classList.add("sticky-icon--active");
    });
  });
});

const happening = document.querySelector("#happening");
const visiblePostBox = document.querySelector(".visible-post-box");
const btnSm = document.querySelector(".btn--sm");
const locationIcon = document.querySelector(".location-icon");
happening.addEventListener("click", function () {
  visiblePostBox.classList.remove("hidden");
  btnSm.classList.remove("btn--sm-inactive");
  locationIcon.classList.remove("header-icon--inactive");
});

const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const searchBox = document.querySelector(".search-box");
const searchBoxPosition = searchBox.getBoundingClientRect();
const body = document.body;

searchBox.addEventListener("click", function () {
  searchBox.classList.add("search-box--active");
});

body.addEventListener("click", function (e) {
  if (
    e.clientX < searchBoxPosition.x ||
    e.clientX > searchBoxPosition.x + searchBoxPosition.width ||
    e.clientY > searchBoxPosition.y + searchBoxPosition.height
  ) {
    searchBox.classList.remove("search-box--active");
  }
});

const aside = document.querySelector(".aside");
const asideEndDetector = document.querySelector(".aside-end-detector");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    const asideEndDetectorPosition = asideEndDetector.getBoundingClientRect().y;
    // alert(ent);
    // console.log(ent);
    if (ent.isIntersecting && asideEndDetectorPosition > 400) {
      aside.classList.add("sticky-aside");
    }
    if (!ent.isIntersecting && asideEndDetectorPosition > 400) {
      aside.classList.remove("sticky-aside");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "0px",
  }
);
obs.observe(asideEndDetector);

const containerMain = document.querySelector(".container--main");
const stickyHeaderMain = document.querySelector(".sticky-header--main");
const stickyIconList = document.querySelector(".sticky-icon-list");

let containerMainSize = containerMain.getBoundingClientRect().width;
stickyIconList.style.width = `${containerMainSize}px`;
stickyHeaderMain.style.width = `${containerMainSize - 5}px`;

const containerAside = document.querySelector(".container--aside");
const stickyHeaderAside = document.querySelector(".sticky-header--aside");

let containerAsideSize = containerAside.getBoundingClientRect().width;
stickyHeaderAside.style.width = `${containerAsideSize - 5}px`;

// const stickyNav = document.querySelector(".nav");

// let screenHeight = window.innerHeight;
// stickyNav.style.height = `${screenHeight}px`;

window.addEventListener("resize", function () {
  containerMainSize = containerMain.getBoundingClientRect().width;
  containerAsideSize = containerAside.getBoundingClientRect().width;
  // screenHeight = window.innerHeight;
  // stickyNav.style.height = `${screenHeight}px`;

  // console.log(this.getComputedStyle(stickyIconList).width);
  stickyIconList.style.width = `${containerMainSize}px`;
  stickyHeaderMain.style.width = `${containerMainSize - 5}px`;
  stickyHeaderAside.style.width = `${containerAsideSize - 5}px`;
});
