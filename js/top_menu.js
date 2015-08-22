var TopMenu = React.createClass({displayName: "TopMenu",
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

    var SubMenu = React.createClass({displayName: "SubMenu",
      render: function() {
        var SubMenuNodes = this.props.data.map(function (d) {
          return (
            React.createElement(Item, null, 
              d.item
            )
          );
        });

        if(this.props.data.length == 0) {
           return (
             React.createElement("div", null)
           );
        }
        else {
          return (
            React.createElement("div", {className: "menu submenu"}, 
              SubMenuNodes
            )
          );
        }
      }
    });

    var MainMenu = React.createClass({displayName: "MainMenu",
      render: function () {
        var MainMenuNodes = this.props.data.map(function(d) {
          if(d.icon == "") {
            return (
              React.createElement(Item, {className: d.class, type: "link"}, 
                d.item, 
                React.createElement(SubMenu, {data: d.submenu})
              )
            );
          }
          else {
            return (
              React.createElement(Item, {className: d.class, type: "link"}, 
                d.item, 
                React.createElement(Icon, {className: d.icon}), 
                React.createElement(SubMenu, {data: d.submenu})
              )
            );
          }
        });

        return (
          React.createElement(Menu, {className: "main right secondary"}, 
            MainMenuNodes
          )
        );
      }
    });

    return (
      React.createElement(Menu, {className: "secondary"}, 
        React.createElement(MainMenu, {data: this.state.data})
      )
    );
  }
});
