(function() {
  var Menu = Semantify.Menu;
  var Item = Semantify.Item;
  var Icon = Semantify.Icon;

  var TopMenu = React.createClass({
    render: function () {
      return (
        <Menu className="secondary">
          <Menu className="main right secondary">
            <Item className="active" type="link">首頁</Item>
            <Item type="link">營期資訊</Item>
            <Item className="ui dropdown" type="link">
              歡迎新生
              <Icon className="dropdown"></Icon>
              <div className="menu submain">
                <Item>醫學院</Item>
                <Item>生物科學與科技學院</Item>
                <Item>管理學院</Item>
                <Item>工學院</Item>
                <Item>理學院</Item>
                <Item>規劃與設計學院</Item>
                <Item>社會科學院</Item>
                <Item>電機資訊學院</Item>
                <Item>文學院</Item>
                <Item>不分學院</Item>
              </div>
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
    <TopMenu/>,
    document.getElementById('content')
  );
})();
