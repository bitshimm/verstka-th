$(function () {
  $(".th__tab__item").click(function () {
    let dataTabId = $(this).attr("data-tab"),
      content = $('.th__tab__content[data-tab="' + dataTabId + '"]');
    $(".th__tab__item.active").removeClass("active");
    $(this).addClass("active");
    $(".th__tab__content").slideUp(200);
    content.slideDown(200);
  });
  $(".about__link__item a[href^='#']").click(function () {
    let anchor = $(this).attr("href");
    $(".about__link__item a.active").removeClass("active");
    $(this).addClass("active");
    $("html, body").animate(
      {
        scrollTop: $(anchor).offset().top,
      },
      600
    );
  });
  $(".th__accordion .th__accordion__item").click(function () {
    if ($(this).hasClass("active")) {
    } else {
      $(".th__accordion__item.active").removeClass("active");
      $(".th__accordion .th__accordion__content:not(.active)")
        .find(".th__accordion__content")
        .slideToggle(250);
      $(this)
        .toggleClass("active")
        .find(".th__accordion__content")
        .slideToggle(250);
      $(this);
    }
  });
});
