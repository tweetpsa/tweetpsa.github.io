var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function myTweet() {
  var x = document.getElementById("myText").value;
  window.open('https://twitter.com/intent/tweet?&text=' + x , "_blank");
}
