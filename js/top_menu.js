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

//main meun start
    var MainMenu = React.createClass({displayName: "MainMenu",
      render: function () {
//sub menu start
        var SubMenu = React.createClass({displayName: "SubMenu",
          render: function() {
            var SubMenuNodes = this.props.data.map(function (d) {
              var tab_url=d.tab_url;
              var content_url=d.content_url;
              var choice = function() {
  //body`s tab start
                $('#body_tab').empty();
                React.render(
                  React.createElement(BodyTab, {url: tab_url}),
                  document.getElementById('body_tab')
                );
  //body`s tab end
  //body`s content start
                $('#body_content').empty();
                React.render(
                  React.createElement(BodyContent.Zero, {url: content_url}),
                  document.getElementById('body_content')
                );
  //body`s content end
              };

              return (
                React.createElement(Item, {onClick: choice}, 
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
//sub menu end
        var MainMenuNodes = this.props.data.map(function(d) {
          var content_url=d.content_url;
          var choice = function() {
  //body`s content start
            $('#body_content').empty();
            React.render(
              React.createElement(BodyContent.Zero, {url: content_url}),
              document.getElementById('body_content')
            );
  //body1s content end
          };

          if(d.icon == "") {
            return (
              React.createElement(Item, {className: d.class, type: "link", onClick: choice}, 
                d.item
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
//main menu end
    return (
      React.createElement(Menu, {className: "secondary"}, 
        React.createElement(MainMenu, {data: this.state.data})
      )
    );
  }
});
