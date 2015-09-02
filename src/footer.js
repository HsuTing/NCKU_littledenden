var $ = require('jquery');
var React = require('react');
var Semantic = require('./semantic.js');

var Footer = React.createClass({
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
    var List = React.createClass({
      render: function () {
        return (
          <div className="two wide column">
            <Semantic.Header className="inverted">
              {this.props.data.text}
            </Semantic.Header>

            <Semantic.List className="inverted link">
              {this.props.data.data.map(function(d) {
                return (
                  <Semantic.Item key={d.name}>
                    {d.id}
                    <div className="right floated content">
                      {d.name}
                    </div>
                  </Semantic.Item>
                );
              })}
            </Semantic.List>
          </div>
        );
      }
    });

    return (
      <Semantic.Segment className="vertical inverted footer">

        <div className="ui container">
          {this.state.data.map(function(d) {
            return (
              <Semantic.Grid className="stackable inverted divided equal height stackable" key={d.id}>
                {d.data.map(function(d) {
                  return (
                    <List key={d.id} data={d}/>
                  );
                })}
              </Semantic.Grid>
            );
          })}
        </div>

      </Semantic.Segment>
    );
  }
});

module.exports = Footer;
