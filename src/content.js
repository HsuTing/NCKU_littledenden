var Content = {}
Content.Zero = React.createClass({
  render: function () {
    //semantic framework
    var Segment = Semantify.Segment;

    return (
      <Segment>
        <p>{this.props.data.text}</p>
      </Segment>
    );
  }
});
