const header = `
<nav class="navbar sticky-top navbar-expand-lg navbar-light">
      <a class=" navbar-brand d-lg-none" href="#"><img src="assets/logo.png" /></a>

      <button class="navbar-toggler second-button" type="button" data-toggle="collapse" data-target="#myNavbarToggler7"
        aria-controls="myNavbarToggler7" aria-expanded="false" aria-label="Toggle navigation">
        <div class="animated-icon2">
          <span></span><span></span><span></span><span></span>
        </div>
      </button>

      <div class="collapse navbar-collapse" id="myNavbarToggler7">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="events.html">EVENTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="productions.html">PRODUCTIONS</a>
          </li>
          <li class="nav-item">
            <a class="d-none d-lg-block" href="#"><img src="assets/logo.png" id="nav-img-full" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="members.html">MEMBERS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="gallery.html">GALLERY</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">ABOUT US</a>
          </li>
        </ul>
      </div>
    </nav>
`;

document.getElementById("header").innerHTML = header;

$(document).ready(function () {
  $(".second-button").on("click", function () {
    $(".animated-icon2").toggleClass("open");
  });
});
