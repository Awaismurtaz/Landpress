$(document).ready(function () {
    $(window).scroll(function () {
        $("#navbar").toggleClass("active", $(this).scrollTop() > 0);
    });
});
