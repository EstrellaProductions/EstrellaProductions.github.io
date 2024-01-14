document.getElementById("up").innerHTML =
  '<button id="scroll-to-top" class="btn">&#9650;</button>';

document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
  var scrollToTopBtn = document.getElementById("scroll-to-top");

  // Show or hide the button based on scroll position
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  // Add click event listener to scroll to top when the button is clicked
  scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
