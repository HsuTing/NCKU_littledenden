var $ = require('jquery');
var React = require('react');
var Semantic = require('./semantic.js');
var School = require('./school.js');
var Notice = require('./notice.js');
var Wellcome = require('./wellcome.js');
var Info = require('./info.js');
var Home = require('./home.js');
var Img = require('./img.js');

var Header = React.createClass({
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
        Semantic.menu.ready();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  onClick: function(e) {
    var url = 'arc/' + e + '.json';

    switch(e) {
      case "home":
        React.render(
          <Home url='img/home.svg'/>,
          document.getElementById('img')
        );
        $('#content').hide();
        $('#content').empty();
      break;

      default:
        React.render(
          <Img url='img/center.jpg'/>,
          document.getElementById('img')
        );
      break;
    }

    switch(e) {
      case "info":
        React.render(
          <Info url={url}/>,
          document.getElementById('content')
        );
      break;

      case "wellcome":
        React.render(
          <Wellcome url={url}/>,
          document.getElementById('content')
        );
      break;

      case "notice":
        React.render(
          <Notice url={url}/>,
          document.getElementById('content')
        );
      break;

      case "school":
        React.render(
          <School url={url}/>,
          document.getElementById('content')
        );
      break;
    }
  },
  render: function () {
    return (
      <div className="ui container">
        <Semantic.Menu className="large secondary pointing inverted">
          <embed src="img/icon.svg" width="120" height="40" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" />

          <Semantic.Menu className="main right secondary">
            {this.state.data.map(function(d) {
              return (
                <Semantic.Item key={d.id} className={d.class} type="link" id={d.id} onClick={this.onClick.bind(this, d.id)}>
                  {d.text}
                </Semantic.Item>
              );
            }, this)}
          </Semantic.Menu>
        </Semantic.Menu>
      </div>
    );
  }
});

module.exports = Header;
