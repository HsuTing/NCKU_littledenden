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

  var SubMenu = React.createClass({
    render: function() {
      var SubMenuNodes = this.props.data.map(function (item) {
        return (
          <Item>
            {item.text}
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
      return (
        <Menu className="secondary">
          <Menu className="main right secondary">
            <Item className="active" type="link">首頁</Item>
            <Item type="link">營期資訊</Item>
            <Item className="ui dropdown" type="link">
              歡迎新生
              <Icon className="dropdown"></Icon>
              <SubMenu data={this.props.data} />
            </Item>
            <Item className="ui dropdown" type="link">
              新生須知
              <Icon className="dropdown"></Icon>
              <div className="menu submain">
                <Item>入學資訊</Item>
                <Item>常見Ｑ＆Ａ</Item>
              </div>
            </Item>
            <Item type="link">學校資源</Item>
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
