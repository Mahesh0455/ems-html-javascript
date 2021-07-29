$(document).ready(function () {
  $("#leave").on("click", function () {
    $("#renderPage").load("leaves.html");
  });
});
function applyLeaves() {
  var x = document.getElementById("myDate");
  var defaultVal = x.defaultValue;
  var currentVal = x.value;
  console.log(defaultVal);
  console.log(currentVal);
}
function getDate() {
  var x = document.getElementById("myDate");
  var defaultVal = x.defaultValue;
  var currentVal = x.value;
  console.log(defaultVal);
  console.log(currentVal);
}
