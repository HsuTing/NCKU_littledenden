var $ = require('jquery');
var React = require('react');
var Semantic = require('./semantic.js');

var Content = React.createClass({
  getInitialState: function() {
    return {data: {
       info: {
         text: "",
         title: [],
         data: []
       },
       speaker: {
         text: "",
         data: []
       }
    }};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        Semantic.dimmer.ready();
        Semantic.accordion.ready();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    var Speaker = React.createClass({
      render: function() {
        return (
          <Semantic.Card>
            <Semantic.Image src={this.props.data.img}></Semantic.Image>
            <div className="content">
              <Semantic.Header>
                {this.props.data.header}
              </Semantic.Header>
              <div className="meta">
                <span className="date">{this.props.data.text}</span>
              </div>
            </div>
          </Semantic.Card>
        );
      }
    });

    return (
      <Semantic.Segment className="vertical stripe">
        <div className="ui container content">
          <Semantic.Segment className="article">
            <Semantic.Header className="huge">
              {this.state.data.info.text}
            </Semantic.Header>
            <Semantic.Divider className="clearing"></Semantic.Divider>

            <Semantic.Table className="celled">
              <thead>
                <tr>
                  {this.state.data.info.title.map(function(d) {
                    return (
                      <th key={d}>{d}</th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {this.state.data.info.data.map(function(d) {
                  return (
                    <tr key={d.id}>
                      <td key={d.one}>{d.one}</td>
                      <td key={d.two}>{d.two}</td>
                      <td key={d.three}>{d.three}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Semantic.Table>

          </Semantic.Segment>
        </div>

        <div className="ui container content">
          <Semantic.Segment className="article">
            <Semantic.Header className="huge">
              {this.state.data.speaker.text}
            </Semantic.Header>
            <Semantic.Divider className="clearing"></Semantic.Divider>

            <div className="ui special cards">
              {this.state.data.speaker.data.map(function(d) {
                return (
                  <Speaker key={d.id} data={d}/>
                );
              })}
            </div>

          </Semantic.Segment>
        </div>
      </Semantic.Segment>
   );
  }
});

module.exports = Content;