(function() {
  var Menu = Semantify.Menu;
  var Item = Semantify.Item;
  var Segment = Semantify.Segment;

  var TopMenu = React.createClass({displayName: "TopMenu",
    render: function () {
      return (
        React.createElement(Segment, {className: "inverted"}, 
            React.createElement(Menu, {className: "right inverted secondary pointing"}, 
              React.createElement(Item, {className: "active", type: "link"}, "首頁"), 
              React.createElement(Item, {type: "link"}, "營期資訊")
            )
        )
      );
    }
  });
 
  React.render(
    React.createElement(TopMenu, null),
    document.getElementById('content')
  );
})();
