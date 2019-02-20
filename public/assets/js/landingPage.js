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
  obj.bus_address = $("#clientAddress")
    .val()
    .trim();
  obj.bus_website = $("#clientwebsite")
    .val()
    .trim();
  obj.bus_number = $("#clientNumber")
    .val()
    .trim();
  obj.first_apt = $("#clientFirstApp option:selected")
    .val()
    .trim();
  obj.last_apt = $("#clientLastApp option:selected")
    .val()
    .trim();
  obj.file = $("#fileUpload")[0].files[0];

  console.log(obj);

  var r = new FileReader();
  r.onload = function() { 
    obj.file = r.result;

    console.log(obj);
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
  };

  r.readAsBinaryString(obj.file)
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
