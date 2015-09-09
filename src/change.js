var $ = require('jquery');
var React = require('react');
var Semantic = require('./semantic.js');

var Content = React.createClass({
  getInitialState: function() {
    $('#content').hide();
    $('#content').empty();
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        $('#content').show();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    return (
      <Semantic.Segment className="vertical stripe">
        <div className="ui container content">
          <Semantic.Segment className="article raised">
          </Semantic.Segment>
        </div>
      </Semantic.Segment>
   );
  }
});

module.exports = Content;
