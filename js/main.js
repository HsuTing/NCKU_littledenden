(function() {
  //semantic framework
  var Menu = Semantify.Menu;
  var Item = Semantify.Item;
  var Icon = Semantify.Icon;

  var data = [
    {
      "item": "首頁",
      "class": "active",
      "icon": "",
      "submenu": []
    },
    {
      "item": "營期資訊",
      "class": "",
      "icon": "",
      "submenu": []
    },
    {
      "item": "歡迎新生",
      "class": "ui dropdown",
      "icon": "dropdown",
      "submenu": [
        {"item": "醫學院"},
        {"item": "生物科學與科技學院"},
        {"item": "管理學院"},
        {"item": "工學院"},
        {"item": "理學院"},
        {"item": "規劃與設計學院"},
        {"item": "社會科學院"},
        {"item": "電機資訊學院"},
        {"item": "文學院"},
        {"item": "不分學院"}
      ]
    },
    {
      "item": "新生須知",
      "class": "ui dropdown",
      "icon": "dropdown",
      "submenu": [
        {"item": "入學資訊"},
        {"item": "常見Ｑ＆Ａ"}
      ]
    },
    {
      "item": "學校資源",
      "class": "",
      "icon": "",
      "submenu": []
    }
  ];

  var SubMenu = React.createClass({displayName: "SubMenu",
    render: function() {
      var SubMenuNodes = this.props.data.map(function (d) {
        return (
          React.createElement(Item, null, 
            d.item
          )
        );
      });

      return (
        React.createElement("div", {className: "menu submenu"}, 
          SubMenuNodes
        )
      );
    }
  });

  var MainMenu = React.createClass({displayName: "MainMenu",
    render: function () {
      var MainMenuNodes = this.props.data.map(function(d) {
        return (
          React.createElement(Item, {className: d.class, type: "link"}, 
            d.item, 
            React.createElement(Icon, {className: d.icon}), 
            React.createElement(SubMenu, {data: d.submenu})
          )
        );
      });

      return (
        React.createElement(Menu, {className: "secondary"}, 
          React.createElement(Menu, {className: "main right secondary"}, 
            MainMenuNodes
          )
        )
      );
    }
  });
 
  React.render(
    React.createElement(MainMenu, {data: data}),
    document.getElementById('content')
  );
})();
