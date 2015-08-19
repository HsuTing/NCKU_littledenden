(function() {
  var Menu = Semantify.Menu;
  var Item = Semantify.Item;
  var Icon = Semantify.Icon;

  var TopMenu = React.createClass({displayName: "TopMenu",
    render: function () {
      return (
        React.createElement(Menu, {className: "secondary"}, 
          React.createElement(Menu, {className: "main right secondary"}, 
            React.createElement(Item, {className: "active", type: "link"}, "首頁"), 
            React.createElement(Item, {type: "link"}, "營期資訊"), 
            React.createElement(Item, {className: "ui dropdown", type: "link"}, 
              "歡迎新生", 
              React.createElement(Icon, {className: "dropdown"}), 
              React.createElement("div", {className: "menu submain"}, 
                React.createElement(Item, null, "醫學院"), 
                React.createElement(Item, null, "生物科學與科技學院"), 
                React.createElement(Item, null, "管理學院"), 
                React.createElement(Item, null, "工學院"), 
                React.createElement(Item, null, "理學院"), 
                React.createElement(Item, null, "規劃與設計學院"), 
                React.createElement(Item, null, "社會科學院"), 
                React.createElement(Item, null, "電機資訊學院"), 
                React.createElement(Item, null, "文學院"), 
                React.createElement(Item, null, "不分學院")
              )
            ), 
            React.createElement(Item, {className: "ui dropdown", type: "link"}, 
              "新生須知", 
              React.createElement(Icon, {className: "dropdown"}), 
              React.createElement(Menu, {className: "submain"}, 
                React.createElement(Item, null, "入學資訊"), 
                React.createElement(Item, null, "常見Ｑ＆Ａ")
              )
            ), 
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
