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

  var SubMenu = React.createClass({
    render: function() {
      var SubMenuNodes = this.props.data.map(function (d) {
        return (
          <Item>
            {d.item}
          </Item>
        );
      });

      return (
        <div className="menu submenu">
          {SubMenuNodes}
        </div>
      );
    }
  });

  var MainMenu = React.createClass({
    render: function () {
      var MainMenuNodes = this.props.data.map(function(d) {
        return (
          <Item className={d.class} type="link">
            {d.item}
            <Icon className={d.icon}></Icon>
            <SubMenu data={d.submenu}/>
          </Item>
        );
      });

      return (
        <Menu className="secondary">
          <Menu className="main right secondary">
            {MainMenuNodes}
          </Menu>
        </Menu>
      );
    }
  });
 
  React.render(
    <MainMenu data={data} />,
    document.getElementById('content')
  );
})();
