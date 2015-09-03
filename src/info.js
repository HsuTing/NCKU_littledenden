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

    var Cell = React.createClass({
      render: function() {
        return (
          <div className="cell">
            {this.props.text}
            <br/>
          </div>
        );
      }
    })

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
                <tr className="center aligned">
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
                    <tr className="center aligned" key={d.id}>
                      <td>{d.time}</td>
                      <td className="center aligned">
                        {d.one.map(function(d) {
                          return (
                            <Cell text={d} key={d}/>
                          );
                        })}
                      </td>
                      <td className="center aligned">
                        {d.two.map(function(d) {
                          return (
                            <Cell text={d} key={d}/>
                          );
                        })}
                      </td>
                      <td className="center aligned">
                        {d.three.map(function(d) {
                          return (
                            <Cell text={d} key={d}/>
                          );
                        })}
                      </td>
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
