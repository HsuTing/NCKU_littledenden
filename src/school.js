var $ = require('jquery');
var React = require('react');
var Semantic = require('./semantic.js');
var Change = require('./change.js');

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
    var SubArticle = React.createClass({
      render: function() {
        return (
          <div className="ui fluid container">
            <Semantic.Header className="medium">
              {this.props.data.header}
            </Semantic.Header>

            <p className="gray">
              {this.props.data.text}
            </p>
          </div>
        );
      }
    });

    var Article = React.createClass({
      render: function() {
        var Url = React.createClass({
          onClick: function() {
            React.render(
              <Change url='arc/change.json'/>,
              document.getElementById('content')
            );
          },
          render: function() {
            if(this.props.data.id == "oia") {
              return (
                <div className="ui center aligned container">
                  <br/><Semantic.Button className="change inverted" onClick={this.onClick}>學長姊分享</Semantic.Button><br/>

                  <a href={this.props.data.url.url}>
                    {this.props.data.url.text}
                  </a>
                </div>
              );
            }
            else {
              return (
                <div className="ui center aligned container">
                  <a href={this.props.data.url.url}>
                    {this.props.data.url.text}
                  </a>
                </div>
              );
            }
          }
        });

        return (
          <div className="ui container content">
            <Semantic.Segment className="article raised">
              <Semantic.Header className="huge">
                {this.props.data.header}
              </Semantic.Header>
              <Semantic.Divider className="clearing"></Semantic.Divider>

              {this.props.data.subarticle.map(function(d) {
                return (
                  <SubArticle key={d.id} data={d}/>
                );
              })}

              <Url data={this.props.data}/>
            </Semantic.Segment>
          </div>
        );
      }
    });

    return (
      <Semantic.Segment className="vertical stripe">
        {this.state.data.map(function(d) {
          return (
            <Article key={d.id} data={d}/>
          );
        })}
      </Semantic.Segment>
    );
  }
});

module.exports = Content;
