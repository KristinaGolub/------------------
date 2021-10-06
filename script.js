/***  Форма (начало) ***/
function showErrorMessage(el, errorMessage) {
  let $el = $(el);
  $el.addClass("error");

  if (errorMessage) {
    $errorContainer = $('<span class="error-message"><span>');
    $errorContainer.text(errorMessage);
    $el.append($errorContainer);
  }
}

function clearErrorMessage(el) {
  let $el = $(el);
  $el.removeClass("error");
  let $errorMessage = $el.find(".error-message");
  $errorMessage.remove();
}

$(".validate input").on("focus", function (e) {
  let $parentId = $(this).parent(".validate").attr("id");
  clearErrorMessage(`#${$parentId}`);
});

$("#feedback-form").on("submit", function (e) {
  let $username = $("#username");
  let $contactPerson = $("#contactPerson");
  let $phone = $("#phone");
  let $agreement = $("#agreement");

  let isValidedUsername = isValidText($username.find("input").val());
  let isValidedContactPerson = isValidText($contactPerson.find("input").val());
  let isValidedPhone = isValidPhone($phone.find("input").val());
  let isValidedAgreement = $agreement.find("input").is(":checked");

  if (!isValidedUsername) {
    clearErrorMessage("#username");
    showErrorMessage("#username", "Необходимо заполнить поле");
  }
  if (!isValidedContactPerson) {
    clearErrorMessage("#contactPerson");
    showErrorMessage("#contactPerson", "Необходимо заполнить поле");
  }

  if (!isValidedPhone) {
    clearErrorMessage("#phone");
    showErrorMessage("#phone", "Необходимо заполнить поле");
  }

  if (!isValidedAgreement) {
    clearErrorMessage("#agreement");
    showErrorMessage("#agreement");
  }

  if (
    !isValidedUsername ||
    !isValidedContactPerson ||
    !isValidedPhone ||
    !isValidedAgreement
  ) {
    e.preventDefault();
  }
});

function isValidText(text) {
  return Boolean(text);
}

//https://qna.habr.com/q/84360
function isValidPhone(phone) {
  let regex =
    /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;
  return regex.test(phone);
}

/***  Форма (конец) ***/



//***  Карусель (начало) ***/
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    nav: true,
    dots: true,
    items: 5,
    startPosition: 1,
    loop: false,
    margin: 10,
    navText: ["<i class='image-prev'></i>", "<i class='image-next'></i>"],
    dotsContainer: ".owl-dots",
    navContainer: ".owl-nav",
    dotsData: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

/***  Карусель (конец) ***/
