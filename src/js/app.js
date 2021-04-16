import '../scss/app.scss';

$('.custom-checkbox').click(function (event) {
  $('.form__wrap--temperature').toggleClass('hidden');
});

$(document).ready(function () {
  const btnSelector = '.form__btn';
  const btnText = '.form__btn-txt';
  const targetMenuSelector = '.form__list';
  $(btnSelector).each(function () {
    $(this).click(function (event) {
      console.log(this);
      console.log('click');
      const $targetElem = $(this).parent().find(targetMenuSelector);
      $(this).parent().find(targetMenuSelector).toggleClass('hidden');
      $(document).mouseup(function (e) {
        let container = $targetElem;
        if (container.has(e.target).length === 0) {
          container.addClass('hidden');
        }
      });
    });
  });
  $('.form__clause').each(function () {
    $(this).click(function (event) {
      $(event.currentTarget).parents('.form__collapse').find(btnText).html($(event.currentTarget).html());
      $(event.currentTarget).parents('.form__collapse').find(btnText).addClass('chosen').removeClass('not-chosen');
      $(event.currentTarget).parents('.form__collapse').find(targetMenuSelector).addClass('hidden');
    });
  });
});