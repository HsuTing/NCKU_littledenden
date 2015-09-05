var $ = require('jquery');
var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <embed src={this.props.url} width="100%" height="100%" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" />
    );
  }
});

module.exports = Home;
