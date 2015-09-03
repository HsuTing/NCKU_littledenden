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
          <div className="ui container">
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
          <Semantic.Grid className="stackable inverted divided equal height stackable">
            {this.state.data.map(function(d) {
              return (
                <div className="two wide column" key={d.id}>
                  {d.data.map(function(dd) {
                    return (
                      <List key={dd.id} data={dd}/>
                    );
                  })}
                </div>
              );
            })}
          </Semantic.Grid>
        </div>

      </Semantic.Segment>
    );
  }
});

module.exports = Footer;
