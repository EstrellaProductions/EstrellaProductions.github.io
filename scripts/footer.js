const footer = `
<footer class="bg-dark text-light p-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <!-- Company Logo and Name -->
          <img src="assets/logo.png" alt="Company Logo" class="img-fluid mb-3 custom-logo">
          <img src="assets/future.jpg" alt="Company Logo" class="img-fluid mb-3 custom-logo">
        </div>
        <div class="col-lg-3">
          <!-- Social Media Links -->
          <h5 class="fs-5">Connect with us</h5>
          <ul class="list-unstyled">
            <li><a href="https://www.facebook.com/estellaprod" class="text-light text-decoration-none fs-5"><i
                  class="bi bi-facebook"></i>
                Facebook</a></li>
            <li><a href="https://www.instagram.com/estrellaproductions/" class="text-light text-decoration-none fs-5"><i
                  class="bi bi-instagram"></i> Instagram</a></li>
            <li><a href="mailto:estrellaproductions@teamfuture.in" class="text-light text-decoration-none fs-5"><i
                  class="bi bi-envelope"></i> Email</a></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <!-- Navigation Links and Location -->
          <h5 class="fs-5">Quick Links</h5>
          <ul class="list-unstyled">
            <li><a href="index.html" class="text-light text-decoration-none fs-5"><i class="bi bi-house-door"></i>
                Home</a></li>
            <li><a href="events.html" class="text-light text-decoration-none fs-5"><i class="bi bi-calendar"></i>
                Events</a></li>
            <li><a href="productions.html" class="text-light text-decoration-none fs-5"><i class="bi bi-film"></i>
                Productions</a></li>
            <li><a href="members.html" class="text-light text-decoration-none fs-5"><i class="bi bi-people"></i>
                Members</a></li>
            <li><a href="gallery.html" class="text-light text-decoration-none fs-5"><i class="bi bi-images"></i>
                Gallery</a></li>
            <li><a href="about.html" class="text-light text-decoration-none fs-5"><i class="bi bi-info-circle"></i>
                About Us</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h5 class="fs-5">Location</h5>
          <a href="https://maps.app.goo.gl/y6pkMSzPG5Wz3eMz7" class="text-light text-decoration-none fs-5"><i
              class="bi bi-geo-alt text-light"></i> CCV8+85M,
            Sonarpur Station Rd, Mission Pally,
            Narendrapur, Kolkata, West Bengal 700150</a>
        </div>
      </div>
      <!-- Copyright and Made with Love -->
      <div class="row mt-2">
        <div class="col-lg-12 text-center">
          <p class="fs-5">&copy; 2024 <span style="color: red;">Estrella</span> <span
              style="color: gold;">Productions</span></p>
          <p class="fs-5">Made with ❤️ at FIEM</p>
        </div>
      </div>
    </div>
  </footer>
`;

document.getElementById("footer").innerHTML = footer;
