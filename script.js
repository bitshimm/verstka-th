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
  $(".th__accordion .th__accordion__item__title").click(function () {
    if ($(this).hasClass("active")) {
      $(this)
        .toggleClass("active")
        .siblings(".th__accordion__content")
        .slideUp(250);
      $(this)
        .find(".fa-chevron-up")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");
    } else {
      $(".th__accordion__item__title.active")
        .removeClass("active")
        .find(".fa-chevron-up")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");
      $(this)
        .find(".fa-chevron-down")
        .removeClass("fa-chevron-down")
        .addClass("fa-chevron-up");
      $(".th__accordion__item__title")
        .siblings(".th__accordion__content")
        .slideUp(250);
      $(this)
        .toggleClass("active")
        .siblings(".th__accordion__content")
        .slideToggle(250);
    }
  });
  $(".service__on__board__accordeon__block__sub__title").click(function () {
    if ($(this).hasClass("active")) {
      $(this)
        .toggleClass("active")
        .siblings(".service__on__board__accardeon__item__content")
        .slideUp(250);
      $(this)
        .find(".fa-chevron-up")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");
    } else {
      $(this)
        .closest(".service__on__board__accordeon__block")
        .find(".service__on__board__accordeon__block__sub__title.active")
        .removeClass("active")
        .find(".fa-chevron-up")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");
      $(this)
        .find(".fa-chevron-down")
        .removeClass("fa-chevron-down")
        .addClass("fa-chevron-up");
      $(this)
        .closest(".service__on__board__accordeon__block")
        .find(".service__on__board__accardeon__item__content")
        .slideUp(250);
      $(this)
        .toggleClass("active")
        .siblings(".service__on__board__accardeon__item__content")
        .slideToggle(250);
    }
  });
  $(".photo__gallery__thumb__item").click(function () {
    let $galleryLink = $(this).find("img").attr("src");
    $(".photo__gallery__large").find("img").attr("src", $galleryLink);
    $(".photo__gallery__large").find("a").attr("href", $galleryLink);
  });
  $(".photo__gallery__large a.colorbox").colorbox({
    innerHeight: 600,
    current: "Фото {current} из {total}",
  });
});
