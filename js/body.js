var Body = React.createClass({displayName: "Body",
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

        return (
          React.createElement("div", null, 
            React.createElement(Menu, {className: "top attached tabular"}, 
              BodyItemNodes
            ), 
            React.createElement(Segment, {className: "bottom attached"}
            )
          )
        );
      }
    });

    return (
      React.createElement(BodyItem, {data: this.state.data})
    );
  }
});
