var $ = require('jquery');
var Semantify = require('react-semantify');
$.fn.dropdown = require('semantic-ui-dropdown');
$.fn.transition = require('semantic-ui-transition');

var Semantic = {};

//semantify init
Semantic.Menu = Semantify.Menu;
Semantic.Item = Semantify.Item;
Semantic.Icon = Semantify.Icon;
Semantic.Segment = Semantify.Segment;
Semantic.Image = Semantify.Image;
Semantic.Header = Semantify.Header;
Semantic.Divider = Semantify.Divider;

//menu init
Semantic.menu = {};
Semantic.menu.ready = function() {
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

  $('.item.dropdown').dropdown({
    on: 'hover',
    action: 'hide'
  });
};

module.exports = Semantic;
