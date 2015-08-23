var Content = {}
Content.Zero = React.createClass({displayName: "Zero",
  render: function () {
    //semantic framework
    var Segment = Semantify.Segment;

    return (
      React.createElement(Segment, null, 
        React.createElement("p", null, this.props.data.text)
      )
    );
  }
});
