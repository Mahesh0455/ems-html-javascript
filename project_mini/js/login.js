function loginAsAdmin() {
  console.log("admin");
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  if (email == "test@admin.com" && pass == "admin") {
    window.alert("Logging in as Admin");
    $(document).ready(function () {
      $("#renderPage").load("admin-dashboard.html");
    });
  }
}

function loginAsEmployee() {
  console.log("user");
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  if (email == "test@user.com" && pass == "user") {
    window.alert("Logging in as employee");
    $(document).ready(function () {
      $("#renderPage").load("employee-dashboard.html");
    });
  }
}
