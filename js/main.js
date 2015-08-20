(function() {
  var Menu = Semantify.Menu;
  var Item = Semantify.Item;
  var Icon = Semantify.Icon;

  var data = [
    {"text": "醫學院"},
    {"text": "生物科學與科技學院"},
    {"text": "管理學院"},
    {"text": "工學院"},
    {"text": "理學院"},
    {"text": "規劃與設計學院"},
    {"text": "社會科學院"},
    {"text": "電機資訊學院"},
    {"text": "文學院"},
    {"text": "不分學院"}
  ];

  var subMenu = React.createClass({displayName: "subMenu",
    render: function() {
      var subMenuNodes = this.props.data.map(function (item) {
        return (
          React.createElement(Item, null, 
            item.text
          )
        );
      });
      return (
        React.createElement("div", {className: "menu submenu"}, 
          subMenuNodes
        )
      );
    }
  });

  var mainMenu = React.createClass({displayName: "mainMenu",
    render: function () {
      return (
        React.createElement(Menu, {className: "secondary"}, 
          React.createElement(Menu, {className: "main right secondary"}, 
            React.createElement(Item, {className: "active", type: "link"}, "首頁"), 
            React.createElement(Item, {type: "link"}, "營期資訊"), 
            React.createElement(Item, {className: "ui dropdown", type: "link"}, 
              "歡迎新生", 
              React.createElement(Icon, {className: "dropdown"}), 
              React.createElement("subMenu", {data: this.props.data})
            ), 
            React.createElement(Item, {className: "ui dropdown", type: "link"}, 
              "新生須知", 
              React.createElement(Icon, {className: "dropdown"}), 
              React.createElement("div", {className: "menu submain"}, 
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
    React.createElement("mainMenu", {data: data}),
    document.getElementById('content')
  );
})();
