var BodyContent = {};

//0
BodyContent.Zero = React.createClass({displayName: "Zero",
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
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    //semantic framework
    var Segment = Semantify.Segment;

    var BodyItem = React.createClass({displayName: "BodyItem",
      render: function() {
        return (
            React.createElement("p", null, this.props.data.text)
        );
      }
    });

    return (
      React.createElement(BodyItem, {data: this.state.data})
    );
  }
});
