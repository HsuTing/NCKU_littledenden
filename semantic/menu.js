$('.ui.menu')
  .on('click', '.item', function() {
    if(!$(this).hasClass('dropdown')) {
      $(this)
        .addClass('active')
        .closest('.ui.menu')
        .find('.item')
          .not($(this))
          .removeClass('active');
    }
  });

$('.item.dropdown')
  .dropdown({
    on: 'hover',
    action: 'hide'
  });
