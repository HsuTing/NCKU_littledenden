(function() {
  var Menu = Semantify.Menu;
  var Item = Semantify.Item;
  var Segment = Sementify.Segment;

  var TopMenu = React.createClass({displayName: "TopMenu",
    render: function () {
      return (
        React.createElement(Menu, null, 
          React.createElement(Item, {className: "active", type: "link", id: "home"}, 
            React.createElement(Icon, {className: "home"}), " 首頁"
          ), 
          React.createElement(Item, {type: "link", id: "team"}, 
            React.createElement(Icon, {className: "flag"}), " 比賽隊伍"
          ), 
          React.createElement(Item, {type: "link", id: "result"}, 
            React.createElement(Icon, {className: "bar chart"}), " 比賽結果"
          ), 

          React.createElement(Menu, {className: "right"}, 
            React.createElement(Item, null, 
              React.createElement(Input, {className: "transparent icon", placeholder: "Search...", type: "text"}), 
              React.createElement(Icon, {className: "search"})
            )
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
