var $ = require('jquery');
var React = require('react');
var Semantic = require('./semantic.js');
var School = require('./school.js');
var Notice = require('./notice.js');
var Info = require('./info.js');

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

    $("#content").hide();
    $("#content").empty();

    switch(e) {
      case "info":
        React.render(
          <Info url={url}/>,
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

    $("#content").show();
  },
  render: function () {
    return (
      <Semantic.Segment className="vertical masthead center aligned inverted">

        <div className="ui container">
          <Semantic.Menu className="large secondary pointing inverted">
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

        <Semantic.Image className="fluid" src="img/center.jpg">
        </Semantic.Image>
      </Semantic.Segment>
    );
  }
});

module.exports = Header;
