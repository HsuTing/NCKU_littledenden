module.exports = function (url) {
  var $ = require('jquery');
  var React = require('react');
  var Semantic = require('./semantic.js');

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
    render: function () {
      var Item = React.createClass({
        render: function() {
          return (
            <Semantic.Item className={this.props.data.class} type="link" id={this.props.data.id}>
              {this.props.data.text}
            </Semantic.Item>
          );
        }
      });

      return (
        <Semantic.Segment className="vertical masthead center aligned inverted">

          <div className="ui container">
            <Semantic.Menu className="large secondary pointing inverted">
              <Semantic.Menu className="main right secondary">
                {this.state.data.map(function(d) {
                  return (
                   <Item key={d.id} data={d}/>
                  );
                })}
              </Semantic.Menu>
            </Semantic.Menu>
          </div>

          <Semantic.Image className="fluid" src="img/center.jpg">
          </Semantic.Image>
        </Semantic.Segment>
      );
    }
  });

  return (
    React.render(
      <Header url={url}/>,
      document.getElementById('header')
    )
  );
};
