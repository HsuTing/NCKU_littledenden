var BodyTab = React.createClass({displayName: "BodyTab",
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
    var Segment = Semantify.Segment;

    var BodyItem = React.createClass({displayName: "BodyItem",
      render: function() {
        var BodyItemNodes = this.props.data.map(function (d) {
          return (
            React.createElement(Item, {className: d.class, type: "link"}, 
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
            React.createElement(Menu, {className: "top attached tabular"}, 
              BodyItemNodes
            )
          );
        }
      }
    });

    return (
      React.createElement(BodyItem, {data: this.state.data})
    );
  }
});
