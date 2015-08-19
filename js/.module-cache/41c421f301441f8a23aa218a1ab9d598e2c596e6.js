(function() {
  var Menu = Semantify.Menu;
  var Item = Semantify.Item;

  var TopMenu = React.createClass({displayName: "TopMenu",
    render: function () {
      return (
        React.createElement(Menu, null, 
          React.createElement(Menu, {className: "right secondary pointing"}, 
            React.createElement(Item, {className: "active", type: "link"}, "首頁"), 
            React.createElement(Item, {type: "link"}, "營期資訊"), 
            React.createElement(Item, {type: "link"}, "歡迎新生"), 
            React.createElement(Item, {type: "link"}, "新生須知"), 
            React.createElement(Item, {type: "link"}, "學校資源")
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
