var TopMenu = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        semantic.menu.ready();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    //semantic framework
    var Menu = Semantify.Menu;
    var Item = Semantify.Item;
    var Icon = Semantify.Icon;

    var SubMenu = React.createClass({
      render: function() {
        var SubMenuNodes = this.props.data.map(function (d) {
          return (
            <Item>
              {d.item}
            </Item>
          );
        });

        if(this.props.data.length == 0) {
           return (
             <div></div>
           );
        }
        else {
          return (
            <div className="menu submenu">
              {SubMenuNodes}
            </div>
          );
        }
      }
    });

    var MainMenu = React.createClass({
      render: function () {
        var MainMenuNodes = this.props.data.map(function(d) {
          if(d.icon == "") {
            return (
              <Item className={d.class} type="link">
                {d.item}
                <SubMenu data={d.submenu}/>
              </Item>
            );
          }
          else {
            return (
              <Item className={d.class} type="link">
                {d.item}
                <Icon className={d.icon}></Icon>
                <SubMenu data={d.submenu}/>
              </Item>
            );
          }
        });

        return (
          <Menu className="main right secondary">
            {MainMenuNodes}
          </Menu>
        );
      }
    });

    return (
      <Menu className="secondary">
        <MainMenu data={this.state.data}/>
      </Menu>
    );
  }
});
