var $ = require('jquery');
var Semantify = require('react-semantify');
$.fn.dropdown = require('semantic-ui-dropdown');
$.fn.transition = require('semantic-ui-transition');
$.fn.dimmer = require('semantic-ui-dimmer');
$.fn.accordion = require('semantic-ui-accordion');

var Semantic = {};

//semantify init
Semantic.Menu = Semantify.Menu;
Semantic.Item = Semantify.Item;
Semantic.Icon = Semantify.Icon;
Semantic.Segment = Semantify.Segment;
Semantic.Image = Semantify.Image;
Semantic.Header = Semantify.Header;
Semantic.Divider = Semantify.Divider;
Semantic.Card = Semantify.Card;
Semantic.Image = Semantify.Image;
Semantic.Dimmer = Semantify.Dimmer;
Semantic.Button = Semantify.Button;
Semantic.Accordion = Semantify.Accordion;
Semantic.Table = Semantify.Table;
Semantic.List = Semantify.List;
Semantic.Grid = Semantify.Grid;

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

//dimmer init
Semantic.dimmer = {};
Semantic.dimmer.ready = function() {
  $('.special.cards .image').dimmer({
    on: 'hover'
  });

  $('.special.cards .image .button.showpage').on('click', function() {
    $(this)
      .closest('.ui.card')
      .find('.ui.dimmer.page')
        .dimmer('show');
  });

  $('.ui.dimmer.page .icon').on('click', function() {
    $(this)
      .closest('.ui.dimmer.page')
        .dimmer('hide');
  });
};

Semantic.accordion = {};
Semantic.accordion.ready = function() {
  $('.ui.accordion')
    .accordion();
};

module.exports = Semantic;
