var BodyContent = {};

//0
BodyContent.Zero = React.createClass({
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

    var BodyItem = React.createClass({
      render: function() {
        return (
            <p>{this.props.data.text}</p>
        );
      }
    });

    return (
      <BodyItem data={this.state.data}/>
    );
  }
});
