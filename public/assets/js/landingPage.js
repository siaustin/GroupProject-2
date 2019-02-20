$("#clientSignup").on("click", function(event) {
  event.preventDefault();
  var obj = {};
  obj.email = $("#clientEmail")
    .val()
    .trim();
  obj.password = $("#clientPassw")
    .val()
    .trim();
  obj.bus_name = $("#clientName")
    .val()
    .trim();
  obj.first_apt = $("#clientFirstApp")
    .val()
    .trim();
  obj.last_apt = $("#clientLastApp")
    .val()
    .trim();
  $.ajax({
    method: "POST",
    url: "/signup",
    data: obj
  }).then(function(response) {
    if (response.message) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: response.message
      });
    } else {
      window.location.replace("/client");
    }
  });
});

$("#clientLogin").on("click", function(event) {
  event.preventDefault();
  var login = {};
  login.email = $("#landingPageEmail")
    .val()
    .trim();
  login.password = $("#landingPagePassword")
    .val()
    .trim();
  $.ajax({
    method: "POST",
    url: "/signin",
    data: login
  }).then(function(response) {
    if (response.message) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: response.message
      });
    } else {
      window.location.replace("/client");
    }
  });
});

// Smooth Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});
