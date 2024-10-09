var slider = tns({
  container: ".services__slider",
  items: 3,
  speed: 1000,
  gutter: 100,
  slideBy: "1",
  autoplay: false,
  navPosition: "top",
  containerControls: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
  responsive: {
    1250: {
      items: 3,
      gutter:100,
    },
    200: {
      items: 2,
      gutter:40,
    },
  },
});
