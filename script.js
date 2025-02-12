// Select elements
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const navLinks = document.querySelector(".nav-links");

// Show navigation when hamburger icon is clicked
menuOpen.addEventListener("click", () => {
  navLinks.classList.add("show"); // Show the menu
  navLinks.classList.remove("hide");
  menuOpen.style.display = "none"; // Hide the hamburger icon
  menuClose.style.display = "block"; // Show the cross icon
});

// Hide navigation when cross icon is clicked
menuClose.addEventListener("click", () => {
  navLinks.classList.remove("show"); // Hide the menu
  navLinks.classList.add("hide");
  menuClose.style.display = "none"; // Hide the cross icon
  menuOpen.style.display = "block"; // Show the hamburger icon
});
$(document).ready(function () {
  $('#trust-slider').slick({
    rows: 1,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500
    // speed: 6000,
    // cssEase: 'linear',
    // waitForAnimate: false,
    // pauseOnFocus: false, 
    // pauseOnHover: false
  });
  $('#keynote-slider').slick({
    rows: 1,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
    // speed: 6000,
    // cssEase: 'linear',
    // waitForAnimate: false,
    // pauseOnFocus: false, 
    // pauseOnHover: false
  });
  $('#orgcomm-slider').slick({
    rows: 1,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500
    // speed: 6000,
    // cssEase: 'linear',
    // waitForAnimate: false,
    // pauseOnFocus: false, 
    // pauseOnHover: false
  });
});


const countDownDate = new Date("Jan 24, 2025 08:30:00").getTime();
if (document.querySelector('.countdown')) {
  const countdown = document.querySelector('.countdown');
  const dayscontainer = countdown.querySelector('.js-days span');
  const hourscontainer = countdown.querySelector('.js-hours span');
  const minutescontainer = countdown.querySelector('.js-minutes span');
  const secondscontainer = countdown.querySelector('.js-seconds span');


  const startCountdown = () => {
    const timer = setInterval(function () {

      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      if (distance < 0) {
        countdown.remove()
        clearInterval(timer);
      }

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      dayscontainer.innerHTML = days;
      hourscontainer.innerHTML = hours;
      minutescontainer.innerHTML = minutes;
      secondscontainer.innerHTML = seconds;

      // If the count down is finished, write some text

    }, 1000);
  }


  startCountdown();
}


// locomotive scroll

