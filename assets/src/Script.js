$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("#toTopBtn");
    } else {
      $("#toTopBtn");
    }
  });

  $("#toTopBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
});
