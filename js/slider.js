var slider = tns({
  container: ".banner__slider",
  items: 1,
  speed: 300,
  slideBy: "page",
  autoplay: true,
  nav: true, // Navigation dots enabled
  navPosition: "bottom", // Position at the bottom
  controls: false,
  responsive: {
    1250: {
      items: 1,
    },
    200: {
      items: 1,
    },
  },
});

// var slider = tns({
//   container: ".services__slider",
//   items: 3,
//   speed: 200,
//   gutter: 100,
//   slideBy: "page ",
//   autoplay: true,
//   navPosition: "bottom",
//   // containerControls: "#controls",
//   // prevButton: ".prev",
//   // nextButton: ".next",
//   responsive: {
//     1250: {
//       items: 1,
//     },
//     200: {
//       items: 1,
//     },
//   },
// });

var serviceSlider = tns({
  container: ".services__slider",
  items: 3, // Display 3 items by default
  slideBy: "page",
  autoplay: true,
  controlsContainer: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
  nav: false, // Disable nav dots if unnecessary
  speed: 300,
  responsive: {
    1024: {
      items: 3, // Show 3 items on screens wider than 1024px
    },
    520: {
      items: 2, // Show 2 items on tablet-sized screens
    },
    480: {
      items: 1, // Show 1 item on mobile screens
    },
  },
});


