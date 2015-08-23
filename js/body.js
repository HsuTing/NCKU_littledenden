var Body = React.createClass({displayName: "Body",
  getInitialState: function() {
    return {data: {
      "text": "",
      "value": "0",
      "tab": []
    }};
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
        var BodyItemNodes = this.props.data.tab.map(function (d) {
          return (
            React.createElement(Item, {className: d.class, type: "link"}, 
              d.item
            )
          );
        });

        if(this.props.data.tab.length == 0) {
          if(this.props.data.value == "0") {
            return (
              React.createElement(Content.Zero, {data: this.props.data})
            );
          }
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
