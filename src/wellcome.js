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
        Semantic.accordion.ready();
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
        switch(this.props.data.id) {
          case "A1":
            question = "簡單介紹一下你的系吧?";
          break;

          case "A2":
            question = "系上有哪些課程呢？";
          break;

          case "A3":
            question = "系上有哪些活動呢？";
          break;

          case "A4":
            question = "系上有的系隊有哪些呢？";
          break;

          case "A5":
            question = "想跟學弟妹們說些什麼呢？";
          break;
        }

        return (
          <div className="left aligned">
            <div className="title">
              <Semantic.Icon className="dropdown"></Semantic.Icon>
              {question}
            </div>
            <div className="content">
              {this.props.data.data.map(function(d) {
                return (
                  <p key={d}>
                    {d}
                  </p>
                );
              })}
            </div>
          </div>
        );
      }
    });

    var Series = React.createClass({
      render: function() {
        var url = "img/series/" + this.props.data.header + "照片.jpg";

        return (
          <Semantic.Card>
            <div className="blurring dimmable image">
              <Semantic.Dimmer>
                <div className="content">
                  <div className="center">
                    <Semantic.Button className="inverted showpage">
                      瞭解更多
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

            <Semantic.Dimmer className="page">
              <div className="content">
                <div className="center">
                  <Semantic.Segment className="vertical stripe">
                    <div className="ui container content">
                      <Semantic.Icon className="remove circle outline big right floated link"></Semantic.Icon>

                      <Semantic.Header className="inverted">
                        {this.props.data.header}
                      </Semantic.Header>
                      <Semantic.Divider className="clearing inverted"></Semantic.Divider>

                      <Semantic.Accordion className="inverted">
                        {this.props.data.data.map(function(d) {
                          return (
                            <Question key={d.id} data={d}/>
                          );
                        })}
                      </Semantic.Accordion>
                    </div>
                  </Semantic.Segment>
                </div>
              </div>
            </Semantic.Dimmer>

          </Semantic.Card>
        );
      }
    });

    return (
      <Semantic.Segment className="vertical stripe">
        {this.state.data.map(function(d) {
          return (
            <div className="ui container content" key={d.id}>
              <Semantic.Segment className="article raised">
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
