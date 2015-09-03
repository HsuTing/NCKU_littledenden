var $ = require('jquery');
var React = require('react');
var Semantic = require('./semantic.js');

var Wellcome = React.createClass({
  getInitialState: function() {
    return {data: [] };
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        Semantic.dimmer.ready();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    var Question = React.createClass({
      render: function() {
        var question = "";
        switch(this.props.name) {
          case "1":
            question = "Q1";
          break;

          case "2":
            question = "Q2";
          break;

          case "3":
            question = "Q3";
          break;

          case "4":
            question = "Q4";
          break;

          case "5":
            question = "Q5";
          break;
        }

        return (
          <Semantic.Segment className="article">
            <Semantic.Header className="huge">
              {question}
            </Semantic.Header>
            <Semantic.Divider className="clearing"></Semantic.Divider>

            {this.props.data.map(function(d) {
              return (
                <p>
                  {d}
                </p>
              );
            })}
          </Semantic.Segment>
        );
      }
    });

    var Series = React.createClass({
      render: function() {
        var url = "img/" + this.props.data.header + "照片.jpg";
        var count = 0;

        return (
          <Semantic.Card>
            <div className="blurring dimmable image">
              <Semantic.Dimmer>
                <div className="content">
                  <div className="center">
                    <Semantic.Button className="inverted">
                      瞭解更多

                      <Semantic.Dimmer className="page">
                        <div className="content">
                          <div className="center">
                            {this.props.data.data.map(function(d) {
                              count = count * 1 + 1;
                              return (
                                <Question date={d} key={count} name={count}/>
                              );
                            })}
                          </div>
                        </div>                        
                      </Semantic.Dimmer>

                    </Semantic.Button>
                  </div>
                </div>
              </Semantic.Dimmer>
              <Semantic.Image src={url} alt="無照片"></Semantic.Image>
            </div>
            <div className="content">
              <Semantic.Header>
                {this.props.data.header}
              </Semantic.Header>
              <div className="meta">
                {this.props.data.text.map(function(d) {
                  return (
                    <span className="date" key={d}>{d}</span>
                  );
                })}
              </div>
            </div>
          </Semantic.Card>
        );
      }
    });

    return (
      <Semantic.Segment className="vertical stripe">
        {this.state.data.map(function(d) {
          return (
            <div className="ui container content" key={d.id}>
              <Semantic.Segment className="article">
                <Semantic.Header className="huge">
                  {d.header}
                </Semantic.Header>
                <Semantic.Divider className="clearing"></Semantic.Divider>

                <div className="ui special cards">
                  {d.data.map(function(d) {
                    return (
                      <Series key={d.id} data={d}/>
                    );
                  })}
                </div>
              </Semantic.Segment>
            </div>
          );
        })}
      </Semantic.Segment>
   );
  }
});

module.exports = Wellcome;
