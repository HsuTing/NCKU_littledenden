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

//main meun start
    var MainMenu = React.createClass({
      render: function () {
//sub menu start
        var SubMenu = React.createClass({
          render: function() {
            var SubMenuNodes = this.props.data.map(function (d) {
              var click = function() {
                Content.Init();
                React.render(
                  <Content.Main url={d.url}/>,
                  document.getElementById('content')
                );
              };

              return (
                <Item onClick={click}>
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
//sub menu end
        var MainMenuNodes = this.props.data.map(function(d) {
          var click = function() {
            Content.Init();
            React.render(
              <Content.Main url={d.url}/>,
              document.getElementById('content')
            );
          };

          if(d.submenu.length == 0) {
            return (
              <Item className={d.class} type="link" onClick={click}>
                {d.item}
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
//main menu end
    return (
      <Menu className="secondary">
        <MainMenu data={this.state.data}/>
      </Menu>
    );
  }
});
