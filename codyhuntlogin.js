function validateForm() {
  var username = document.forms["Papaisinthehouse"]["fname"].value;
  var password = document.forms["Papaisinthehouse"]["fpassword"].value;
  if (username == "Mr.John" && password == "Papaisinthehouse") {
    alert("The clap of his cheeks rifted space and time");
    return false;
  } else {
    alert("GO TO: https://www.youtube.com/watch?v=2ZIpFytCSVc");
  }
}