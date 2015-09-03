var $ = require('jquery');
var React = require('react');
var Semantic = require('./semantic.js');

var Img = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  render: function () {
    return (
      <Semantic.Image className="fluid" src={this.props.url}>
      </Semantic.Image>
    );
  }
});

module.exports = Img;
