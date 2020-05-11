$("#menu").load("./assets/include/menu.html");
$("#footer").load("./assets/include/footer.html");
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

function myTweet() {
  var x = document.getElementById("myText").value;
  window.open('https://twitter.com/intent/tweet?&text=' + x , "_blank");
}
