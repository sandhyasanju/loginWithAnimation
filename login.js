$(document).ready(function () {
  var images = ["username.jpeg" , "password.jpeg" , "or.png" , "sign.png" , "with.png" , "google.jpeg" , "or.png" , "facebook.jpg" , "forgot.gif" , "signup.jpeg"];
  var imageId = 0;
  var time = 0;
  time = setInterval(function () {
    $("#initialImage").attr("src" , images[imageId]);
    imageId++;
    if(imageId === images.length)
    imageId = 0;
  }, 2000);
  $("#username").on("click" ,function() {
    clearInterval(time);
    $("#initialImage").attr("src" , "username.jpeg");
    });
    $("#password").click(function() {
      clearInterval(time);
      $("#initialImage").attr("src" , "username.jpeg");
    });
    $("#login").click(function() {
      clearInterval(time);
      $("#initialImage").attr("src" ,"password.jpeg");
    });
    $("#googleplus").click(function() {
      clearInterval(time);
      $("#initialImage").attr("src" , "google.jpeg");
    });
    $("#facebook").click(function() {
      clearInterval(time);
      $("#initialImage").attr("src" , "facebook.jpg");
    });
    $("#forgotPassword").click(function() {
      clearInterval(time);
      $("#initialImage").attr("src" , "forgot.gif");
    });
    $("#signup").click(function() {
      clearInterval(time);
      $("#initialImage").attr("src" , "signup.jpeg");
    });
});
